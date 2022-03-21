import Player from "./Player";
import {amCurrentPlayer, getCurrentPlayer, getGuessingPlayer, getSortedPlayers, getTeams} from "../utils";
import {getUsername} from "../auth/token";
import styles from "./Table.module.css"

export default function Table({room}) {
    let players = getSortedPlayers(room);
    while (players.length < 4)
        players.push('-');

    let teams = getTeams(room);

    let playersComponent = [];
    const directions = ["up", "left", "down", "right"];
    players.forEach((player, index) => {
        playersComponent.push(
            <Player
                key={index}
                direction={directions[index]}
                isCurrent={getCurrentPlayer(room) === player}
                name={player}
                team={teams[index]}/>
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
            <svg className={styles.mid} width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="125" cy="125" r="125" stroke="#F6F8FC" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 20"/>
            </svg>
        </div>
    </div>;
}