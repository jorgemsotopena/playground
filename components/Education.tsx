import education from '../content/education';

export default function Education() {
    return (
        <section>
            <h1>{education.title}</h1>
            <h2>{education.school_title}</h2>
            <p>{education.description}</p>
        </section>
    );
}