import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Board.module.css";
import icon1 from "@assets/images/board/type0.png";
import icon2 from "@assets/images/board/type1.png";

function Tabs() {
    const { pathname } = useLocation();
    return (
        <div className={styles.tab}>
            <div>
                <Link to="/board/people" className={pathname.indexOf("people") > -1? styles.on: ""}>
                    <img src={icon1} alt="" />
                    국민동의 청원
                </Link>
                <Link to="/board/member" className={pathname.indexOf("member") > -1? styles.on: ""}>
                    <img src={icon2} alt="" />
                    의원소개 청원
                </Link>
            </div>
        </div>
    );
}

export default Tabs;
