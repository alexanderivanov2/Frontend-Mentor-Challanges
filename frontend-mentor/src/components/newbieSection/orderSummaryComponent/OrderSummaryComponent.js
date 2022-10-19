import styles from './OrderSummaryComponent.module.scss';
import illustrationHero from './img/illustration-hero.svg';
import musicNote from './img/icon-music.svg';

function OrderSummaryComponent() {
    return (
        <section className={styles.orderSummaryPage}>
            <article className={styles.orderSummary}>
                <div className={styles.orderSummary__imgWrapper}>
                    <img src={illustrationHero} alt="order summary girl who listening music"/>
                </div>
                <h2 className={styles.orderSummary__title}>Order Summary</h2>
                <p className={styles.orderSummary__description}>  You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
                </p>
                <div className={styles.orderSummary__planWrapper}>
                    <img src={musicNote} alt="music note"/>
                    <p><span>Annual Plan</span><span>$59.99/year</span></p>
                    <a href="#">Change</a>
                </div>
                <button className={styles.orderSummary__continueButton}>Proceed to Payment</button>
                <button className={styles.orderSummary__cancelButton}>Cancel Order</button>
            </article>
        </section>
    );
}

export default OrderSummaryComponent;