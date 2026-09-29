import { StarRating } from '../StarRating/StarRating';
import { Button } from '../Button/Button';
import './ConsultationPlace.css';

export function ConsultationPlace({ location, name, rating, address, days, hours, fee, onDirections, onBook, bookLabel = 'Book Appointment', bookHint }) {
  return (
    <div className="ui-cp">
      <h3 className="ui-cp__loc">{location}</h3>
      <div className="ui-cp__cols">
        <div>
          <a className="ui-cp__name" href="#">{name}</a>
          <div><StarRating value={rating} /></div>
          <p className="ui-cp__addr">{address}</p>
          <button type="button" className="ui-cp__link" onClick={onDirections}>Get Directions</button>
        </div>
        <div className="ui-cp__time"><strong>{days}</strong><span>{hours}</span></div>
        <div className="ui-cp__fee">₹{fee}</div>
      </div>
      <div className="ui-cp__foot">
        <Button onClick={onBook}>{bookLabel}{bookHint && <small className="ui-cp__hint">{bookHint}</small>}</Button>
      </div>
    </div>
  );
}
