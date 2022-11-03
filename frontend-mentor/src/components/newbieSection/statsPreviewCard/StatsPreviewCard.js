import styles from './StatsPreviewCard.module.scss';
import imgMobile from './img/image-header-mobile.jpg';
import imgDesktop from './img/image-header-desktop.jpg';

function StatsPreviewCard() {
    return (
        <section className={styles.previewCardPage}>
            <article className={styles.previewCard}>

                <div className={styles.previewCard__imageWrapper}>
                    {window.screen.width < 750 
                        ? 
                            <img className={styles.previewCard__imageWrapper__img} src={imgMobile} alt='stats preview card Mobile'/>
                        :
                            <img className={styles.previewCard__imageWrapper__img} src={imgDesktop} alt='stats preview card Desktop'/>
                    }
                </div>
                

                <h2 className={styles.previewCard__header}>Get <span>insights</span> that help your business grow.</h2>
                <p className={styles.previewCard__description}>
                    Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                    experience, and overall efficiency.
                </p>
                <ul className={styles.previewCard__stats_list}>
                    <li><p>10k+</p><p>companies</p></li>
                    <li><p>314</p><p>templates</p></li>
                    <li><p>12m+</p><p>queries</p></li>
                </ul>
            </article>
        </section>
    );
}

export default StatsPreviewCard;