import { useState } from 'react';
import { LocationPicker } from './LocationPicker';

const AREAS = [
  { id: 'jp-nagar', name: 'Jp Nagar', city: 'Bangalore' },
  { id: 'whitefield', name: 'Whitefield', city: 'Bangalore' },
  { id: 'hsr', name: 'Hsr Layout', city: 'Bangalore' },
  { id: 'indiranagar', name: 'Indiranagar', city: 'Bangalore' },
  { id: 'sarjapur', name: 'Sarjapur Road', city: 'Bangalore' },
  { id: 'electronics-city', name: 'Electronics City', city: 'Bangalore' },
  { id: 'yelahanka', name: 'Yelahanka', city: 'Bangalore' },
  { id: 'rajajinagar', name: 'Rajajinagar', city: 'Bangalore' },
  { id: 'malleswaram', name: 'Malleswaram', city: 'Bangalore' },
  { id: 'vijayanagar', name: 'Vijayanagar', city: 'Bangalore' },
];

function Demo() {
  const [value, setValue] = useState('Bangalore');
  return (
    <div style={{ width: 280 }}>
      <LocationPicker
        value={value}
        onChange={setValue}
        areas={AREAS}
        cityLabel="Bangalore"
        onUseMyLocation={() => setValue('Near you')}
        onSearchEntireCity={() => setValue('Bangalore')}
        onSelectArea={(a) => setValue(a.name)}
      />
    </div>
  );
}

export default { title: 'UI/LocationPicker', component: LocationPicker, parameters: { layout: 'padded' } };
export const Default = { render: () => <Demo /> };
