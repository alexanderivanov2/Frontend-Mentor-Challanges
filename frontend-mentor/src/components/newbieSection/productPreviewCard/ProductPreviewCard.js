import styles from './ProductPreviewCard.module.scss';
import parfumeMobileIMG from './img/image-product-mobile.jpg';
import parfumeDesktopIMG from './img/image-product-desktop.jpg';
import svgShopingCart from './img/icon-cart.svg';
import { useEffect, useState } from 'react';

function ProductPreviewCard({screenWidth}) {
    const [device, setDevice] = useState('');

    useEffect(() => {
        if (screenWidth < 675) {
            setDevice('mobile') 
        } else {
            setDevice('desktop');
        }
    }, [screenWidth]);

    return (
        <section className={styles.productPreview}>

            <article className={styles.productPreview__card}>
                <div className={styles.productPreview__card__imgBox}>
                    <img className={styles.productPreview__card__imgBox__img} src={device === 'mobile' ? parfumeMobileIMG : parfumeDesktopIMG} alt="Parfume IMG"/>
                </div>
                <div className={styles.productPreview__card__info}>
                    <h3 className={styles.productPreview__card__info__type}>PERFUME</h3>
                    <h2 className={styles.productPreview__card__info__title}>Gabrielle Essence Eau De Parfum</h2>
                    <p className={styles.productPreview__card__info__description}>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                    Perfumer-Creator for the House of CHANEL.</p>
                    <div className={styles.productPreview__card__info__price}><p>$149.99</p><span>$169.99</span></div>
                    <button className={styles.productPreview__card__info__btnAdd}><img src={svgShopingCart} alt="shoping cart icon"/> Add to Cart</button>
                </div>
            </article>

            <div className={styles.attribution}>
                <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">Alexander Ivanov</a>.</p>
            </div>
        </section>
        
    );
}

export default ProductPreviewCard;