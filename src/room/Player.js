import {getUsername} from "../auth/token";
import styles from "./players.module.css";

const getPlayer = (isJoined, team, isCurrent) => {
    if(!isJoined)
        return <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="32.5" stroke={team === 1 ? "#C7D338" : "#007EA8"} strokeWidth="5"/>
        </svg>

    return <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        {isCurrent ? <circle cx="35" cy="35" r="35" fill={team === 1 ? "#C7D338" : "#007EA8"} stroke="#F6F8FC" strokeWidth="3" /> :
            <circle cx="35" cy="35" r="35" fill={team === 1 ? "#C7D338" : "#007EA8"}  />}
    </svg>;
};

export default function Player({name, team, isCurrent, direction}) {
    let directionStyle = null;
    switch (direction) {
        case 'up':
            directionStyle = styles.up;
            break;
        case 'left':
            directionStyle = styles.left;
            break;
        case 'down':
            directionStyle = styles.down;
            break;
        case 'right':
            directionStyle = styles.right;
            break;
        default:
            console.error("invalid dir!")
            break;
    }

    return <div className={styles.playerHolder + " " + directionStyle}>
        {getPlayer(name !== '-', team, isCurrent)}
        <p  className={styles.playerName} style={{fontWeight: getUsername() === name ? "bold" : "normal"}}>
            {name}
        </p>
    </div>;
}