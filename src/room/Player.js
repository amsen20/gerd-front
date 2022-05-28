import {getUsername} from "../auth/token";
import { getPlayer } from "../utils";
import styles from "./players.module.css";

export default function Player({name, team, isCurrent, isStarted}) {

    return <div className={styles.playerHolder}>
        <div className={styles.circlesWrapper}>
            {getPlayer(styles, name !== '-', team, isCurrent, isStarted)}
        </div>
        <p  className={styles.playerName} style={{fontWeight: getUsername() === name ? "bold" : "normal"}}>
            {name}
        </p>
    </div>;
}