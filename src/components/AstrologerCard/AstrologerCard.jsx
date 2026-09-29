import { Avatar } from '../Avatar/Avatar';
import { RatingBadge } from '../RatingBadge/RatingBadge';
import { AvailabilityTag } from '../AvailabilityTag/AvailabilityTag';
import { Button } from '../Button/Button';
import './AstrologerCard.css';

export function AstrologerCard({
  name, speciality, experience, location, center, fee, rating, stories, availability, avatar, avatarBadge,
  primaryLabel = 'Book Consultation', primaryHint, secondaryLabel = 'Contact', onPrimary, onSecondary,
}) {
  return (
    <article className="ui-astro">
      <Avatar src={avatar} name={name} badge={avatarBadge} />
      <div className="ui-astro__info">
        <h3 className="ui-astro__name">{name}</h3>
        <p className="ui-astro__muted">{speciality}</p>
        <p className="ui-astro__muted">{experience} years experience overall</p>
        <p className="ui-astro__loc"><strong>{location}</strong>{center && <> • {center}</>}</p>
        <p className="ui-astro__fee">₹{fee} Consultation fee</p>
        <div className="ui-astro__proof">
          <RatingBadge percent={rating} />
          <span className="ui-astro__stories">{stories.toLocaleString('en-IN')} Client Stories</span>
        </div>
      </div>
      <div className="ui-astro__actions">
        {availability && <AvailabilityTag>{availability}</AvailabilityTag>}
        <Button onClick={onPrimary}>
          {primaryLabel}
          {primaryHint && <small className="ui-astro__hint">{primaryHint}</small>}
        </Button>
        <Button variant="outline" onClick={onSecondary}>{secondaryLabel}</Button>
      </div>
    </article>
  );
}
