interface PageSubHeadingProps {
    text: string;
}

export default function PageSubHeading({ text }: PageSubHeadingProps) {
    return <h2 className="mx-auto text-center max-w-2xl mb-2">{text}</h2>
}