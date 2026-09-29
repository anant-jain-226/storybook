import { useState } from 'react';
import { SlotPicker } from './SlotPicker';

const DAYS = [
  { id: 'today', label: 'Today', slots: ['04:10 PM', '04:20 PM', '04:40 PM', '05:10 PM', '05:20 PM'].map((time) => ({ time, period: 'Evening' })) },
  { id: 'tomorrow', label: 'Tomorrow', slots: [] },
  { id: 'wed', label: 'Wed, 30 Sep', slots: [{ time: '10:00 AM', period: 'Morning' }, { time: '10:30 AM', period: 'Morning' }, { time: '05:00 PM', period: 'Evening' }] },
];

function Demo() {
  const [day, setDay] = useState('today');
  const [slot, setSlot] = useState('');
  return <div style={{ width: 340 }}><SlotPicker fee={300} placeName="Jyotish Kendra" rating={5} location="Koramangala" days={DAYS} selectedDay={day} onDayChange={(d) => { setDay(d); setSlot(''); }} selectedSlot={slot} onSlotChange={setSlot} /></div>;
}

export default { title: 'UI/SlotPicker', component: SlotPicker };
export const Default = { render: () => <Demo /> };
