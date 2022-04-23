import {getUsername} from "../auth/token";
import styles from "./players.module.css";

const getPlayer = (isJoined, team, isCurrent, isStarted) => {

    let color;

    if (!isStarted)
        color = "#FFFFFF";
    else
        color = team === 1 ? "#C7D338" : "#007EA8";

    if(!isJoined)
        return <svg className={styles.circles} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="32.5" stroke={color} strokeWidth="5"/>
        </svg>

    return <svg className={styles.circles} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        {isCurrent ? <circle cx="35" cy="35" r="35" fill={color} stroke="#F6F8FC" strokeWidth="3" /> :
            <circle cx="35" cy="35" r="35" fill={color} />}
    </svg>;
};

export default function Player({name, team, isCurrent, isStarted}) {

    return <div className={styles.playerHolder}>
        <div className={styles.circlesWrapper}>
            {getPlayer(name !== '-', team, isCurrent, isStarted)}
        </div>
        <p  className={styles.playerName} style={{fontWeight: getUsername() === name ? "bold" : "normal"}}>
            {name}
        </p>
    </div>;
}