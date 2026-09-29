import './ArticleCard.css';

export function ArticleCard({ media, category, title, author, href = '#' }) {
  return (
    <a className="ui-art" href={href}>
      <div className="ui-art__media">{media}</div>
      <p className="ui-art__cat">{category}</p>
      <h3 className="ui-art__title">{title}</h3>
      <p className="ui-art__author">{author}</p>
    </a>
  );
}
