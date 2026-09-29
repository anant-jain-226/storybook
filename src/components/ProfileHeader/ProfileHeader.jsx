import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import { VerifiedBadge } from '../VerifiedBadge/VerifiedBadge';
import { RatingBadge } from '../RatingBadge/RatingBadge';
import './ProfileHeader.css';

export function ProfileHeader({ name, avatar, avatarBadge, claimed, qualifications, specialities, experience, verifiedLabel, rating, stories, bio, onShareStory }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="ui-ph">
      <Avatar src={avatar} name={name} size={100} badge={avatarBadge} />
      <div className="ui-ph__info">
        <h1 className="ui-ph__name">{name} {claimed && <small>Profile is claimed</small>}</h1>
        <p className="ui-ph__line">{qualifications}</p>
        <p className="ui-ph__line">{specialities}</p>
        <p className="ui-ph__line">{experience}</p>
        {verifiedLabel && <div className="ui-ph__verified"><VerifiedBadge>{verifiedLabel}</VerifiedBadge></div>}
        <p className="ui-ph__proof"><RatingBadge percent={rating} /> <span>({stories.toLocaleString('en-IN')} clients)</span></p>
        {bio && (
          <p className={`ui-ph__bio${open ? '' : ' ui-ph__bio--clamped'}`}>
            {bio} <button type="button" className="ui-ph__more" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'less' : 'more..'}</button>
          </p>
        )}
      </div>
      {onShareStory && <button type="button" className="ui-ph__share" onClick={onShareStory}>Share your story</button>}
    </header>
  );
}
