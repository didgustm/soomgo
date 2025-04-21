import React from "react";
import { Link } from "react-router-dom";
import { receiveList } from "./receiveList";
import styles from "./Notice.module.css";
import newImg from "@assets/images/common/new.png";

function Receive() {
    return (
        <div className={`container ${styles.receive} ${styles.inner}`}>
            <h2 className={styles.title}>받은 제안함</h2>
            <ul className={styles.list}>
                {receiveList.map((receive, index) => {
                    return (
                        <li key={index} className={receive.read? styles.readed: ""}>
                            <Link to="#">
                                <span className={styles.category}>
                                    {receive.type}
                                </span>
                                <h3>
                                    <span>{receive.title}</span>
                                    {!receive.read && (
                                        <img src={newImg} alt="NEW" />
                                    )}
                                </h3>
                                <p>{receive.desc}</p>
                                {receive.read && (
                                    <div className={styles.read}>
                                        {receive.readDate} 읽음
                                    </div>
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Receive;
