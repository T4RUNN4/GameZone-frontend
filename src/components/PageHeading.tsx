interface HeadingProps {
    text: string;
}

export default function PageHeading(props: HeadingProps) {
    return <h1 className="text-center text-4xl md:text-6xl font-bold mb-4">{props.text}</h1>
}