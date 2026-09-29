import { useState } from 'react';
import { Select } from './Select';

const OPTIONS = [{ value: '', label: 'Experience' }, { value: '5', label: '5+ years' }, { value: '10', label: '10+ years' }];

function Demo({ tone }) {
  const [value, setValue] = useState('');
  return <div style={{ padding: 16, background: tone === 'onDark' ? 'var(--c-bar)' : 'none' }}><Select label="Experience" options={OPTIONS} value={value} onChange={setValue} tone={tone} /></div>;
}

export default { title: 'UI/Select', component: Select };
export const Light = { render: () => <Demo tone="light" /> };
export const OnDark = { render: () => <Demo tone="onDark" /> };
