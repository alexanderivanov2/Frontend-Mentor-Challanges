import styles from './InteractiveRatingComponent.module.scss';

function RatingValueBox({
    value,
    voteValue,
    onClickRatingValue,
}) {

    const isSelected = value === voteValue ? styles.interactiveRating__box__ratingsBox__rating__selected : '';
    const stylesList = [
        styles.interactiveRating__box__ratingsBox__rating,
        isSelected,
    ];

    return (
        <p className={stylesList.join(' ')} onClick={onClickRatingValue}>{value}</p>
    );
}

export default RatingValueBox;