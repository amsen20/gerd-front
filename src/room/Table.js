import Player from "./Player";
import {amCurrentPlayer, getCurrentPlayer, getGuessingPlayer, getSortedPlayers, getTeams} from "../utils";
import {getUsername} from "../auth/token";
import styles from "./Table.module.css"

export default function Table({room}) {
    let players = getSortedPlayers(room);
    while (players.length < 4)
        players.push('-');

    let teams = getTeams(room);

    let playersComponent = []; // TODO fix order
    players.forEach((player, index) => {
        playersComponent.push(
            <Player
                key={index}
                isCurrent={getCurrentPlayer(room) === player}
                name={player}
                team={teams[index]}
                isStarted={!!room.match}
            />
        );
    });

    let lastWord = '';
    if(room.match && room.match.words && room.match.words > 0)
        lastWord = room.match.words[room.match.words.length - 1].text;

    return <div>
        <div className={styles.table}>
            {playersComponent}
        </div>
    </div>;
}