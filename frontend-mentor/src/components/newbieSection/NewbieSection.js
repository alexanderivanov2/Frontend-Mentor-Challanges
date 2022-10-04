import { Link } from "react-router-dom";

function NewbieSection() {
    return (
        <>
            <section>
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