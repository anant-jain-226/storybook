import { useState } from 'react';
import { Tabs } from './Tabs';

const ITEMS = [{ id: 'info', label: 'Info' }, { id: 'stories', label: 'Stories (5025)' }, { id: 'services', label: 'Services & Remedies' }, { id: 'media', label: 'Photos & Videos' }, { id: 'qa', label: 'Consult Q&A' }];

function Demo() {
  const [tab, setTab] = useState('info');
  return <Tabs items={ITEMS} value={tab} onChange={setTab} />;
}

export default { title: 'UI/Tabs', component: Tabs };
export const Default = { render: () => <Demo /> };
