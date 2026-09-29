import { StoryCard } from './StoryCard';

export default { title: 'UI/StoryCard', component: StoryCard, parameters: { layout: 'padded' } };
export const WithTags = {
  args: { name: 'Sanjay', timeAgo: '21 days ago', tags: ['Astrologer friendliness', 'Explanation of the reading', 'Remedy satisfaction', 'Value for money', 'Wait time'], text: 'Got my kundli reviewed and the timing guidance for a job change was clear and practical. Highly recommend.' },
};
export const TextOnly = { args: { name: 'Venkat', timeAgo: '6 years ago', text: 'Very happy with the detailed reading. He explains everything patiently.' } };
