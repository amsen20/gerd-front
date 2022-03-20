import {getToken, isAuth} from "../auth/token";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import words from "random-words";

export default function Hall (props) {
    let randomWords = require('random-words');
    let navigate = useNavigate();

    useEffect(() => {
        if (!isAuth())
            navigate("/login");
    });

    const createRoom = async () => {
        let room = await fetch('/rooms/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${getToken()}`
            },
            body: JSON.stringify({
                "name": randomWords({exactly: 3, join: '-'}),
                "players": []
            })
        })
            .then(data => data.json());

        
    };

    return <>
        <p>
            salam
        </p>
        <button onClick={createRoom}>create room</button>
    </>;
}