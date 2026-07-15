interface PageSubHeadingProps {
    text: string;
}

export default function PageSubHeading(props: PageSubHeadingProps) {
    return <h2 className="text-center mb-2">{props.text}</h2>
}