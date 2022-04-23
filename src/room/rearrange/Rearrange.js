import { getSortedPlayers, getTeamsByType } from "../../utils";
import TeamsCandidate from "./TeamsCandidate";
import styles from "./Rearrange.module.css";

export default function Rearrange({room}) {
    const players = getSortedPlayers(room);

    let teamsCandidatesComponents = [];

    for(let teamsType=1 ; teamsType<=3 ; teamsType++) {
        const sides = getTeamsByType(teamsType);
        let teams = {
            1: [],
            2: []
        };

        for(let i=0 ; i<players.length ; i++)
            teams[sides[i]].push([players[i]]);
        
        teamsCandidatesComponents.push(<TeamsCandidate key={teamsType} room={room} teamsTypeId={teamsType} teams={teams} isSelected={room.teams === teamsType} />);
    }

    return <div className={styles.teamsCandidatesHolder}>
        {teamsCandidatesComponents}
    </div>;

}