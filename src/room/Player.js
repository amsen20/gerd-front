import {getUsername} from "../auth/token";

export default function Player({name, team, isCurrent}) {
    return <p style={{color: team === 1 ? "red" : "blue", fontWeight: getUsername() === name ? "bold" : "normal"}}>
        {(isCurrent ? "*" : "") + name}
    </p>;
}