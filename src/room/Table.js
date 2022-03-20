import Player from "./Player";

export default function Table({room}) {
    let players = JSON.parse(JSON.stringify(room.players));
    players.sort();
    while (players.length < 4)
        players.push('-');

    let teams = []

    switch (room.teams) {
        case 1:
            teams = [1, 1, 2, 2];
            break;
        case 2:
            teams = [1, 2, 1, 2];
            break;
        case 3:
            teams = [1, 2, 2, 1];
            break;
        default:
            console.error("bad teams");
    }

    let playersComponent = [];
    players.forEach((player, index) => {
        playersComponent.push(<Player key={index} name={player} team={teams[index]}/>);
    });

    return <div>
        {playersComponent}
    </div>;
}