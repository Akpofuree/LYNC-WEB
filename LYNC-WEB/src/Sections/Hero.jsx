import Container from '../components/layout/Container';
import Typography from '../components/ui/Typography';

export default function Hero() {
  return (
    <section className="py-xl">
      <Container>
        <div className="grid md:grid-cols-2 gap-lg items-center">
          {/* LEFT TEXT */}
          <div>
            <Typography as="h1" variant="h1">
              Legal Help <span className="text-accent">simplified</span>
            </Typography>

            <Typography className="mt-md max-w-md">
              Find verified lawyers, access essential legal documents, and
              manage compliance effortlessly.
            </Typography>

            <button className="mt-md bg-primary text-white px-md py-sm rounded-lg">
              Find a Lawyer
            </button>
          </div>

          {/* RIGHT IMAGES */}
          <div className="grid grid-cols-3 gap-sm">
            <img
              src="/images/hero/1.jpg"
              alt="lawyer"
              loading="lazy"
              className="rounded-lg object-cover w-full h-full"
            />
            <img
              src="/images/hero/2.jpg"
              alt="lawyer"
              loading="lazy"
              className="rounded-lg object-cover w-full h-full"
            />
            <img
              src="/images/hero/3.jpg"
              alt="lawyer"
              loading="lazy"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
