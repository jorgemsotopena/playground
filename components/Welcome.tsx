import welcome from '../content/welcome';

export default function Welcome() {
    return (
        <section>
            <h1>{welcome.title}</h1>
            <p>{welcome.text}</p>
        </section>
    );
}