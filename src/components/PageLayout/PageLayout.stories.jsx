import { PageLayout } from './PageLayout';
import { Card } from '../Card/Card';

export default { title: 'UI/PageLayout', component: PageLayout, parameters: { layout: 'fullscreen' } };
export const TwoColumn = { args: { main: <Card title="Main content">Profile, tabs and stories go here.</Card>, aside: <Card title="Pick a time slot">Slots go here.</Card> } };
export const SingleColumn = { args: { main: <Card title="Main content">Full width content.</Card> } };
