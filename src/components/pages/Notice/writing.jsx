import React from "react";
import { Link } from "react-router-dom";
import { noticeList } from "./noticeList";
import WritingList from "./writingList";
import styles from "./Notice.module.css";


function Writing() {
    return (
        <>
        <div className={`container ${styles.writing} ${styles.inner}`}>
            <h2 className={styles.title}>내 게시글 목록</h2>
            <ul className={styles.list}>
                {noticeList && noticeList.map((notice, index) => {
                    return (
                        <WritingList notice={notice} key={index} />
                    );
                })}
            </ul>
        </div>
        <div className={styles.btnUpload}>
            <Link href="#">게시글 업로드</Link>
        </div>
        </>
    );
}

export default Writing;
