import { Input } from './Input';

export default { title: 'UI/Input', component: Input };
export const Default = { args: { placeholder: 'Search astrologers, specialities…' } };
export const WithIcon = { args: { icon: '📍', defaultValue: 'Bangalore' } };
export const WithClear = { args: { defaultValue: 'Bangalore', icon: '📍', after: <button type="button" aria-label="Clear" style={{ width: 20, height: 20, borderRadius: 999, border: 0, background: 'var(--c-ink)', color: '#fff', fontSize: 12, cursor: 'pointer' }}>×</button> } };
