import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { lists } from "./boardList";
import styles from "./Board.module.css";
import newImg from "@assets/images/common/new.png";

function ListElement({ type }) {
    const [typeList, setTypeList] = useState([]);
    /**
     * 카테고리 0, 1
     */
    const category = ["창업/지원", "일자리"];

    useEffect(() => {
        setTypeList(lists.filter((l) => l.type === type));
    }, []);
    return (
        <ul className={`${styles.list} ${styles.container}`}>
            {typeList.length === 0 ? (
                <li className={styles.empty}>게시물이 없습니다.</li>
            ) : (
                typeList.map((list, index) => {
                    return (
                        <li key={index}>
                            <Link to={`${list.id}`}>
                                <span className={styles.category}>
                                    {category[list.category]}
                                </span>
                                <p className={styles.title}>
                                    <span>{list.title}</span>
                                    {index <= 2 && (
                                        <img src={newImg} alt="NEW" />
                                    )}
                                </p>
                                <p className={styles.desc}>{list.desc}</p>
                            </Link>
                        </li>
                    );
                })
            )}
        </ul>
    );
}

export default ListElement;
