import PageHeading from "./PageHeading";
import PageSubHeading from "./PageSubHeading";

interface SectionContainerProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function SectionContainer(props: SectionContainerProps) {
  return (
    <div className="p-10 lg:p-30">
      <PageHeading text={props.title} />
      <PageSubHeading text={props.subtitle} />
      <div className="mt-18">{props.children}</div>
    </div>
  );
}
