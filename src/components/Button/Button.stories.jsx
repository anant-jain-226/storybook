import { Button } from './Button';

export default { title: 'UI/Button', component: Button, argTypes: { variant: { control: 'radio', options: ['primary', 'outline', 'link'] } } };
export const Primary = { args: { children: 'Book consultation' } };
export const Outline = { args: { variant: 'outline', children: 'View all specialities' } };
export const Link = { args: { variant: 'link', children: 'CONSULT NOW' } };
export const Disabled = { args: { children: 'Unavailable', disabled: true } };
