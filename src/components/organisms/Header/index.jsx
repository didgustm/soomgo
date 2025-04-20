import React from "react";
import styles from "./Header.module.css";
import back from "@assets/images/common/ic_back.png";
import star from "@assets/images/common/bookmark.png";

function Header({ title, bookmark }) {
    const handleClick = () => {
        history.back()
    }
    return (
        <header className={styles.header}>
            <div>
                <h1 className={styles.logo}>{title}</h1>
                <button type="button" className={styles.back} onClick={handleClick}>
                    <img src={back} alt="뒤로가기" />
                </button>
                <div className={styles.bookmark}>
                    {bookmark && <img src={star} alt="북마크크" />}
                </div>
            </div>
        </header>
    );
}

export default Header;
