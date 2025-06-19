import about_me from '../content/about_me';

export default function AboutMe() {
    return (
        <section>
            <h1>{about_me.title}</h1>
            <p>{about_me.bio}</p>
        </section>
    );
}