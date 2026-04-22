import image1 from '../assets/images/firstImage.jpg';
import image2 from '../assets/images/DocumentSign.jpg';
import image3 from '../assets/images/DocumentSign2.jpg';
import image4 from '../assets/images/PeopleLaughing.jpg';

const features = [
  {
    image: image1,
    alt: 'Lawyer Discovery',
    title: 'Lawyer Discovery',
    description:
      'Find lawyers based on your specific legal needs, and not guesswork',
    descriptionWidth: 'w-[374px]', // ← adjust this
  },
  {
    image: image2,
    alt: 'Legal Documents',
    title: 'Legal Documents',
    description: 'Access essential templates designed for real use cases',
    descriptionWidth: 'w-[378px]', // ← adjust this
  },
  {
    image: image3,
    alt: 'Compliance Reminders',
    title: 'Compliance Reminders',
    description: 'Stay on track with important legal obligations',
    descriptionWidth: 'w-[361px]', // ← adjust this
  },
  {
    image: image4,
    alt: 'Built for SMEs',
    title: 'Built for SMEs',
    description:
      'Tools designed to help businesses stay structured and protected',
    descriptionWidth: 'w-[407px]', // ← adjust this
  },
];

export default function Features() {
  return (
    <section className="w-[85%] mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center  gap-4 mt-22 pb-20">
        <h2 className="text-40px text-primary">
          Everything you need to navigate legal matters
        </h2>
        <p className="text-32px text-lightBlue text-center w-[800px] mx-auto">
          Any business that answers phone calls is a potential client. That is
          millions of businesses
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-4 gap-6">
        {features.map((feature) => (
          <article key={feature.title} className="flex flex-col gap-3">
            {/* Image */}
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src={feature.image}
                alt={feature.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text */}
            <p className="text-24px text-primary font-bold">{feature.title}</p>
            <p className="text-24px text-left text-lightBlue ${feature.descriptionWidth}">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
