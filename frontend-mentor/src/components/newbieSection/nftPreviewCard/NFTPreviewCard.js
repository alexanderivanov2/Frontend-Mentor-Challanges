import styles from './NFTPreviewCard.module.scss';

function NFTPreviewCard() {
    return (
        <>
            <h1 className={styles.title}>Test Title</h1>
            Equilibrium #3429

            Our Equilibrium collection promotes balance and calm.

            0.041 ETH
            3 days left

            Creation of Jules Wyvern
        </>
    );
}

export default NFTPreviewCard;