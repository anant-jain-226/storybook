import { Avatar } from '../Avatar/Avatar';
import { Tag } from '../Tag/Tag';
import './StoryCard.css';

export function StoryCard({ name, verified = true, timeAgo, recommends = true, tags = [], text }) {
  return (
    <article className="ui-story">
      <header className="ui-story__head">
        <Avatar name={name} size={32} />
        <span className="ui-story__name">{name}{verified && ' (Verified)'}</span>
        <time className="ui-story__time">{timeAgo}</time>
      </header>
      <div className="ui-story__body">
        {recommends && <p className="ui-story__rec"><span aria-hidden="true">👍</span> I recommend the astrologer</p>}
        {tags.length > 0 && (
          <div className="ui-story__tags"><span>Happy with:</span>{tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        )}
        {text && <p className="ui-story__text">{text}</p>}
      </div>
    </article>
  );
}
