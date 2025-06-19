import experience from '../content/experience';

export default function Experience() {
    return (
        <section>
            <h1>{experience.title}</h1>
            <h2>{experience.job_title_fte}</h2>
            <p>{experience.job_description_fte}</p>
            <h2>{experience.job_title_intern}</h2>
            <p>{experience.job_description_intern}</p>
            <h2>{experience.personal_project_title}</h2>
            <p>{experience.personal_project_description}</p>
        </section>
    );
}
