import Link from "next/link";
import styles from './Header.module.css'
import { useRouter } from "next/router";
const Header: React.FC = () => {
  const router = useRouter();
    return (
      <header>
        <h3 className="justify-content-center float-md-center pt-3">
          Craig Kubinec
        </h3>
        <nav className="nav nav-masthead justify-content-center float-md-center">
          <Link href="/programming">
            {router.pathname === '/programming' ?
            <a className={styles["nav-link"] + ' ' + styles.active} aria-current="page">Programming</a> :
            <a className={styles["nav-link"]}>Programming</a>}
          </Link>
          <Link href="/music">
          {router.pathname === '/music' ?
            <a className={styles["nav-link"] + ' ' + styles.active} aria-current="page">Music</a> :
            <a className={styles["nav-link"]}>Music</a>}
          </Link>
        </nav>
      </header>
    );
}

export default Header;