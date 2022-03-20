import {getUsername} from "../auth/token";
import BottomBarAfterStart from "./BottomBarAfterStart";
import {authPost} from "../utils";

export default function BottomBar({room, join}) {

    const startMatch = async () => {
        await authPost(`/rooms/${room.id}/start`, null).then();
    };

    let isJoined = room.players.includes(getUsername());
    const isMatchStarted = !!room.match;
    const hasFreeSeat = room.players.length < 4;

    const copyUrl = () => {
        navigator.clipboard.writeText(window.location).then();
    };

    if (isJoined) {
        if (!isMatchStarted && hasFreeSeat)
            return <button onClick={copyUrl}> copy link </button>;
        else {
            if (!isMatchStarted)
                return <button onClick={startMatch}> start </button>;
            else
                return <BottomBarAfterStart room={room}/>
        }
    }

    if(hasFreeSeat)
        return <button onClick={join}> Join </button>;

    return <p> room is full </p>;
}