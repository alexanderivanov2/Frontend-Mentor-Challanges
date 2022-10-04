import { Link } from 'react-router-dom';
import styles from './Header.module.scss'

function Header() {
    const onClickNavItem = (e) => {
        e.preventDefault();
        console.log(e.target.tagName);
        console.dir(e);
        if (e.target.tagName === "A") {
            console.log(e.target.classList.add('active'));
        }
        // e.target.classList.add(styles.active);
    }

    return (
        <>
            <header className={styles.headerNavigation}>
                <section className={styles.headerNavigation__box}>
                    <article className={styles.headerNavigation__titleBox}>
                        <h1>Frontend Mentor Challanges</h1>
                    </article>
                    <nav className={styles.headerNavigation__navigationBox}>
                        <ul className={styles.headerNavigation__navigation} onClick={onClickNavItem}>
                            <li className={styles.headerNavigation__navigation__item}><Link to='newbie'>Newbie</Link></li>
                            <li className={styles.headerNavigation__navigation__item}><Link to='junior'>Junior</Link></li>
                            <li className={styles.headerNavigation__navigation__item}>Intermediate</li>
                            <li className={styles.headerNavigation__navigation__item}>Advanced</li>
                            <li className={styles.headerNavigation__navigation__item}>Guru</li>
                        </ul>
                    </nav>
                </section>
                
            </header>
        </>
    );
}

export default Header;