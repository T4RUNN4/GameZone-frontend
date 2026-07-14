import { CircleDollar, ListUl, Snowflake } from "@gravity-ui/icons";
import ReasonCard from "./ReasonCard";
import SectionContainer from "./SectionContainer";

export default function WhyChooseUS() {
  const reasons = [
    {
      id: 1,
      icon: <ListUl width={64} height={64} />,
      title: "Wide Selection of Games",
      description:
        "We offer a diverse range of games, from sports and action to adventure and strategy.",
    },
    {
      id: 2,
      icon: <CircleDollar width={64} height={64} />,
      title: "Affordable Hourly Rates",
      description:
        "Our affordable hourly rates make it easy for you to enjoy your favorite games tension free.",
    },
    {
      id: 3,
      icon: <Snowflake width={64} height={64} />,
      title: "24/7 Air Conditioned",
      description:
        "Feel comfortable and relaxed in our air-conditioned gaming lounge,",
    },
  ];

  return (
    <SectionContainer
      title="Why Choose Us"
      subtitle="Discover the benefits of gaming with us"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {reasons.map((reason) => (
          <ReasonCard
            key={reason.id}
            icon={reason.icon}
            title={reason.title}
            description={reason.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
}