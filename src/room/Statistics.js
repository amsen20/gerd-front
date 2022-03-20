import {useEffect, useState} from "react";
import {MATCH_STATE} from "../consts";

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

    return <div>
        <p>
            team one: {team_one_score}
        </p>
        <p>
            team two: {team_two_score}
        </p>
        <p>
            current round: {current_round}
        </p>
        <p>
            current time: {RemainingTime}
        </p>
    </div>

}