import contact from '../content/contact';

export default function Contact() {
    return (
        <section className='flex items-end'>
            <div className='font-sans'>
                <h1 className='text-2xl'>{contact.title}</h1>
                <ul className='text-blue-600 underline  cursor-pointer'>
                    <li className='hover:text-blue-800'>{contact.linked_in}</li>
                    <li className='hover:text-blue-800'>{contact.email}</li>
                    <li className='hover:text-blue-800'>{contact.phone_number}</li>
                </ul>
            </div>
        </section>
    );
}