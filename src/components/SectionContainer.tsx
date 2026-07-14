import PageHeading from "./PageHeading";
import PageSubHeading from "./PageSubHeading";

interface SectionContainerProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function SectionContainer({
  title,
  subtitle,
  children,
}: SectionContainerProps) {
  return (
    <div className="p-30">
      <PageHeading text={title} />
      <PageSubHeading text={subtitle} />
      <div className="mt-18">{children}</div>
    </div>
  );
}
