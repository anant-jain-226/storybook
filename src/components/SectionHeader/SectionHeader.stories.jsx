import { SectionHeader } from './SectionHeader';
import { Button } from '../Button/Button';

export default { title: 'UI/SectionHeader', component: SectionHeader };
export const Default = {
  args: { title: 'Consult top astrologers online for any life question', subtitle: 'Private video and chat sessions with verified astrologers', action: <Button variant="outline">View all specialities</Button> },
};
export const Centered = { args: { align: 'center', title: 'What our users have to say' } };
export const Display = { args: { display: true, eyebrow: 'Browse by category', title: <>Find the right astrologer, <em>for you</em></>, subtitle: 'Every astrologer has cleared a 4-step verification.' } };
