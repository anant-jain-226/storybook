import { NavBar } from './NavBar';
import { Button } from "../Button/Button";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

export default { title: 'UI/NavBar', component: NavBar, parameters: { layout: 'fullscreen' } };
export const Default = {
  args: {
    brand: '✦ Nakshatra',
    links: [{ label: 'Find Astrologers', href: '#' }, { label: 'Video Consult', href: '#' }, { label: 'Kundli Reports', href: '#' }, { label: 'Pujas', href: '#' }],
    actions: <><ThemeSwitcher value="orange" onChange={() => {}} /><Button>Talk now</Button></>,
  },
};
