import {useState} from 'react';
function InteractiveRatingComponent() {
    const [vote, setVote] = useState({
        isVote: false,
        voteValue: 0,
    });

    const onClickRatingValue = (e) => {
        const value = e.target.voteValue;
        console.log(value);
        setVote(state => ({
            ...state,
            voteValue: value,
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
        <>
            {vote.isVote 
                ?
                    <>
                        
                    </>
                : 
                    ''
            }
        </>
    );
}

export default InteractiveRatingComponent;