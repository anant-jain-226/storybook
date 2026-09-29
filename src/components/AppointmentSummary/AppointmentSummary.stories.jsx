import { AppointmentSummary } from './AppointmentSummary';

export default { title: 'UI/AppointmentSummary', component: AppointmentSummary };
export const Default = {
  args: { date: 'Sep 28, 2026', time: '4:10 PM', astrologer: { name: 'Pt. Ramesh Iyer', credentials: 'Jyotish Acharya, Vedic Astrologer, Kundli Matching, Muhurta' }, place: { name: 'Jyotish Kendra', address: '18, 1st Main, Koramangala 1st Block, Bangalore' }, onChangeDateTime: () => {}, onDirections: () => {} },
};
