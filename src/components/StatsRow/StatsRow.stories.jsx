import { StatsRow } from './StatsRow';

export default { title: 'UI/StatsRow', component: StatsRow, parameters: { layout: 'padded' } };
export const Hero = { args: { items: [{ value: '5Cr+', label: 'Users guided' }, { value: '50,000+', label: 'Verified astrologers' }, { value: '13+', label: 'Languages' }, { value: '60+', label: 'Countries' }] } };
export const Profile = { args: { center: true, items: [{ icon: '💼', value: '15 yrs', label: 'Experience' }, { icon: '💬', value: '10k+', label: 'Consultations' }, { icon: '☆', value: '5.0', label: 'Rating' }] } };
