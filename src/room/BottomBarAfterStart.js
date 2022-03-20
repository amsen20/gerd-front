import {MATCH_STATE} from '../consts'
import {amCurrentPlayer, authPost, getCurrentPlayer} from "../utils";

export default function BottomBarAfterStart({room}) {
    const {state} = room;
    const play = async () => {
        await authPost(`/rooms/${room.id}/play`, null).then();
    };
    const correct = async () => {
        await authPost(`/rooms/${room.id}/correct`, null).then();
    };
    const skip = async () => {
        await authPost(`/rooms/${room.id}/skip`, null).then();
    };

    if(state === MATCH_STATE.WAITING || state === MATCH_STATE.NEWBORN) {
        if (amCurrentPlayer(room))
            return <button onClick={play}> start the play </button>
        else
            return <p>
                {getCurrentPlayer(room)} should start the play.
            </p>
    }

    if(state === MATCH_STATE.FINISHED || (state === MATCH_STATE.PLAYING && !amCurrentPlayer(room)))
        return <></>;

    return <div>
        <button onClick={correct}>skip</button>
        <button onClick={skip}>correct</button>
    </div>
}