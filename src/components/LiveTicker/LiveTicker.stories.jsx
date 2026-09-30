import { LiveTicker } from './LiveTicker';

const ITEMS = [
  { id: 1, name: 'Rahul', place: 'Mumbai', action: 'booked a Saturn puja with', target: 'Pt. Ram Naresh', time: 'just now' },
  { id: 2, name: 'Neha', place: 'Hyderabad', action: 'got her Kundli read by', target: 'Saanvi Sharma', time: '4 min ago' },
  { id: 3, name: 'Aman', action: 'started a chat with', target: 'Acharya Prem', time: '2 min ago' },
];

export default { title: 'UI/LiveTicker', component: LiveTicker, parameters: { layout: 'fullscreen' } };
export const Default = { args: { items: ITEMS } };
