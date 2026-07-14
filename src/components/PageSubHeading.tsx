interface PageSubHeadingProps {
    text: string;
}

export default function PageSubHeading({ text }: PageSubHeadingProps) {
    return <h2 className="text-center mb-2">{text}</h2>
}