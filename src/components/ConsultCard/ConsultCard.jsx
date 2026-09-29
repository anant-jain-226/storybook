import { Button } from '../Button/Button';
import './ConsultCard.css';

export function ConsultCard({ heading = 'Consult', rate, callOffline = false, onChat, onCall, notes = [] }) {
  return (
    <aside className="ui-consult">
      <h2 className="ui-consult__title">{heading}</h2>
      <p className="ui-consult__rate"><strong>₹{rate}</strong>/min</p>
      <Button variant="outline" className="ui-consult__chat" onClick={onChat}>Chat now</Button>
      <Button variant="outline" disabled={callOffline} onClick={onCall}>
        Call now{callOffline && <small className="ui-consult__off">Currently offline</small>}
      </Button>
      {notes.length > 0 && <ul className="ui-consult__notes">{notes.map((n) => <li key={n}>{n}</li>)}</ul>}
    </aside>
  );
}
