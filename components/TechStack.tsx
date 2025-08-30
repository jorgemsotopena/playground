import tech_stack from "../content/tech_stack";

export default function TechStack() {
    return (
        <section className="flex items-end pb-[6svh]">
            <div>
                <h1 className="text-2xl font-sans">{tech_stack.title}</h1>
                <ul>
                    <li>{tech_stack.cpp}</li>
                    <li>{tech_stack.reactnative}</li>
                    <li>{tech_stack.nextjs}</li>
                    <li>{tech_stack.python}</li>
                </ul>
            </div>
        </section>
    );
}