import { RatingBadge } from '../RatingBadge/RatingBadge';
import { Button } from '../Button/Button';
import './SponsoredCard.css';

export function SponsoredCard({ media, name, subtitle, location, fee, tagline, rating, stories, ctaLabel = 'Book Visit', onCta }) {
  return (
    <article className="ui-spon">
      <div className="ui-spon__media">{media}<span className="ui-spon__ad">AD</span></div>
      <div className="ui-spon__body">
        <h3 className="ui-spon__name">{name}</h3>
        <p className="ui-spon__sub">{subtitle}</p>
        <p className="ui-spon__loc">{location}</p>
        <p className="ui-spon__fee"><strong>₹{fee}</strong> Consultation Fees</p>
        <p className="ui-spon__tag">{tagline}</p>
        <div className="ui-spon__proof">
          <RatingBadge percent={rating} />
          <span className="ui-spon__stories">{stories.toLocaleString('en-IN')} Client Stories</span>
        </div>
      </div>
      <Button className="ui-spon__cta" onClick={onCta}>{ctaLabel}</Button>
    </article>
  );
}
