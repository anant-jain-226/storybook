import { Avatar } from '../Avatar/Avatar';
import './ReviewCard.css';

export function ReviewCard({ name, rating = 5, text, reply }) {
  return (
    <article className="ui-rev">
      <header className="ui-rev__head">
        <Avatar name={name} size={32} />
        <span className="ui-rev__name">{name}</span>
        <span className="ui-rev__stars" role="img" aria-label={`${rating} out of 5`}>{'★'.repeat(rating)}</span>
      </header>
      <p className="ui-rev__text">{text}</p>
      {reply && (
        <div className="ui-rev__reply">
          <p className="ui-rev__replyhead"><strong>{reply.name}</strong> <span className="ui-rev__pill">{reply.badge ?? 'ASTROLOGER'}</span></p>
          <p className="ui-rev__text">{reply.text}</p>
        </div>
      )}
    </article>
  );
}
