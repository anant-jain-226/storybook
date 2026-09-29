import { Chip } from '../Chip/Chip';
import { Button } from '../Button/Button';
import './LocationPrompt.css';

export function LocationPrompt({ title, description, areas = [], selectedArea, onAreaSelect, onSearchLocation, onUseCurrent }) {
  return (
    <section className="ui-locp" aria-label="Location">
      <h3 className="ui-locp__title">{title}</h3>
      <p className="ui-locp__desc">{description}</p>
      <div className="ui-locp__chips">
        {areas.map((a) => <Chip key={a} selected={a === selectedArea} onClick={() => onAreaSelect?.(a)}>{a}</Chip>)}
      </div>
      <div className="ui-locp__actions">
        <Button variant="link" onClick={onSearchLocation}>Search Location</Button>
        <Button onClick={onUseCurrent}>◎ Current Location</Button>
      </div>
    </section>
  );
}
