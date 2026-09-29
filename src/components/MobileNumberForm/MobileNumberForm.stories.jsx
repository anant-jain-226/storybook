import { MobileNumberForm } from './MobileNumberForm';

export default { title: 'UI/MobileNumberForm', component: MobileNumberForm };
export const Default = { args: { onSubmit: (n) => console.log('OTP requested for', n) } };
