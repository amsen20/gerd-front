import {useEffect, useState} from "react";
import {isAuth, loginUser, setToken, setUsername} from "./token";
import {useNavigate} from "react-router-dom";
import styles from "./login.module.css"
import {getLogo} from "../logo";

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
        <div className={styles.loginHolder}>
            {getLogo()}
            <h1>
                به بازی گرد خوش اومدید.
            </h1>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <label className={styles.label}>
                    <p>نام کاربری:</p>
                    <input className={styles.loginInput} type="text" onChange={e => setUserName(e.target.value)} placeholder={"نام کاربری را به انگلیسی وارد کنید"}  />
                </label>
                <label className={styles.label}>
                    <p>کلمه عبور:</p>
                    <input className={styles.loginInput} type="password" onChange={e => setPassword(e.target.value)} placeholder={"رمز عبور"} />
                </label>
                <div>
                    <button className={styles.button} type="submit">
                        ورود
                    </button>
                </div>
            </form>
        </div>
    );
}