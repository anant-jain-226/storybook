import { Carousel } from '../Carousel/Carousel';
import './GalleryStrip.css';

export function GalleryStrip({ photos }) {
  return (
    <Carousel label="Gallery">
      {photos.map((p) => (
        <figure key={p.alt} className="ui-gal">
          {p.src ? <img src={p.src} alt={p.alt} /> : <span className="ui-gal__ph" role="img" aria-label={p.alt}>{p.placeholder ?? '🖼️'}</span>}
        </figure>
      ))}
    </Carousel>
  );
}
