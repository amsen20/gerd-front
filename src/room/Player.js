import {getUsername} from "../auth/token";

export default function Player({name, team}) {
    return <p style={{color: team === 1 ? "red" : "blue"}}>
        {(getUsername() === name ? "*" : "") + name}
    </p>;
}