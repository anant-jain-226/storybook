import { ConsultationPlace } from './ConsultationPlace';

export default { title: 'UI/ConsultationPlace', component: ConsultationPlace, parameters: { layout: 'padded' } };
export const Default = {
  args: { location: 'Koramangala, Bangalore', name: 'Jyotish Kendra', rating: 5, address: '18, 1st Main, Jakkasandra Extension, Koramangala 1st Block, Bangalore', days: 'Mon, Wed - Sun', hours: '09:00 AM - 06:00 PM', fee: 300, bookHint: 'Instant Pay Available', onDirections: () => {}, onBook: () => {} },
};
