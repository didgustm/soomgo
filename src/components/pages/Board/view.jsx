import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHeader } from "@context/HeaderContext";
import { lists } from "./boardList";
import styles from "./Board.module.css";

function BoardView() {
    const { id } = useParams();
    const [board, setBoard] = useState(lists.find((b) => b.id === Number(id)));
    const [isLike, setIsLike] = useState(board.bookmark ? 1 : 0);
    const [likeCount, setLikeCount] = useState(board.likeCount);
    const { setTitle, setBookmark } = useHeader();
    const steps = [
        "위원회 회부",
        "소위원회 회부",
        "소위원회 심사",
        "전체위원회 의결",
    ];

    const maskName = (name) => {
        if (!name || name.length < 2) return name;
        const firstChar = name[0]; // 성
        const masked = "*".repeat(name.length - 1);
        return firstChar + masked;
    };

    const handleClick = (num) => {
        if (isLike === num) {
            setIsLike(0);
            if (isLike === 1) {
                setBoard({ ...board, likeCount: likeCount - 1 });
            }
        } else {
            setIsLike(num);
            if (num === 1) {
                setBoard({ ...board, likeCount: likeCount + 1 });
            }
            if (isLike === 1 && num === 2) {
                setBoard({ ...board, likeCount: likeCount - 1 });
            }
        }
    };

    useEffect(() => {
        setTitle(board.title);
    }, [board.title, setTitle]);

    useEffect(() => {
        setBookmark(board.bookmark);
        setLikeCount(board.likeCount);
        if (isLike === 1) {
            setBoard({ ...board, bookmark: true });
        } else {
            setBoard({ ...board, bookmark: false });
        }
        return () => {
            setBookmark(false)
        }
    }, [isLike, board.bookmark, board.likeCount]);
    return (
        <>
            <ul className={styles.state}>
                {steps.map((step, index) => {
                    return (
                        <li
                            key={index}
                            className={
                                index <= board.view.step ? styles.checked : ""
                            }
                        >
                            <div className={styles.num}>
                                <span>
                                    {index > board.view.step && index + 1}
                                </span>
                            </div>
                            <p>{step}</p>
                        </li>
                    );
                })}
            </ul>
            <div className={`${styles.view} container`}>
                <div className={styles.viewTop}>
                    <p>{board.view.caption}</p>
                    <h2>{board.title}</h2>
                </div>
                <div className={styles.viewInfo}>
                    <dl>
                        <dt>청원분야</dt>
                        <dd>{board.view.field}</dd>
                    </dl>
                    <dl>
                        <dt>소관위원회</dt>
                        <dd>{board.view.committ}</dd>
                    </dl>
                    <dl>
                        <dt>위원회회부일</dt>
                        <dd>{board.view.date}</dd>
                    </dl>
                    <dl className={styles.step}>
                        <dt>진행단계</dt>
                        <dd>
                            {steps[board.view.step]} <br />
                            <a href="" target="_blank">
                                의안정보 바로가기
                            </a>
                        </dd>
                    </dl>
                    <dl className={styles.period}>
                        <dt>동의기간</dt>
                        <dd>
                            {board.view.agrStartDate} ~{" "}
                            <span>{board.view.agrEndDate}</span>
                            <p>(청원서 공개 이후 30일 이내)</p>
                        </dd>
                    </dl>
                    <dl className={styles.agrCount}>
                        <dt>동의수</dt>
                        <dd>
                            <p>
                                <span>
                                    {board.view.agrCount.toLocaleString(
                                        "ko-KR"
                                    )}
                                </span>
                                명 동의
                            </p>
                            <span>
                                {Math.round(
                                    (board.view.agrCount /
                                        board.view.agrCountMax) *
                                        100
                                )}
                                %
                            </span>
                            <div className={styles.progress}>
                                <span
                                    className={styles.currentProgress}
                                    style={{
                                        width: `${
                                            (board.view.agrCount /
                                                board.view.agrCountMax) *
                                            100
                                        }%`,
                                    }}
                                ></span>
                            </div>
                        </dd>
                    </dl>
                </div>
                <div className={styles.article}>
                    <dl>
                        <dt>청원인</dt>
                        <dd>{maskName(board.writer)}</dd>
                    </dl>
                    <dl className={styles.source}>
                        <dt>청원의 취지</dt>
                        <dd>{board.view.purport}</dd>
                    </dl>
                    <dl className={styles.source}>
                        <dt>청원의 내용</dt>
                        <dd>{board.view.content}</dd>
                    </dl>
                </div>
                <div className={styles.rating}>
                    <p>게시글에 대한 평가</p>
                    <button
                        type="button"
                        className={`${styles.btnLike} ${
                            isLike === 1 ? styles.on : ""
                        }`}
                        onClick={() => handleClick(1)}
                    >
                        <span></span>좋아요 {likeCount}
                    </button>
                    <button
                        type="button"
                        className={`${styles.btnDislike} ${
                            isLike === 2 ? styles.on : ""
                        }`}
                        onClick={() => handleClick(2)}
                    >
                        <span></span>개선이 필요해요
                    </button>
                </div>
            </div>
        </>
    );
}

export default BoardView;
