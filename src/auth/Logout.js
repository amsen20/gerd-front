import {removeToken} from "./token";
import {navigate} from "react-router-dom";

export default function Logout(props) {
    removeToken();
    navigate("/login");
}