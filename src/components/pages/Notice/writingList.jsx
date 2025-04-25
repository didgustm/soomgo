import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Notice.module.css";
import heart from "@assets/images/notice/ic_heart.png";
import heartOn from "@assets/images/notice/ic_heart_on.png";

function WritingList({ notice }) {
    const [like, setLike] = useState(notice.like);
    const [likeCount, setLikeCount] = useState(notice.likeCount);

    const handleLikeBtn = () => {
        setLike(!like);
    };

    useEffect(() => {
        like ? setLikeCount(likeCount + 1) : setLikeCount(notice.likeCount);
    }, [like]);
    return (
        <li>
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
                            onClick={handleLikeBtn}
                        >
                            {like ? (
                                <>
                                    <img src={heartOn} alt="" />
                                    <span>{likeCount}</span>
                                </>
                            ) : (
                                <img src={heart} alt="" />
                            )}
                            좋아요
                        </button>
                        <button type="button">수정</button>
                        <button type="button" className={styles.btnDelete}>
                            삭제
                        </button>
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default WritingList;
