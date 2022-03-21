import {MATCH_STATE} from '../consts'
import {amCurrentPlayer, authPost, getCurrentPlayer} from "../utils";
import styles from "./bottomBar.module.css"

export default function BottomBarAfterStart({room}) {
    const {match: {state}} = room;
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
            return <div onClick={play} className={styles.start} >
                شروع
            </div>
        else
            return <p>
                {getCurrentPlayer(room)} should start the play.
            </p>
    }

    if(state === MATCH_STATE.FINISHED || (state === MATCH_STATE.PLAYING && !amCurrentPlayer(room)))
        return <></>;

    return <div>
        <div className={styles.skip} onClick={skip}>skip</div>
        <div className={styles.correct} onClick={correct}>correct</div>
    </div>
}