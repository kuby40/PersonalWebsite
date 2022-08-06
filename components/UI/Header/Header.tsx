import Link from "next/link";
import styles from './Header.module.css'
const Header: React.FC = () => {
    return (
      <header>
        <h3 className="justify-content-center float-md-center">
          Craig Kubinec
        </h3>
        <nav className="nav nav-masthead justify-content-center float-md-center">
          <Link href="/programming">
            <a className={styles["nav-link"]}>Programming</a>
          </Link>
          <Link href="/music">
            <a className={styles["nav-link"] + ' ' + styles.active} aria-current="page">
              Music
            </a>
          </Link>
        </nav>
      </header>
    );
}

export default Header;