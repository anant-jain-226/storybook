import './ThemeSwitcher.css';

export const THEMES = [
  { id: 'orange', label: 'Light orange', swatch: '#fbcf7c' },
  { id: 'purple', label: 'Light purple', swatch: '#d8ccff' },
];

export function ThemeSwitcher({ themes = THEMES, value, onChange }) {
  return (
    <div role="radiogroup" aria-label="Color theme" className="ui-theme">
      {themes.map((t) => (
        <button key={t.id} type="button" role="radio" aria-checked={t.id === value} aria-label={t.label} title={t.label} className="ui-theme__dot" style={{ background: t.swatch }} onClick={() => onChange(t.id)} />
      ))}
    </div>
  );
}
