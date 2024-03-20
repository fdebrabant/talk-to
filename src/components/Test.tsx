interface TestProps {
    text: string;
}

export default function Test({text}: TestProps) {
    return <p>{text}</p>
}
