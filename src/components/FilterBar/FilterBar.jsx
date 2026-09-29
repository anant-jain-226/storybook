import { Select } from '../Select/Select';
import './FilterBar.css';

export function FilterBar({ filters, values, onChange, sortOptions, sortValue, onSortChange, onAllFilters }) {
  return (
    <div className="ui-fbar">
      <div className="ui-fbar__inner">
        {filters.map((f) => (
          <Select key={f.id} tone="onDark" label={f.label} options={[{ value: '', label: f.label }, ...f.options]} value={values[f.id] ?? ''} onChange={(v) => onChange(f.id, v)} />
        ))}
        {onAllFilters && <button type="button" className="ui-fbar__all" onClick={onAllFilters}>All Filters ⌄</button>}
        {sortOptions && (
          <label className="ui-fbar__sort">
            <span>Sort By</span>
            <Select tone="onDark" label="Sort by" options={sortOptions} value={sortValue} onChange={onSortChange} />
          </label>
        )}
      </div>
    </div>
  );
}
