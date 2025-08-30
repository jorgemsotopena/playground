import education from '../content/education';

export default function Education() {
    return (
        <section className='flex items-end pb-[6svh]'>
            <div className='font-sans'>
                <h1 className='text-2xl pb-[0.5svh]'>{education.title}</h1>
                <h2 className='font-semibold pb-[1svh]'>{education.school_title}</h2>
                <p>{education.description}</p>
            </div>
            
        </section>
    );
}