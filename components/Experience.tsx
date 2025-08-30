import experience from '../content/experience';

export default function Experience() {
    return (
        <section className='flex items-end pb-[6svh]'>
            <div className='font-sans'>
                <h1 className='text-2xl pb-[0.5svh]'>{experience.title}</h1>
                <h2 className='pb-[1svh] font-semibold'>{experience.job_title_fte}</h2>
                <p className='pb-[1svh]'>{experience.job_description_fte}</p>
                <h2 className='pb-[1svh] font-semibold'>{experience.job_title_intern}</h2>
                <p className='pb-[1svh]'>{experience.job_description_intern}</p>
                <h2 className='pb-[1svh] font-semibold'>{experience.personal_project_title}</h2>
                <p className='pb-[1svh]'>{experience.personal_project_description}</p>
            </div>
        </section>
    );
}
