import { LiveTicker } from './LiveTicker';

const ITEMS = [
  { id: 1, node: <><b>Rahul</b> from Mumbai booked a Saturn puja with <em>Pt. Ram Naresh</em></>, time: 'just now' },
  { id: 2, node: <><b>Neha</b> from Hyderabad got her Kundli read by <em>Saanvi Sharma</em></>, time: '4 min ago' },
  { id: 3, node: <><b>Aman</b> started a chat with <em>Acharya Prem</em></>, time: '2 min ago' },
];

export default { title: 'UI/LiveTicker', component: LiveTicker, parameters: { layout: 'fullscreen' } };
export const Default = { args: { items: ITEMS } };
