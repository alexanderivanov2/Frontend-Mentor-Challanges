import { Link } from "react-router-dom";
import styles from './NewbieSection.module.scss';

function NewbieSection() {
    return (
        <>
            <section className={styles.newbieSection}>
                    <article>
                        <h2>Title</h2>
                        <p>Short Description</p>
                        <Link to='/newbie/project-one'>Go To Project</Link>
                    </article>
            </section>
            
        </>
    )
}

export default NewbieSection;