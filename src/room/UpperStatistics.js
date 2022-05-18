import {useEffect, useState} from "react";
import styles from "./Statistics.module.css"
import {getPersian} from "../utils";

export default function UpperStatistics({room}) {

    const {team_one_score, team_two_score} = room.match;

    if(!room.match)
        return <></>;

    return <div className={styles.scoreHolder}>
        <p>
            {getPersian(team_one_score)}
            {"                        "}
            -
            {"                        "}
            {getPersian(team_two_score)}
        </p>
    </div>

}