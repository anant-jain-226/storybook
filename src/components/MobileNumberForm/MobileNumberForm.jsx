import { useState } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import './MobileNumberForm.css';

export function MobileNumberForm({ title = 'Enter your mobile number', onSubmit }) {
  const [number, setNumber] = useState('');
  const valid = /^[6-9]\d{9}$/.test(number);
  return (
    <form className="ui-mnf" onSubmit={(e) => { e.preventDefault(); if (valid) onSubmit?.(number); }}>
      <h2 className="ui-mnf__title">{title}</h2>
      <label className="ui-mnf__label" htmlFor="ui-mnf-number">Mobile<span aria-hidden="true">*</span></label>
      <Input id="ui-mnf-number" className="ui-mnf__input" type="tel" inputMode="numeric" autoComplete="tel-national" maxLength={10} placeholder="Mobile Number" value={number} onChange={(e) => setNumber(e.target.value.replace(/\D/g, ''))} />
      <p className="ui-mnf__help">You will receive an OTP shortly.<br />We will send appointment-related communications on this number.</p>
      <Button className="ui-mnf__submit" disabled={!valid} type="submit">Continue</Button>
    </form>
  );
}
