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
    <section className="lg:w-[85%] lg:mx-auto lg:block w-[100%] flex flex-col justify-center items-center">
      {/* Section Header */}
      <div className="flex flex-col items-center lg:font-semibold font-[590] px-4 lg:px-0 lg:mt-22 mb-20 ">
        <h2 className="lg:text-40px pb-2 lg:pb-0  text-13px leading-[117%] w-[270px] mx-auto lg:w-full text-center text-primary">
          Everything you need to navigate legal matters
        </h2>
        <p className="lg:text-32px  text-lightBlue text-13px w-[310px] mx-auto  text-center lg:w-[850px] lg:mx-auto">
          Any business that answers phone calls is a potential client.
        </p>
        <p className="lg:text-32px pt-4 lg:pt-0 text-lightBlue text-12px w-full text-center lg:w-[600px] lg:mx-auto">
          That is millions of businesses
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 lg:gap-6">
        {features.map((feature) => (
          <article key={feature.title} className="flex flex-col gap-1">
            {/* Image */}
            <div className="lg:w-full w-[80%] mx-auto h-[240px] lg:h-[300px] overflow-hidden">
              <img
                src={feature.image}
                alt={feature.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text */}
            <p className="lg:text-24px lg:w-full lg:text-left text-center  w-[90%] mx-auto text-primary font-bold">
              {feature.title}
            </p>
            <p className="lg:text-24px text-[10px] font-semibold w-[180px] mx-auto lg:w-full w-[100%] mx-auto lg:text-left text-center  text-lightBlue ${feature.descriptionWidth}">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
