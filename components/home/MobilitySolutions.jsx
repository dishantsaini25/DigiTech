import mobilityData from '@/data/mobility.json';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';

const { mobility: md } = mobilityData;

/* Apply enabled filter + limit */
function getItems(items = [], limit) {
  const filtered = items.filter((item) => item.enabled !== false);

  return limit ? filtered.slice(0, limit) : filtered;
}

/* Icon background palette */
const iconBgs = [
  'bg-[var(--primary-light)] text-[var(--primary)]',
  'bg-[var(--accent-light)] text-[#C26840]',
  'bg-[var(--gold-light)] text-[#9A7A2E]',
  'bg-[var(--surface-soft)] text-[var(--primary-dark)]',
];

export default function MobilitySolutions() {
  if (!md?.enabled) return null;

  const items = getItems(md.items, md.limit);

  if (!items.length) return null;

  return (
    <section
      className="
        section-py
        section-bg-mobility
        overflow-hidden
      "
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-14">
          <SectionHeading
            badge={md.badge}
            heading={md.heading}
            headingAccent={md.headingAccent}
            subheading={md.subheading}
            align="center"
          />
        </div>

        {/* Mobility Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
            gap-4
            lg:gap-5
          "
        >
          {items.map((item, i) => (
            <div
              key={item.id}
              className="
                group
                relative
                min-h-[225px]

                flex
                flex-col
                items-center
                justify-center
                text-center

                bg-white/[0.035]
                border
                border-[var(--border-light)]
                rounded-2xl

                px-5
                py-8

                transition-all
                duration-300

                hover:bg-white/[0.07]
                hover:border-[var(--primary)]
                hover:-translate-y-1
                hover:shadow-md
              "
            >

              {/* Icon Box */}
              <div
                className={`
                  w-16
                  h-16
                  rounded-xl

                  flex
                  items-center
                  justify-center

                  ${iconBgs[i % iconBgs.length]}

                  mb-6

                  transition-all
                  duration-300

                  group-hover:bg-[var(--primary)]
                  group-hover:text-white
                  group-hover:scale-105
                  group-hover:shadow-md
                `}
              >
                <Icon
                  name={item.icon}
                  size={26}
                  className="transition-colors duration-300"
                />
              </div>

              {/* Service Name */}
              <h3
                className="
                  text-[var(--text-primary)]
                  font-bold
                  text-base
                  sm:text-[17px]
                  leading-snug
                  max-w-[180px]

                  transition-colors
                  duration-300

                  group-hover:text-[var(--primary)]
                "
              >
                {item.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}