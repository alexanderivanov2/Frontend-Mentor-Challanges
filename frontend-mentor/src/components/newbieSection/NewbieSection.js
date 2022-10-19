import { Link } from "react-router-dom";
import styles from './NewbieSection.module.scss';
import productPreviewCardIMG from './img/productPreviewCard.png';
import qrCodeComponent from './img/qrCodeComponent.png';
import interactiveRatingIMG from './img/interactive-rating-component.png';
import nftPreviewCardImg from './img/nft-preview-card.png';
import ChallangeCardComponent from "./ChallangeCardComponent";

const challanges = [
    {title: "Order Summary Component", linkTo: "/newbie/order-summary-component", img: nftPreviewCardImg},
    {title: "NFT Preview Card", linkTo: "/newbie/nft-preview-card", img: nftPreviewCardImg },
    {title: "Interactive Ratign Component", linkTo: "/newbie/interactive-rating-component", img: interactiveRatingIMG },
    {title: "QR Code Component", linkTo: "/newbie/qr-code-component", img: qrCodeComponent },
    {title: "Product Preview Card", linkTo: "/newbie/project-one", img: productPreviewCardIMG},
];

function NewbieSection() {
    return (
        <>
            <section className={styles.newbieSection}>
                {challanges.map(challange => <ChallangeCardComponent data={challange} key={challange.title}/>)}
            </section>
        </>
    )
}

export default NewbieSection;