import { useState } from 'react';
import { LocationPrompt } from './LocationPrompt';

function Demo() {
  const [area, setArea] = useState('');
  return <LocationPrompt title="Provide current location to see Astrologers near you" description="You are seeing results from Bangalore. See results near you" areas={['HSR Layout', 'Whitefield', 'Indiranagar', 'Sarjapur Road', 'Rajajinagar']} selectedArea={area} onAreaSelect={setArea} onSearchLocation={() => {}} onUseCurrent={() => {}} />;
}

export default { title: 'UI/LocationPrompt', component: LocationPrompt };
export const Default = { render: () => <Demo /> };
