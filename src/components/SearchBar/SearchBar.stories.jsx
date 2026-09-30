import { LocationPicker } from '../LocationPicker/LocationPicker';
import { useState } from 'react';
import { SearchBar } from './SearchBar';

function Demo() {
  const [location, setLocation] = useState('Bangalore');
  const [query, setQuery] = useState('');
  return <SearchBar location={location} query={query} onLocationChange={setLocation} onQueryChange={setQuery} placeholder="Search astrologers, specialities, languages…" />;
}

export default { title: 'UI/SearchBar', component: SearchBar };
export const Default = { render: () => <Demo /> };

function DemoWithPicker() {
  const [location, setLocation] = useState('Bangalore');
  const [query, setQuery] = useState('');
  const AREAS = [
    { id: 'jp-nagar', name: 'Jp Nagar', city: 'Bangalore' },
    { id: 'whitefield', name: 'Whitefield', city: 'Bangalore' },
    { id: 'hsr', name: 'Hsr Layout', city: 'Bangalore' },
    { id: 'indiranagar', name: 'Indiranagar', city: 'Bangalore' },
  ];
  return (
    <SearchBar
      location={location}
      query={query}
      onLocationChange={setLocation}
      onQueryChange={setQuery}
      placeholder="Search astrologers, specialities, languages…"
      renderLocation={({ value, onChange }) => (
        <LocationPicker
          value={value}
          onChange={onChange}
          areas={AREAS}
          cityLabel="Bangalore"
          onUseMyLocation={() => onChange('Near you')}
          onSearchEntireCity={() => onChange('Bangalore')}
          onSelectArea={(a) => onChange(a.name)}
        />
      )}
    />
  );
}
export const WithLocationPicker = { render: () => <DemoWithPicker /> };
