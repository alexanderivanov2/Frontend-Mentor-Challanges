import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss'

function Header({screenWidth}) {
    const [device, setDevice] = useState('');
    useEffect(() => {
        if (screenWidth < 675) {
            setDevice('mobile');
        } else {
            setDevice('desktop');
        }
    }, [screenWidth])
    
    return (
        <> 
            {device == 'mobile'
             &&
             <header className={styles.headerNavigation}>
             <section className={styles.headerNavigation__box}>
                 <article className={styles.headerNavigation__titleBox}>
                     <h2>Frontend Mentor Challanges</h2>
                 </article>
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
             
         </header> 
            }
            
        </>
    );
}

export default Header;