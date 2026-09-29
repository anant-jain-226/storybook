import { ConsultCard } from './ConsultCard';

export default { title: 'UI/ConsultCard', component: ConsultCard, decorators: [(Story) => <div style={{ width: 240 }}><Story /></div>] };
export const CallOffline = { args: { rate: 126, callOffline: true, notes: ['Verified astrologer', 'Avg connect under 12s'] } };
export const Available = { args: { rate: 59, notes: ['Verified astrologer'] } };
