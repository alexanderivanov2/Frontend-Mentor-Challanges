import {useState} from 'react';

import styles from './InteractiveRatingComponent.module.scss';
import starIcon from './img/icon-star.svg';
import thankYouIllustration from './img/illustration-thank-you.svg';
import RatingValueBox from './RatingValueBox';

function InteractiveRatingComponent() {
    const [vote, setVote] = useState({
        isVote: false,
        voteValue: 0,
    });

    const onClickRatingValue = (e) => {
        const value = e.target.textContent;

        setVote(state => ({
            ...state,
            voteValue: Number(value),
        }));
    }

    const onSubmitRatignVote = (e) => {
        if (vote.voteValue > 0) {
            setVote(state => ({
                ...state,
                isVote: true,
            }));
        }
    }

    return (

        <section className={styles.interactiveRatign}>
            <article className={styles.interactiveRating__box}>
                {vote.isVote 
                    ?
                        <>
                            <img src={thankYouIllustration} alt="thank you image" className={styles.interactiveRating__box__icon}/>
            
                            <p className={styles.interactiveRating__box__rate}>You selected {vote.voteValue} out of 5</p>
                            <h2 className={styles.interactiveRating__box__title}>Thank you!</h2>
                            <p className={styles.interactiveRating__box__text}> 
                                We appreciate you taking the time to give a rating. If you ever need more support, 
                                don’t hesitate to get in touch!
                            </p>
                        </>
                    : 
                        <>
                            <img src={starIcon} alt='star icon' className={styles.interactiveRating__box__icon}/>
                            <h2 className={styles.interactiveRating__box__title}>How did we do?</h2>
                            <p className={styles.interactiveRating__box__text}>
                                Please let us know how we did with your support request. All feedback is appreciated 
                                to help us improve our offering!
                            </p>
                            <div className={styles.interactiveRating__box__ratingsBox}>
                                {Array.from({length: 5}, (_, i) => <RatingValueBox value={i + 1} key={i + 1} voteValue={vote.voteValue} onClickRatingValue={onClickRatingValue}/>)}
                            </div>
                            <button onClick={onSubmitRatignVote}>Submit</button>
                        </>
                }
            </article>
        </section>
    );
}

export default InteractiveRatingComponent;