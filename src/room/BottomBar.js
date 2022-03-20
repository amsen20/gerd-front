import {getUsername} from "../auth/token";

export default function BottomBar(props) {
    const {room, join} = props;

    let isJoined = room.players.includes(getUsername());
    const isMatchStarted = !!room.match;
    const hasFreeSeat = room.players.length < 4;

    const copyUrl = () => {
        navigator.clipboard.writeText(window.location).then();
    };

    if (isJoined) {
        if (!isMatchStarted && hasFreeSeat)
            return <button onClick={copyUrl}> copy link </button>;
        else
            return <p> TODO </p>;
    }

    if(hasFreeSeat)
        return <button onClick={join}> Join </button>;

    return <p> room is full </p>;
}