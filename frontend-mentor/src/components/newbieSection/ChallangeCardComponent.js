import styles from './NewbieSection.module.scss';
import {Link} from 'react-router-dom'

function ChallangeCardComponent({data}) {
    return (
        <article className={styles.newbieSection__project}>
            <div className={styles.newbieSection__project__imgDiv}>
                <img src={data.img} alt={data.title}/>
            </div>
            <h2 className={styles.newbieSection__project__title}>{data.title}</h2>

            <Link to={data.linkTo}
            className={styles.newbieSection__project__link}>Go To Project</Link>
        </article>
    );
}

export default ChallangeCardComponent;