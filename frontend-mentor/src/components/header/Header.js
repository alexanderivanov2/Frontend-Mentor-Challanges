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
                <section className={styles.navigationBar}>
                    <article className={styles.navigationBar__titleBox}>
                        <h2>{device === 'mobile' ? 'FMC' : 'Frontend Mentor Challanges'}</h2>
                    </article>
        
                    <div className={styles.navigationBar__burger} onClick={onBurgerMenuClick}>
                        <div className={styles.navigationBar__burger__line}></div>
                    </div> 
                </section>
  
                {menuOpen 
                    &&                         
                    <nav className={styles.headerNavigation__navigationBox}>
                        <ul className={styles.headerNavigation__navigationBox__navigation}>
                            <li className={styles.headerNavigation__navigationBox__item}><Link to='newbie'>Newbie</Link></li>
                            <li className={styles.headerNavigation__navigationBox__item}><Link to='junior'>Junior</Link></li>
                            <li className={styles.headerNavigation__navigationBox__item}><Link to='intermediate'>Intermediate</Link></li>
                            <li className={styles.headerNavigation__navigationBox__item}><Link to='advanced'>Advanced</Link></li>
                            <li className={styles.headerNavigation__navigationBox__item}><Link to='guru'>Guru</Link></li>
                        </ul>
                    </nav>            
                } 
         </header> 
        </>
    );
}

export default Header;