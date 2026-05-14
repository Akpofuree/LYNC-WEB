import AboutNavbar from '../components/layout/AboutNavbar';
import Footer from '../components/layout/Footer';
import bgImage from '../assets/images/radiant-bg.jpg';

const contactButtonClass =
  'inline-flex items-center justify-center w-[124px] h-[49px] bg-[#4139bd] text-white font-semibold rounded-[8px] px-[18.46px] py-[9.23px] text-sm';

const sections = [
  {
    title: '1. Introduction',
    body: [
      'Welcome to LYNC.',
      "LYNC ('we', 'our', or 'us') is a legal access platform designed to simplify how individuals and businesses connect with lawyers.",
      'This Privacy Policy explains how we collect, use, and protect your information when you interact with our website and services.',
      'By using LYNC, you agree to the terms outlined in this policy.',
    ],
  },
  {
    title: '2. Information We Collect',
    body: [
      'We collect only the information necessary to provide and improve our services.',
      'a. Information You Provide',
      'When you join our waitlist or interact with the platform, we may collect:',
      'Name',
      'Email address',
      'User type (individual, SME, or lawyer)',
      'Any additional information you choose to provide',
      'b. Automatically Collected Information',
      'We may collect limited technical data such as:',
      'Device type',
      'Browser type',
      'IP address',
      'Pages visited',
      'This helps us understand how users interact with LYNC and improve performance.',
    ],
  },
  {
    title: '3. How We Use Your Information',
    body: [
      'We use your information to:',
      'Provide and improve our services',
      'Notify you about product updates and launch',
      'Understand user needs and behavior',
      'Communicate relevant information about LYNC',
      'Maintain platform security and integrity',
      'We do not sell your personal data.',
    ],
  },
  {
    title: '4. Data Sharing',
    body: [
      'We do not share your personal information with third parties except:',
      'When required by law',
      'To protect the rights and safety of LYNC and its users',
      'With trusted service providers who help us operate (for example hosting or analytics), under strict confidentiality',
    ],
  },
  {
    title: '5. Data Storage & Security',
    body: [
      'We take reasonable steps to protect your information from unauthorized access, misuse, or disclosure.',
      'However, no system is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: '6. Your Rights',
    body: [
      'You have the right to:',
      'Request access to your data',
      'Request correction of inaccurate information',
      'Request deletion of your data',
      'Opt out of communications at any time',
      'To exercise these rights, contact us at:',
    ],
  },
  {
    title: '7. Cookies & Tracking',
    body: [
      'LYNC may use cookies or similar technologies to:',
      'Improve website functionality',
      'Analyze user behavior',
      'Enhance user experience',
      'You can manage cookie preferences through your browser settings.',
    ],
  },
  {
    title: '8. Third-Party Links',
    body: [
      'Our website may contain links to third-party services.',
      'We are not responsible for the privacy practices of those platforms.',
    ],
  },
  {
    title: '9. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time.',
      'Any changes will be posted on this page with an updated effective date.',
    ],
  },
  {
    title: '10. Contact Us',
    body: [
      'If you have any questions about this Privacy Policy, please contact us.',
    ],
  },
];

export default function Privacy() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat w-full pt-4 flex flex-col"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="pt-4">
        <AboutNavbar />
      </div>

      <main className="flex-1 px-4 py-2 md:px-8 md:py-10">
        <h1 className="text-center leading-[150%] text-32px md:text-40px font-bold my-6 lg:mb-2">
          <span className="text-primary">Privacy </span>
          <span className="text-accent">Policy</span>
        </h1>
        <div className="w-full max-w-6xl mx-auto rounded-[18px] bg-[#f5a210]/14 px-6 py-8 md:px-10 md:py-10 shadow-[0_10px_40px_rgba(34,30,87,0.08)]">
          <div className="space-y-8 text-primary">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-sm md:text-base font-bold mb-2">
                  {section.title}
                </h2>

                <div className="space-y-1 text-[13px] md:text-sm leading-relaxed text-primary/90">
                  {section.body.map((line, index) => {
                    const isBullet =
                      !line.endsWith(':') &&
                      !line.startsWith('Welcome') &&
                      !line.startsWith('LYNC') &&
                      !line.startsWith('This Privacy Policy') &&
                      !line.startsWith('By using') &&
                      !line.startsWith('We collect only') &&
                      !line.startsWith('When you join') &&
                      !line.startsWith('We may collect limited') &&
                      !line.startsWith('This helps us') &&
                      !line.startsWith('We use your information to') &&
                      !line.startsWith('We do not sell') &&
                      !line.startsWith('We do not share') &&
                      !line.startsWith('We take reasonable') &&
                      !line.startsWith('However') &&
                      !line.startsWith('You have the right to') &&
                      !line.startsWith('To exercise') &&
                      !line.startsWith('You can manage') &&
                      !line.startsWith('Our website may') &&
                      !line.startsWith('We are not responsible') &&
                      !line.startsWith('We may update') &&
                      !line.startsWith('Any changes') &&
                      !line.startsWith('If you have any questions');

                    if (
                      line === 'a. Information You Provide' ||
                      line === 'b. Automatically Collected Information'
                    ) {
                      return (
                        <p key={index} className="font-semibold mt-2">
                          {line}
                        </p>
                      );
                    }

                    if (isBullet) {
                      return (
                        <p key={index} className="pl-4 relative">
                          <span className="absolute left-0 top-0">•</span>
                          {line}
                        </p>
                      );
                    }

                    return <p key={index}>{line}</p>;
                  })}
                </div>

                {section.title === '6. Your Rights' && (
                  <div className="mt-4">
                    <button type="button" className={contactButtonClass}>
                      Contact Us
                    </button>
                  </div>
                )}

                {section.title === '10. Contact Us' && (
                  <div className="mt-4">
                    <button type="button" className={contactButtonClass}>
                      Contact Us
                    </button>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
