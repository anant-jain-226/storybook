import { useState } from 'react';
import { SearchBar } from './SearchBar';

function Demo() {
  const [location, setLocation] = useState('Bangalore');
  const [query, setQuery] = useState('');
  return <SearchBar location={location} query={query} onLocationChange={setLocation} onQueryChange={setQuery} placeholder="Search astrologers, specialities, languages…" />;
}

export default { title: 'UI/SearchBar', component: SearchBar };
export const Default = { render: () => <Demo /> };
