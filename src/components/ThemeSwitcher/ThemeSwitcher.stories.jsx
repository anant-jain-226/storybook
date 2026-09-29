import { useState } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';

function Demo() {
  const [theme, setTheme] = useState('orange');
  return <ThemeSwitcher value={theme} onChange={(t) => { setTheme(t); document.documentElement.dataset.theme = t; }} />;
}

export default { title: 'UI/ThemeSwitcher', component: ThemeSwitcher };
export const Default = { render: () => <Demo /> };
