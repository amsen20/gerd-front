import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getToken, getUsername} from "../auth/token";
import {authGet, authPost} from "../utils";
import BottomBar from './BottomBar';
import Table from "./Table";
import styles from "./Room.module.css"
import Rearrange from "./rearrange/Rearrange";
import UpperStatistics from "./UpperStatistics";
import BottomStatistics from "./BottomStatistics";
import {apiServer, MATCH_STATE} from '../consts'
import Finished from "./FinishedPage";

export default function Room(props) {
    let [room, setRoom] = useState(null);
    let [needWs, setNeedWs] = useState(false);

    let {roomNameId} = useParams();
    let roomNameIdSplit = roomNameId.split('-');
    let roomId = roomNameIdSplit[roomNameIdSplit.length - 1];

    const connectWebSocket = (ticket) => {
        return new Promise((resolve, reject) => {
            let server = new WebSocket(`ws://${apiServer}/rooms/${roomId}/?ticket=${ticket}`);
            server.onopen = () => {
                resolve(server);
            };
            server.onerror = reject;

        });
    }

    const establishWebsocket = async () => {
        const {ticket} = await authGet(`/rooms/${roomId}/ticket`);
        let ws = await connectWebSocket(ticket);
        ws.onmessage = (event) => {
            const pushedRoom=JSON.parse(event.data);
            setRoom(pushedRoom.data);
        };
    }

    const updateRoom = async () => {
        setRoom(await authGet(`/rooms/${roomId}/`));
    };

    const join = async () => {
        await authPost(`/rooms/${roomId}/join`, null);
        setNeedWs(true);
        await updateRoom();
    };

    useEffect(() => {
        authGet(`/rooms/${roomId}/`)
            .then(newRoom => setRoom(newRoom));
    }, []);

    useEffect(() => {
        if(room && !needWs && room.players.includes(getUsername()))
            setNeedWs(true);
    }, [room, needWs]);

    useEffect(() => {
        if(needWs)
            establishWebsocket().then();
    }, [needWs]);

    if (!room)
        return <p>
            loading
        </p>;

    let hasFreeSeat = room.players.length < 4;
    let isJoined = room.players.includes(getUsername());
    let isRearranging = !room.match && !hasFreeSeat && isJoined;
    let isFinished = (room.match && room.match.state === MATCH_STATE.FINISHED);

    if (isFinished)
        return <Finished room={room} />;

    if (!isJoined && !hasFreeSeat)
        return <p>
            room is full
        </p>;

    return <div className={styles.roomHolder}>
        <div className={styles.tableAndBarHolder}>
            {room.match && <UpperStatistics room={room} /> }
            {isRearranging ? <Rearrange room={room} /> : <Table room={room}/> }
            {room.match && <BottomStatistics room={room} /> }
            <BottomBar room={room} join={join} />
        </div>
    </div>
}