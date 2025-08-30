import about_me from '../content/about_me';

export default function AboutMe() {
    return (
        <section className='flex items-end pb-[6svh]'>
            <div>
                <h1 className='text-2xl font-sans pb-[0.5svh]'>{about_me.title}</h1>
            <p className='text-1xl font-sans'>{about_me.bio}</p>
            </div>
        </section>
    );
}