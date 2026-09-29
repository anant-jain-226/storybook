import { CategoryCard } from './CategoryCard';

export default { title: 'UI/CategoryCard', component: CategoryCard, argTypes: { tone: { control: 'select', options: ['pink', 'amber', 'green', 'violet', 'teal', 'red'] } }, decorators: [(Story) => <div style={{ width: 300 }}><Story /></div>] };
export const Love = { args: { icon: '♡', title: 'Love', count: 4280, tone: 'pink' } };
export const Career = { args: { icon: '💼', title: 'Career', count: 5840, tone: 'green' } };
