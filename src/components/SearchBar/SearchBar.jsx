import { Input } from '../Input/Input';
import './SearchBar.css';

export function SearchBar({ location, query, onLocationChange, onQueryChange, onSubmit, placeholder }) {
  return (
    <form className="ui-searchbar" role="search" onSubmit={(e) => { e.preventDefault(); onSubmit?.(); }}>
      <Input className="ui-searchbar__loc" icon="📍" aria-label="Location" value={location} onChange={(e) => onLocationChange(e.target.value)} />
      <Input className="ui-searchbar__q" icon="🔍" aria-label="Search" placeholder={placeholder} value={query} onChange={(e) => onQueryChange(e.target.value)} />
    </form>
  );
}
