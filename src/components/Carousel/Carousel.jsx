import { useCallback, useEffect, useRef, useState } from 'react';
import './Carousel.css';

export function Carousel({ children, label = 'Carousel' }) {
  const ref = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft <= 2, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const scroll = (dir) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: 'smooth' });

  return (
    <div className="ui-car" role="region" aria-label={label}>
      <div className="ui-car__track" ref={ref} onScroll={update}>{children}</div>
      {!edge.start && <button type="button" className="ui-car__btn ui-car__btn--prev" aria-label="Previous" onClick={() => scroll(-1)}>‹</button>}
      {!edge.end && <button type="button" className="ui-car__btn ui-car__btn--next" aria-label="Next" onClick={() => scroll(1)}>›</button>}
    </div>
  );
}
