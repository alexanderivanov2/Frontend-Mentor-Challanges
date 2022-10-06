import { Link } from "react-router-dom";
import styles from './NewbieSection.module.scss';
import productPreviewCardIMG from './img/productPreviewCard.png';

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
            </section>
            
        </>
    )
}

export default NewbieSection;