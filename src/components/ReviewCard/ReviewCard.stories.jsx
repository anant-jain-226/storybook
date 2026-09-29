import { ReviewCard } from './ReviewCard';

export default { title: 'UI/ReviewCard', component: ReviewCard, decorators: [(Story) => <div style={{ width: 640 }}><Story /></div>] };
export const WithReply = { args: { name: 'Joyeeta', text: 'What an insightful session. Her intuition is top notch and no one understood me better. Thank you so much.', reply: { name: 'Astro Shama', text: 'Tons of blessings beta.' } } };
export const NoReply = { args: { name: 'Karan', rating: 4, text: 'Clear guidance on career timing.' } };
