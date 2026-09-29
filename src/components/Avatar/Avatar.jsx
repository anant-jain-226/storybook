import './Avatar.css';

export function Avatar({ src, name = '', size = 96, badge, ring = false, online = false }) {
  const initials = name.replace(/^(Dr|Pt)\.?\s*/i, '').split(' ').map((w) => w[0]).slice(0, 2).join('');
  return (
    <span className={`ui-avatar${ring ? ' ui-avatar--ring' : ''}`} style={{ width: size, height: size }}>
      {src ? <img src={src} alt={name} /> : <span className="ui-avatar__fallback" role="img" aria-label={name} style={{ fontSize: size * 0.36 }}>{initials}</span>}
      {online && <span className="ui-avatar__online" role="img" aria-label="Online" />}
      {badge && <span className="ui-avatar__badge">{badge}</span>}
    </span>
  );
}
