import {getUsername} from "../auth/token";
import BottomBarAfterStart from "./BottomBarAfterStart";
import {authPost} from "../utils";
import styles from "./bottomBar.module.css";

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
            return <button className={styles.copyLink} onClick={copyUrl}>
                کپی کردن لینک اتاق
            </button>;
        else {
            if (!isMatchStarted)
                return <button className={styles.start} onClick={startMatch}>
                    شروع
                </button>;
            else
                return <BottomBarAfterStart room={room}/>
        }
    }

    if(hasFreeSeat)
        return <button className={styles.start} onClick={join}>
            ورود به اتاق
        </button>;

    return <p> room is full </p>;
}