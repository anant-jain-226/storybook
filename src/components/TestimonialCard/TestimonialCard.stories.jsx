import { TestimonialCard } from './TestimonialCard';

export default { title: 'UI/TestimonialCard', component: TestimonialCard, decorators: [(Story) => <div style={{ width: 520 }}><Story /></div>] };
export const Default = { args: { quote: 'One prediction from an astrologer gave me a ray of hope and within a few months, I had a job offer in hand. Thank you so much for helping me out.', name: 'Amar Thakur', place: 'Pune · India' } };
