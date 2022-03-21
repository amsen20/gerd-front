import {useEffect, useState} from "react";
import {MATCH_STATE} from "../consts";
import styles from "./Statistics.module.css"
import {getClockLogo, teamCircle} from "../logo";
import {getPersian} from "../utils";

export default function Statistics({room}) {
    let [RemainingTime, setRemainingTime] = useState(0);

    const {current_round, team_one_score, team_two_score, round_start_time, round_duration_seconds} = room.match;

    useEffect(() => {
        if (!room.match || room.match.state !== MATCH_STATE.PLAYING) {
            setRemainingTime(round_duration_seconds);
            return;
        }

        let interval = setInterval(() => {
            setRemainingTime(round_duration_seconds - Math.round((Date.now() - Date.parse(round_start_time))/1000));
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [room]);

    if(!room.match)
        return <></>;

    return <div className={styles.statisticsHolder}>
        <div className={styles.dataHolder}>
            <div className={styles.teamHolder}>
                {teamCircle(1)}
                <p>
                    {getPersian(team_one_score)}
                </p>
            </div>
            <div className={styles.teamHolder}>
                {teamCircle(2)}
                <p>
                    {getPersian(team_two_score)}
                </p>
            </div>
        </div>
        <div className={styles.dataHolder + " " + styles.timeHolder}>
            {getClockLogo()}
            <p>
                {getPersian(RemainingTime)} ثانیه
            </p>
        </div>
        <div className={styles.dataHolder}>
            <p>
                راند {getPersian(current_round)}
            </p>
        </div>
    </div>

}