import {useEffect, useState} from "react";
import {isAuth, loginUser, setToken, setUsername} from "./token";
import {useNavigate} from "react-router-dom";

export default function Login (props) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth())
            navigate("/");
    });

    const handleSubmit = async e => {
        e.preventDefault();
        const {token} = await loginUser({
            username,
            password
        });
        if(token) {
            setToken(token);
            setUsername(username);
            navigate("/");
        }
    };

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}