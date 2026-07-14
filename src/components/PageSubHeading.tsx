interface PageSubHeadingProps {
    text: string;
}

export default function PageSubHeading({ text }: PageSubHeadingProps) {
    return <h2 className="text-xl font-semibold mb-2">{text}</h2>
}