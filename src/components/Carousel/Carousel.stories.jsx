import { Carousel } from './Carousel';
import { SpecialityCard } from '../SpecialityCard/SpecialityCard';

const ITEMS = [
  ['🔮', 'Vedic Astrologer', 'Birth chart, dasha and remedies guidance'],
  ['🃏', 'Tarot Reader', 'Clarity on love, work and choices ahead'],
  ['🔢', 'Numerologist', 'Name and date-of-birth number analysis'],
  ['🏠', 'Vastu Consultant', 'Balance your home and workspace'],
  ['🖐️', 'Palmist', 'Readings from lines and mounts'],
  ['💍', 'Kundli Matching', 'Compatibility checks before marriage'],
];

export default { title: 'UI/Carousel', component: Carousel, parameters: { layout: 'padded' } };
export const Default = {
  render: () => (
    <div style={{ maxWidth: 1180, padding: '0 24px' }}>
      <Carousel label="Specialities">
        {ITEMS.map(([icon, title, description]) => <SpecialityCard key={title} media={<span aria-hidden="true">{icon}</span>} title={title} description={description} />)}
      </Carousel>
    </div>
  ),
};
