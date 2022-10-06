import styles from './QRCodeComponent.module.scss';
import QRimg from './img/image-qr-code.png';

function QRCodeComponent({screenWidth}) {
    return (
        <>
            <section className={styles.QRCodeComponent}>
                <article className={styles.QRCodeComponent__box}>
                    <div className={styles.QRCodeComponent__box__imgDiv}>
                        <img src={QRimg} alt="QR code component"/>
                    </div>
                    <div className={styles.QRCodeComponent__box__info}>
                        <h3 className={styles.QRCodeComponent__box__info__title}>
                        Improve your front-end skills by building projects
                        </h3>
                        <p className={styles.QRCodeComponent__box__info__description}>
                            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level

                        </p>
                    </div>
                </article>
            </section>
        </>
    );
}

export default QRCodeComponent;