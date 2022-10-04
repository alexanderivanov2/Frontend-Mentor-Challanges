import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss'

function Header({screenWidth}) {
    const [device, setDevice] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (screenWidth < 675) {
            setDevice('mobile');
        } else {
            setDevice('desktop');
        }
    }, [screenWidth])
    
    const onBurgerMenuClick = (e) => {
        const result = menuOpen ? false : true;
        setMenuOpen(result);
    }
    return (
        <>
            <header className={styles.headerNavigation}>
                {menuOpen 
                    ? 
                        <section className={styles.headerNavigation__box}>
                            <nav className={styles.headerNavigation__navigationBox}>
                                <ul className={styles.headerNavigation__navigation}>
                                    <li className={styles.headerNavigation__navigation__item}><Link to='newbie'>Newbie</Link></li>
                                    <li className={styles.headerNavigation__navigation__item}><Link to='junior'>Junior</Link></li>
                                    <li className={styles.headerNavigation__navigation__item}>Intermediate</li>
                                    <li className={styles.headerNavigation__navigation__item}>Advanced</li>
                                    <li className={styles.headerNavigation__navigation__item}>Guru</li>
                                </ul>
                            </nav>
                        </section>
                    :
                    <>
                        <article className={styles.headerNavigation__titleBox}>
                            <h2>{device === 'mobile' ? 'FMC' : 'Frontend Mentor Challanges'}</h2>
                        </article>
                    </>
                }
                <div className={styles.headerNavigation__burger} onClick={onBurgerMenuClick}>
                    <span className={styles.headerNavigation__burger__line}></span>
                </div>    
         </header> 
        </>
    );
}

export default Header;