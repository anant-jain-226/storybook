import { Avatar } from '../Avatar/Avatar';
import './AppointmentSummary.css';

export function AppointmentSummary({ type = 'In-person Appointment', date, time, onChangeDateTime, astrologer, place, onDirections }) {
  return (
    <section className="ui-apt" aria-label="Appointment summary">
      <header className="ui-apt__head"><span aria-hidden="true">🏛️</span> {type}</header>
      <div className="ui-apt__row">
        <div className="ui-apt__when"><span>📅 On {date}</span><span>🕓 At {time}</span></div>
        <button type="button" className="ui-apt__link" onClick={onChangeDateTime}>Change Date &amp; Time</button>
      </div>
      <div className="ui-apt__row ui-apt__person">
        <Avatar src={astrologer.avatar} name={astrologer.name} size={56} />
        <div>
          <strong>{astrologer.name}</strong>
          <p>{astrologer.credentials}</p>
        </div>
      </div>
      <div className="ui-apt__row ui-apt__person">
        <Avatar src={place.logo} name={place.name} size={56} />
        <div>
          <strong>{place.name}</strong>
          <p>{place.address}</p>
          <button type="button" className="ui-apt__link" onClick={onDirections}>Get Directions</button>
        </div>
      </div>
    </section>
  );
}
