import { getUsername } from '../auth/token';
import {MATCH_STATE} from '../consts'
import {amCurrentPlayer, authPost, getCurrentPlayer, getGuessingPlayer, getLastWord} from "../utils";
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
            return <div onClick={play} className={styles.start + " " + styles.bottomBarButton} >
                شروع
            </div>
        else
            return <p>
                .باید شروع کند {getCurrentPlayer(room)}
            </p>
    }

    if(state === MATCH_STATE.FINISHED)
        return <></>;
    
    const showButtons = !(state === MATCH_STATE.PLAYING && !amCurrentPlayer(room));
    
    return <div className={styles.bottomBarAfterStartHolder}>
        <p>
            {getGuessingPlayer(room) === getUsername() ? '!سعی کن حدس بزنی' : getLastWord(room)}
        </p>
        {showButtons && <div className={styles.buttonsHolder}>
            <button className={styles.skip + " " + styles.bottomBarButton} onClick={skip}>رد کن</button>
            <button className={styles.correct + " " + styles.bottomBarButton} onClick={correct}>درست گفت</button>
        </div>}
    </div>;
}