import {useState} from "react";

export default function Statistics({room}) {
    let [RemainingTime, setRemainingTime] = useState(0);

    if(!room.match)
        return <></>;

    const {current_round, team_one_score, team_two_score, round_start_time, total_round_time} = room.match;

    setInterval(() => {
        setRemainingTime(total_round_time - Math.round((Date.now() - Date.parse(round_start_time))/1000));
    }, 1000);

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