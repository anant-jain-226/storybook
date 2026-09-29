import { Button } from '../Button/Button';
import './SpecialityTile.css';

export function SpecialityTile({ icon, label, ctaLabel = 'CONSULT NOW', onSelect }) {
  return (
    <div className="ui-stile">
      <div className="ui-stile__icon" aria-hidden="true">{icon}</div>
      <p className="ui-stile__label">{label}</p>
      <Button variant="link" onClick={onSelect}>{ctaLabel}</Button>
    </div>
  );
}
