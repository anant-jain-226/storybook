import './DisplayHeading.css';

export function DisplayHeading({ as: Tag = 'h1', children }) {
  return <Tag className="ui-dh">{children}</Tag>;
}
