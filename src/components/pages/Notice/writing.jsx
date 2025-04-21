import React from "react";
import { Link } from "react-router-dom";
import { noticeList } from "./noticeList";
import styles from "./Notice.module.css";
import heart from "@assets/images/notice/ic_heart.png";
import heartOn from "@assets/images/notice/ic_heart_on.png";

function Writing() {
    return (
        <div className={`container ${styles.writing} ${styles.inner}`}>
            <h2 className={styles.title}>내 게시글 목록</h2>
            <ul className={styles.list}>
                {noticeList.map((notice, index) => {
                    return (
                        <li key={index}>
                            <Link to="#">
                                <div className={styles.img}>
                                    <img src={notice.thumnail} alt="" />
                                </div>
                                <div className={styles.txt}>
                                    <div>
                                        <p>{notice.caption}</p>
                                        <h3>{notice.title}</h3>
                                    </div>
                                    <div className={styles.controls}>
                                        <button
                                            type="button"
                                            className={styles.btnLike}
                                        >
                                            {notice.like ? (
                                                <>
                                                    <img src={heartOn} alt="" />
                                                    <span>
                                                        {notice.likeCount}
                                                    </span>
                                                </>
                                            ) : (
                                                <img src={heart} alt="" />
                                            )}
                                            좋아요
                                        </button>
                                        <button type="button">수정</button>
                                        <button
                                            type="button"
                                            className={styles.btnDelete}
                                        >
                                            삭제
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Writing;
