import ReviewCard from "./ReviewCard";
import SectionContainer from "./SectionContainer";

export default function CustomerReview() {
  const reviews = [
    {
      id: 1,
      name: "Bill Gates",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7H_Yq7XCDjfDTD-Z4D-hqlAEspULz_D0NAYLIMXfXkRGKl8VH4gIRCo&s=10",
      date: "15/5/2026",
      review: "Very good game shop. I play every week. After divorce with my wife, this shop helped me recover from that quickly.",
    },
    {
      id: 2,
      name: "Elon Musk",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYbqfoAqZIlMXV_c0by5pyG_GPJHdqpKBu8OwhR5Mag&s=10",
      date: "6/6/2026",
      review: "Most affordable game shop I have ever seen. Always recomended for somone looking for budget friendly shop. I clear my mind here after SpaceX craps.",
    },
  ];

  return (
    <SectionContainer
      title="Customer Review"
      subtitle="What our customers thinks about us"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            date={review.date}
            review={review.review}
            image={review.image}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
