import { Avatar } from '../Avatar/Avatar';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import './AstrologerTile.css';

export function AstrologerTile({ name, avatar, badge, online = false, expertise = [], languages, experience, rating, consultations, rate, onChat, onCall, callDisabled = false, href = '#' }) {
  return (
    <article className="ui-atile">
      {badge && <span className="ui-atile__badge">{badge}</span>}
      <Avatar src={avatar} name={name} size={56} ring online={online} />
      <h3 className="ui-atile__name"><a href={href}>{name}</a> <span className="ui-atile__tick" role="img" aria-label="Verified">✓</span></h3>
      <div className="ui-atile__tags">{expertise.map((e) => <Tag key={e}>{e}</Tag>)}</div>
      <p className="ui-atile__meta">{languages}<br />{experience} yrs exp</p>
      <div className="ui-atile__row">
        <span className="ui-atile__rating"><span aria-hidden="true">★</span> {rating} · {consultations}</span>
        <span className="ui-atile__rate"><strong>₹{rate}</strong>/min</span>
      </div>
      <div className="ui-atile__actions">
        <Button variant="outline" onClick={onChat}>Chat</Button>
        <Button variant="outline" onClick={onCall} disabled={callDisabled}>Call</Button>
      </div>
    </article>
  );
}
