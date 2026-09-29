import { useState } from 'react';
import { Pager } from './Pager';

function Demo() {
  const [i, setI] = useState(0);
  return <Pager index={i} total={9} onPrev={() => setI((i + 8) % 9)} onNext={() => setI((i + 1) % 9)} />;
}

export default { title: 'UI/Pager', component: Pager };
export const Default = { render: () => <Demo /> };
