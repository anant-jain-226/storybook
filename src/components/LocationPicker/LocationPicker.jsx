import { useEffect, useRef, useState } from 'react';
import { Input } from '../Input/Input';
import './LocationPicker.css';

export function LocationPicker({
  value = '',
  onChange,
  areas = [],
  cityLabel,
  onUseMyLocation,
  onSearchEntireCity,
  onSelectArea,
  placeholder = 'Search area or locality',
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(value);
  const rootRef = useRef(null);

  useEffect(() => setQuery(value), [value]);

  useEffect(() => {
    if (!open) return undefined;
    const onDocDown = (e) => { if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDocDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const filtered = query.trim()
    ? areas.filter((a) => a.name.toLowerCase().includes(query.trim().toLowerCase()))
    : areas;

  const commit = (text) => {
    setQuery(text);
    onChange?.(text);
    setOpen(false);
  };

  return (
    <div className="ui-locpick" ref={rootRef}>
      <Input
        icon="📍"
        aria-label="Location"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        value={query}
        placeholder={placeholder}
        onFocus={() => setOpen(true)}
        onChange={(e) => { setQuery(e.target.value); onChange?.(e.target.value); setOpen(true); }}
        after={query && (
          <button type="button" className="ui-locpick__clear" aria-label="Clear location" onClick={() => commit('')}>×</button>
        )}
      />
      {open && (
        <div className="ui-locpick__panel" role="listbox" aria-label="Choose a location">
          {onUseMyLocation && (
            <button type="button" className="ui-locpick__action" onClick={() => { onUseMyLocation(); setOpen(false); }}>
              <span aria-hidden="true">◎</span> Use my location
            </button>
          )}
          {cityLabel && onSearchEntireCity && (
            <button type="button" className="ui-locpick__action ui-locpick__action--link" onClick={() => { onSearchEntireCity(); setOpen(false); }}>
              Search in entire {cityLabel}
            </button>
          )}
          {filtered.length > 0 ? (
            <ul className="ui-locpick__list">
              {filtered.map((a) => (
                <li key={a.id}>
                  <button type="button" role="option" className="ui-locpick__item" onClick={() => { onSelectArea?.(a); commit(a.name); }}>
                    <span className="ui-locpick__icon" aria-hidden="true">🔍</span>
                    <span className="ui-locpick__text">
                      <span className="ui-locpick__name">{a.name}</span>
                      <span className="ui-locpick__city">{a.city}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="ui-locpick__empty">No matching areas</p>
          )}
        </div>
      )}
    </div>
  );
}
