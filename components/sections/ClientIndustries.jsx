import clientsData from '@/data/clients.json';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';

const { industries } = clientsData.clients;

const defaultIndustries = [
  {
    icon: 'shopping-bag',
    title: 'E-Commerce',
    description:
      'Online stores and digital shopping experiences built for modern customers.',
  },
  {
    icon: 'building',
    title: 'Real Estate',
    description:
      'Digital solutions that help real estate businesses connect with buyers.',
  },
  {
    icon: 'utensils',
    title: 'Food & Hospitality',
    description:
      'Engaging digital experiences for restaurants, cafes and hospitality brands.',
  },
  {
    icon: 'graduation-cap',
    title: 'Education',
    description:
      'Modern platforms for institutes, educators and learners.',
  },
  {
    icon: 'heart-pulse',
    title: 'Healthcare',
    description:
      'Accessible and user-friendly digital solutions for healthcare businesses.',
  },
  {
    icon: 'briefcase',
    title: 'Professional Services',
    description:
      'Digital products designed for service-based businesses and professionals.',
  },
];

export default function ClientIndustries() {
  const items = industries?.items || defaultIndustries;

  if (industries?.enabled === false) {
    return null;
  }

  return (
    <section className="section-py bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="mb-12">
          <SectionHeading
            badge={industries?.badge || 'Across Industries'}
            heading={industries?.heading || 'Digital Solutions for'}
            headingAccent={
              industries?.headingAccent || 'Different Businesses'
            }
            subheading={
              industries?.description ||
              'We build digital solutions for businesses across different industries.'
            }
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <article
              key={item.title}
              className="
                group
                p-6
                rounded-2xl
                bg-[var(--surface-soft)]
                border border-[var(--border-light)]
                transition-all duration-300
                hover:border-[var(--primary)]
                hover:shadow-lg
                card-lift
              "
            >
              <div
                className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-xl
                  bg-[var(--primary)]/10
                  text-[var(--primary)]
                  mb-5
                  transition-all duration-300
                  group-hover:bg-[var(--primary)]
                  group-hover:text-[var(--text-white)]
                "
              >
                <Icon
                  name={item.icon}
                  size={21}
                />
              </div>

              <h3
                className="
                  text-lg
                  font-bold
                  text-[var(--text-primary)]
                  mb-2
                  transition-colors
                  group-hover:text-[var(--primary)]
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