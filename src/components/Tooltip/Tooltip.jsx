import { useId } from 'react';
import './Tooltip.css';

export function Tooltip({ content, children, open = false }) {
  const id = useId();
  return (
    <span className={`ui-tip${open ? ' ui-tip--open' : ''}`} aria-describedby={id}>
      {children}
      <span role="tooltip" id={id} className="ui-tip__bubble">{content}</span>
    </span>
  );
}
