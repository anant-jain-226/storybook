import './PageLayout.css';

export function PageLayout({ main, aside, top }) {
  return (
    <div className="ui-pl">
      <div className="ui-pl__inner">
        {top && <div className="ui-pl__top">{top}</div>}
        <div className={`ui-pl__cols${aside ? ' ui-pl__cols--two' : ''}`}>
          <div className="ui-pl__main">{main}</div>
          {aside && <aside className="ui-pl__aside">{aside}</aside>}
        </div>
      </div>
    </div>
  );
}
