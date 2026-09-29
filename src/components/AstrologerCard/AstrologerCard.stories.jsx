import { AstrologerCard } from './AstrologerCard';

const base = { name: 'Pt. Ramesh Iyer', speciality: 'Vedic Astrologer', experience: 27, location: 'Koramangala, Bangalore', center: 'Jyotish Kendra', fee: 300, rating: 96, stories: 5030, availability: 'Available Today', primaryHint: 'No Booking Fee' };

export default { title: 'UI/AstrologerCard', component: AstrologerCard, parameters: { layout: 'padded' } };
export const Default = { args: base };
export const WithBadge = { args: { ...base, avatarBadge: 'VEDIC' } };
export const NoAvailability = { args: { ...base, availability: undefined, primaryHint: undefined } };
