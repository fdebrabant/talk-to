interface TestProps {
    text: string;
}

export default function Message({text}: TestProps) {
    return (<div>
        {text}
    </div>)
}