import { AstrologerTile } from './AstrologerTile';

const base = { name: 'Astro Shama', badge: 'Celebrity', online: true, expertise: ['Vedic', 'Numerology', 'Tarot'], languages: 'English · Hindi', experience: 15, rating: 4.7, consultations: '10k+', rate: 126 };

export default { title: 'UI/AstrologerTile', component: AstrologerTile, decorators: [(Story) => <div style={{ width: 280 }}><Story /></div>] };
export const Online = { args: base };
export const Offline = { args: { ...base, online: false, callDisabled: true, badge: 'Top Choice' } };
