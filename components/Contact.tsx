import contact from '../content/contact';

export default function Contact() {
    return (
        <section>
            <h1>{contact.title}</h1>
            <ul>
                <li>{contact.linked_in}</li>
                <li>{contact.email}</li>
                <li>{contact.phone_number}</li>
            </ul>
        </section>
    );
}