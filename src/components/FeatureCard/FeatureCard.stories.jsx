import { FeatureCard } from './FeatureCard';

export default { title: 'UI/FeatureCard', component: FeatureCard, argTypes: { tone: { control: 'select', options: ['blue', 'teal', 'lilac', 'gold'] } } };
export const Default = { args: { title: 'Instant Video Consultation', description: 'Connect within 60 secs', media: '📱', tone: 'blue' } };
export const Gold = { args: { title: 'Kundli Reports', description: 'Detailed birth chart analysis', media: '🪐', tone: 'gold' } };
