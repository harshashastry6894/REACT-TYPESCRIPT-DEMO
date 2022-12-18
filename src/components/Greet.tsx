type GreetProps = {
    name: string;
}

export const Greet = (props: GreetProps) => (
    <div>
        <h1>Welcome {props.name}</h1>
    </div>
)