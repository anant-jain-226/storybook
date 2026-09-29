import { StarRating } from '../StarRating/StarRating';
import './SlotPicker.css';

export function SlotPicker({ heading = 'In-person Appointment', fee, placeName, rating, location, days, selectedDay, onDayChange, selectedSlot, onSlotChange }) {
  const day = days.find((d) => d.id === selectedDay);
  const groups = (day?.slots ?? []).reduce((acc, s) => {
    (acc[s.period] ||= []).push(s);
    return acc;
  }, {});
  return (
    <section className="ui-slots" aria-label="Pick a time slot">
      <header className="ui-slots__head"><span><span aria-hidden="true">🏛️</span> {heading}</span><strong>₹{fee} fee</strong></header>
      <div className="ui-slots__place">
        <strong>{placeName}</strong>
        <span className="ui-slots__meta"><StarRating value={rating} /> ₹{fee}</span>
        <span className="ui-slots__meta">{location}</span>
      </div>
      <div role="tablist" className="ui-slots__days">
        {days.map((d) => (
          <button key={d.id} type="button" role="tab" aria-selected={d.id === selectedDay} disabled={!d.slots.length} onClick={() => onDayChange(d.id)}>
            <strong>{d.label}</strong>
            <small>{d.slots.length ? `${d.slots.length} Slots Available` : 'No Slots Available'}</small>
          </button>
        ))}
      </div>
      {Object.entries(groups).map(([period, list]) => (
        <div key={period} className="ui-slots__group">
          <h4>{period} <small>({list.length} slots)</small></h4>
          <div className="ui-slots__grid">
            {list.map((s) => (
              <button key={s.time} type="button" aria-pressed={s.time === selectedSlot} onClick={() => onSlotChange(s.time)}>{s.time}</button>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
