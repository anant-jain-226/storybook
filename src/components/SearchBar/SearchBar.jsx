import { Input } from '../Input/Input';
import './SearchBar.css';

export function SearchBar({ location, query, onLocationChange, onQueryChange, onSubmit, placeholder, renderLocation }) {
  return (
    <form className="ui-searchbar" role="search" onSubmit={(e) => { e.preventDefault(); onSubmit?.(); }}>
      <div className="ui-searchbar__loc">
        {renderLocation
          ? renderLocation({ value: location, onChange: onLocationChange })
          : <Input icon="📍" aria-label="Location" value={location} onChange={(e) => onLocationChange(e.target.value)} />}
      </div>
      <Input className="ui-searchbar__q" icon="🔍" aria-label="Search" placeholder={placeholder} value={query} onChange={(e) => onQueryChange(e.target.value)} />
    </form>
  );
}
