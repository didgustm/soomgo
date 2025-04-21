import React from "react";
import { Link, useLocation } from "react-router-dom";
import { menuList } from "./menuList";
import styles from "./Header.module.css";
import img from "@assets/images/notice/img.png";
import logo from "@assets/images/notice/logo.png";
import notice from "@assets/images/notice/notice.png";

function NoticeHeader() {
    const { pathname } = useLocation();
    return (
        <header className={styles.header}>
            <div className={styles.info}>
                <div className={styles.left}>
                    <div className={styles.img}>
                        <img src={img} alt="프로필 이미지" />
                    </div>
                    <dl>
                        <dt>
                            <p>고추참치님</p> <span>LEVEL5</span>
                        </dt>
                        <dd>
                            <div className={styles.logo}>
                                <img src={logo} alt="" />
                            </div>
                            <p className={styles.address}>
                                부산광역시 연제구 연산9동
                            </p>
                        </dd>
                    </dl>
                </div>
                <Link to="#" className={styles.notice}>
                    <img src={notice} alt="알림림" />
                    <span></span>
                </Link>
            </div>
            <ul className={styles.tabs}>
                {menuList.map((menu, index) => {
                    return (
                        <li
                            key={index}
                            className={
                                pathname.indexOf(menu.path) > -1
                                    ? styles.on
                                    : ""
                            }
                        >
                            <Link to={menu.path}>{menu.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </header>
    );
}

export default NoticeHeader;
