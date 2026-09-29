import { ProfileHeader } from './ProfileHeader';

const BIO = 'Pt. Ramesh Iyer completed his training in Vedic astrology at a recognised gurukul and has spent over two decades reading birth charts, guiding families on muhurta, and advising on career and relationship timing.';

export default { title: 'UI/ProfileHeader', component: ProfileHeader, parameters: { layout: 'padded' } };
export const Default = {
  args: { name: 'Pt. Ramesh Iyer', claimed: true, avatarBadge: '1 Video', qualifications: 'Jyotish Acharya, Vedic Studies', specialities: 'Vedic Astrologer, Kundli Matching, Muhurta, Career Guidance', experience: '27 Years Experience Overall (24 years as specialist)', verifiedLabel: 'Credentials Verified', rating: 96, stories: 5025, bio: BIO, onShareStory: () => {} },
};
export const Minimal = { args: { name: 'Meera Nair', qualifications: 'Tarot Reader', specialities: 'Tarot, Numerology', experience: '6 Years Experience Overall', rating: 91, stories: 312 } };
