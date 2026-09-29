import { useState } from 'react';
import { FilterBar } from './FilterBar';

const FILTERS = [
  { id: 'language', label: 'Language', options: [{ value: 'en', label: 'English' }, { value: 'hi', label: 'Hindi' }, { value: 'kn', label: 'Kannada' }] },
  { id: 'reviews', label: 'Client Stories', options: [{ value: '100', label: '100+ stories' }, { value: '1000', label: '1000+ stories' }] },
  { id: 'exp', label: 'Experience', options: [{ value: '5', label: '5+ years' }, { value: '10', label: '10+ years' }] },
];
const SORT = [{ value: 'relevance', label: 'Relevance' }, { value: 'exp', label: 'Experience' }, { value: 'fee', label: 'Fee: low to high' }];

function Demo() {
  const [values, setValues] = useState({});
  const [sort, setSort] = useState('relevance');
  return <FilterBar filters={FILTERS} values={values} onChange={(id, v) => setValues((s) => ({ ...s, [id]: v }))} sortOptions={SORT} sortValue={sort} onSortChange={setSort} onAllFilters={() => {}} />;
}

export default { title: 'UI/FilterBar', component: FilterBar, parameters: { layout: 'fullscreen' } };
export const Default = { render: () => <Demo /> };
