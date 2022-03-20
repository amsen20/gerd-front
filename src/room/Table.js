import Player from "./Player";
import {amCurrentPlayer, getCurrentPlayer, getGuessingPlayer, getSortedPlayers, getTeams} from "../utils";
import {getUsername} from "../auth/token";

export default function Table({room}) {
    let players = getSortedPlayers(room);
    while (players.length < 4)
        players.push('-');

    let teams = getTeams(room);

    let playersComponent = [];
    players.forEach((player, index) => {
        playersComponent.push(<Player key={index} isCurrent={getCurrentPlayer(room) === player} name={player} team={teams[index]}/>);
    });

    const isGuessingPlayer = getGuessingPlayer(room) === getUsername();
    let lastWord = '';
    if(room.match.words)
        lastWord = room.match.words[room.match.words.length - 1].text;

    return <div>
        <div>
            <p>
                {isGuessingPlayer ? "try to guess!!" : lastWord}
            </p>
        </div>
        <div>
            {playersComponent}
        </div>
    </div>;
}