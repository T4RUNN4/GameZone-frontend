interface HeadingProps {
    text: string;
}

export default function PageHeading({ text }: HeadingProps) {
    return <h1 className="text-3xl font-bold mb-4">{text}</h1>
}