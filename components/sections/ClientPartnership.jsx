import clientsData from '@/data/clients.json';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';

const { partnership } = clientsData.clients;

const defaultItems = [
  {
    icon: 'lightbulb',
    title: 'Understand Your Business',
    description:
      'We start by understanding your goals, audience and challenges.',
  },
  {
    icon: 'code',
    title: 'Build the Right Solution',
    description:
      'We choose the right technology and build solutions around your actual needs.',
  },
  {
    icon: 'trending-up',
    title: 'Grow Together',
    description:
      'We continue improving your digital product as your business evolves.',
  },
];

export default function ClientPartnership() {
  const items = partnership?.items || defaultItems;

  if (partnership?.enabled === false) {
    return null;
  }

  return (
    <section className="section-py section-bg-services">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="mb-12">
          <SectionHeading
            badge={partnership?.badge || 'More Than Development'}
            heading={partnership?.heading || 'We Build'}
            headingAccent={
              partnership?.headingAccent || 'Long-Term Partnerships'
            }
            subheading={
              partnership?.description ||
              "Our goal isn't just to launch a website or application. We work alongside businesses as they grow."
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="
                relative
                p-7
                rounded-2xl
                bg-[var(--surface)]
                border border-[var(--border-light)]
                transition-all duration-300
                hover:border-[var(--primary)]
                hover:shadow-lg
                card-lift
              "
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className="
                    w-12 h-12
                    flex items-center justify-center
                    rounded-xl
                    bg-[var(--primary)]/10
                    text-[var(--primary)]
                  "
                >
                  <Icon
                    name={item.icon}
                    size={21}
                  />
                </div>

                <span
                  className="
                    text-sm
                    font-bold
                    text-[var(--text-muted)]
                  "
                >
                  0{index + 1}
                </span>
              </div>

              <h3
                className="
                  text-xl
                  font-bold
                  text-[var(--text-primary)]
                  mb-3
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-sm
                  leading-relaxed
                  text-[var(--text-muted)]
                "
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}