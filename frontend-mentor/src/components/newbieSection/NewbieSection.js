import { Link } from "react-router-dom";
import styles from './NewbieSection.module.scss';
import productPreviewCardIMG from './img/productPreviewCard.png';
import qrCodeComponent from './img/qrCodeComponent.png';

function NewbieSection() {
    return (
        <>
            <section className={styles.newbieSection}>
                    <article className={styles.newbieSection__project}>
                        <div className={styles.newbieSection__project__imgDiv}>
                            <img src={productPreviewCardIMG} alt="product preview card"/>
                        </div>
                        <h2 className={styles.newbieSection__project__title}>Product Preview Card</h2>

                        <Link to='/newbie/project-one'
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