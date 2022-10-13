import { Link } from "react-router-dom";
import styles from './NewbieSection.module.scss';
import productPreviewCardIMG from './img/productPreviewCard.png';
import qrCodeComponent from './img/qrCodeComponent.png';
import interactiveRatingIMG from './img/interactive-rating-component.png';
import nftPreviewCardImg from './img/nft-preview-card.png';

function NewbieSection() {
    return (
        <>
            <section className={styles.newbieSection}>
                    <article className={styles.newbieSection__project}>
                        <div className={styles.newbieSection__project__imgDiv}>
                            <img src={nftPreviewCardImg} alt="nft preview card"/>
                        </div>
                        <h2 className={styles.newbieSection__project__title}>NFT Preview Card</h2>

                        <Link to='/newbie/nft-preview-card'
                        className={styles.newbieSection__project__link}>Go To Project</Link>
                    </article>
                    <article className={styles.newbieSection__project}>
                        <div className={styles.newbieSection__project__imgDiv}>
                            <img src={interactiveRatingIMG} alt="product preview card"/>
                        </div>
                        <h2 className={styles.newbieSection__project__title}>Interactive Ratign Component</h2>

                        <Link to='/newbie/interactive-rating-component'
                        className={styles.newbieSection__project__link}>Go To Project</Link>
                    </article>
                    <article className={styles.newbieSection__project}>
                        <div className={styles.newbieSection__project__imgDiv}>
                            <img src={qrCodeComponent} alt="QR code component"/>
                        </div>
                        <h2 className={styles.newbieSection__project__title}>QR Code Component</h2>

                        <Link to='/newbie/qr-code-component'
                        className={styles.newbieSection__project__link}>Go To Project</Link>
                    </article>
                    <article className={styles.newbieSection__project}>
                        <div className={styles.newbieSection__project__imgDiv}>
                            <img src={productPreviewCardIMG} alt="product preview card"/>
                        </div>
                        <h2 className={styles.newbieSection__project__title}>Product Preview Card</h2>

                        <Link to='/newbie/project-one'
                        className={styles.newbieSection__project__link}>Go To Project</Link>
                    </article>
            </section>
        </>
    )
}

export default NewbieSection;