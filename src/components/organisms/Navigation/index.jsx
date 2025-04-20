import { Link, useLocation } from "react-router-dom";
import { menuList } from "./menuList.js";
import styles from "./Nav.module.css";

function Navigation() {
    const { pathname } = useLocation();

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {menuList.map((menu, index) => {
                    return (
                        <li
                            key={index}
                            className={`${styles[`list${index + 1}`]} ${
                                pathname.indexOf(menu.path) > -1
                                    ? styles.on
                                    : ""
                            }`}
                        >
                            <Link to={menu.path}>
                                <span></span>
                                {menu.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navigation;
