import { Avatar } from '../Avatar/Avatar';
import './TestimonialCard.css';

export function TestimonialCard({ rating = 5, quote, name, place, avatar }) {
  return (
    <figure className="ui-tcard">
      <div className="ui-tcard__stars" role="img" aria-label={`${rating} out of 5 stars`}>{'★'.repeat(rating)}</div>
      <span className="ui-tcard__mark" aria-hidden="true">&ldquo;</span>
      <blockquote className="ui-tcard__quote">{quote}</blockquote>
      <figcaption className="ui-tcard__who">
        <Avatar src={avatar} name={name} size={40} />
        <span><strong>{name}</strong><small>{place}</small></span>
      </figcaption>
    </figure>
  );
}
