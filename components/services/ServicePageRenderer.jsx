import SvcHero      from './dynamic/SvcHero';
import SvcCardGrid  from './dynamic/SvcCardGrid';
import SvcSteps     from './dynamic/SvcSteps';
import SvcStats     from './dynamic/SvcStats';
import SvcTable     from './dynamic/SvcTable';
import SvcFAQ       from './dynamic/SvcFAQ';
import SvcCTA       from './dynamic/SvcCTA';
import SvcTextBlock from './dynamic/SvcTextBlock';

const SECTION_MAP = {
  hero:      SvcHero,
  cardGrid:  SvcCardGrid,
  steps:     SvcSteps,
  stats:     SvcStats,
  table:     SvcTable,
  faq:       SvcFAQ,
  cta:       SvcCTA,
  textBlock: SvcTextBlock,
};

export default function ServicePageRenderer({ sections = [] }) {
  return (
    <>
      {sections.map((section) => {
        if (!section.active) return null;

        const Component = SECTION_MAP[section.type];
        if (!Component) return null;

        return (
          <Component
            key={section.id}
            data={section.data}
          />
        );
      })}
    </>
  );
}
