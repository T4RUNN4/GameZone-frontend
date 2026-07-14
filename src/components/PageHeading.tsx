interface HeadingProps {
    text: string;
}

export default function PageHeading({ text }: HeadingProps) {
    return <h1 className="text-center text-6xl font-bold mb-4">{text}</h1>
}