import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getToken, getUsername} from "../auth/token";

export default function Room(props) {
    let [room, setRoom] = useState(null);

    let {roomNameId} = useParams();
    let roomNameIdSplit = roomNameId.split('-');
    let roomId = roomNameIdSplit[roomNameIdSplit.length - 1];

    const isMatchStarted = () => {
        return !!room.match;
    };

    useEffect(() => {
        fetch(`/rooms/${roomId}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${getToken()}`
            },
            body: JSON.stringify({})
        })
            .then(data => data.json())
            .then(roomInfo => setRoom(roomInfo));
    });

    useEffect(() => {

    }, [room]);

    const isJoined = () => getUsername() in room.players;

    const hasFreeSeat = () => room.players.length === 4;

    const getBottomBar = () => {
        if (isJoined()) {
            if (!isMatchStarted() && hasFreeSeat())
                return <button> copy link </button>;
            else
                return <p> TODO </p>;
        }
        if(hasFreeSeat())
            return <button> Join </button>;
        return null;
    };

    const cannotJoin = () => {
        return room && !isJoined() && !hasFreeSeat();
    };

    if(!room)
        return <p> loading </p>;

    if (cannotJoin())
        return <p> room is full </p>;

    return <>
        {getBottomBar()}
    </>
}