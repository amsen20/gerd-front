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

    const isGuessingPlayer = getGuessingPlayer(room) === getUsername();
    let lastWord = '';
    console.log(room)
    if(room.match && room.match.words && room.match.words > 0)
        lastWord = room.match.words[room.match.words.length - 1].text;

    return <div>
        <div>
            <p>
                {isGuessingPlayer ? "try to guess!!" : lastWord}
            </p>
        </div>
        <div className={styles.table}>
            {playersComponent}
        </div>
    </div>;
}