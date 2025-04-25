import React from "react";
import { Link } from "react-router-dom";
import { receiveList } from "./receiveList";
import styles from "./Notice.module.css";
import newImg from "@assets/images/common/new.png";
import arrow from "@assets/images/notice/arrow_right.png";

function Receive() {
    return (
        <div className={`container ${styles.receive} ${styles.inner}`}>
            <h2 className={styles.title}>받은 제안함</h2>
            <ul className={styles.list}>
                {receiveList && receiveList.map((list, index) => {
                    return (
                        <li
                            key={index}
                            className={list.read ? styles.readed : ""}
                        >
                            <Link to="#">
                                <span className={styles.category}>
                                    {list.category}
                                </span>
                                <h3>
                                    <span>{list.title}</span>
                                    {!list.read && (
                                        <img src={newImg} alt="NEW" />
                                    )}
                                </h3>
                                <p className={styles.desc}>{list.desc}</p>
                                {list.read && (
                                    <div className={styles.read}>
                                        {list.readDate} 읽음
                                    </div>
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <button type="button" className={styles.btnMore}>
                더보기
                <img src={arrow} alt="" />
            </button>
        </div>
    );
}

export default Receive;
