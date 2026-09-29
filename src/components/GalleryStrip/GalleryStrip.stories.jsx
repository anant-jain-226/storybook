import { GalleryStrip } from './GalleryStrip';

export default { title: 'UI/GalleryStrip', component: GalleryStrip, decorators: [(Story) => <div style={{ width: 640, padding: '0 24px' }}><Story /></div>] };
export const Default = { args: { photos: ['🏆', '🎓', '🪔', '📜', '🔮', '🌙'].map((placeholder, i) => ({ alt: `Photo ${i + 1}`, placeholder })) } };
