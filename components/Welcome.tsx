import welcome from '../content/welcome';

export default function Welcome() {
    return (
        <section className='min-h-[35svh] flex items-end pb-[12svh]'>
            <div className='mx-auto max-w-3xl px-4'>
                <h1 className='font-sans text-3xl'>{welcome.title}</h1>
                <p className='font-sans text-1  xl'>{welcome.text}</p>
            </div>
            
        </section>
    );
}