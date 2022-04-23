import styles from "./TeamsCandidates.module.css";
import { authPost } from "../../utils";

export default function TeamsCandidate({room, teamsTypeId, teams, isSelected}) {

    const changeTeams = async () => {
        await authPost(`/rooms/${room.id}/rearrange`, {teams: teamsTypeId}).then();
    };

    return <div className={styles.teamsCandidateHolder + (isSelected ? " " + styles.teamsCandidateSelected : "")} onClick={changeTeams}>
        <div className={styles.firstTeamHolder}>
            <p style={{float: "left"}}>
                {teams[1][0]}
            </p>
            <p style={{float: "right"}}>
                {teams[1][1]}
            </p>
        </div>

        <div className={styles.secondTeamHolder}>
            <p style={{float: "left"}}>
                {teams[2][0]}
            </p>
            <p style={{float: "right"}}>
                {teams[2][1]}
            </p>
        </div>
    </div>;
}