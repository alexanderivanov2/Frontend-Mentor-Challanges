import styles from './NFTPreviewCard.module.scss';
import cardImg from './img/image-equilibrium.jpg';
import ethIcon from './img/icon-ethereum.svg';
import clockIcon from './img/icon-clock.svg';
import creatorAvatar from './img/image-avatar.png';

function NFTPreviewCard() {
    return (
        <section className={styles.nftPreviewCardPage}>
            <article className={styles.nftPreviewCard}>
                <div className={styles.nftPreviewCard__imgWrapper}>
                    <img src={cardImg} alt="nft preview card img" className={styles.nftPreviewCard__imgWrapper__img}/>
                </div>
                <h2 className={styles.nftPreviewCard__nftName}>Equilibrium #3429</h2>
                <p className={styles.nftPreviewCard__nftDescription}>Our Equilibrium collection promotes balance and calm.</p>
                <div className={styles.nftPreviewCard__wrapperTags}>
                    <p className={styles.nftPreviewCard__wrapperTags__eth}>
                        <img src={ethIcon} alt="ETH Icon"/>
                        0.041 ETH
                    </p>
                    <p className={styles.nftPreviewCard__wrapperTags__clock}>
                        <img src={clockIcon} alt="clock icon"/>
                        3 days left
                    </p>
                </div>
                <div className={styles.nftPreviewCard__creatorWrapper}>
                    <img src={creatorAvatar} alt="Creator Avatar"/>
                    <p>Creation of <span>Jules Wyvern</span></p>
                </div>
            </article>
        </section>
    );
}

export default NFTPreviewCard;