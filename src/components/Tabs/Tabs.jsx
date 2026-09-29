import './Tabs.css';

export function Tabs({ items, value, onChange }) {
  const move = (e, i) => {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!step) return;
    const next = items[(i + step + items.length) % items.length];
    onChange(next.id);
    e.currentTarget.parentElement.querySelector(`[data-tab="${next.id}"]`)?.focus();
  };
  return (
    <div role="tablist" className="ui-tabs">
      {items.map((t, i) => (
        <button key={t.id} type="button" role="tab" data-tab={t.id} aria-selected={t.id === value} tabIndex={t.id === value ? 0 : -1} className="ui-tabs__tab" onClick={() => onChange(t.id)} onKeyDown={(e) => move(e, i)}>
          {t.label}
        </button>
      ))}
    </div>
  );
}
