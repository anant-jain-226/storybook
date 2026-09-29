import './ExpertiseList.css';

export function ExpertiseList({ items }) {
  return <ul className="ui-exp">{items.map((i) => <li key={i}>{i}</li>)}</ul>;
}
