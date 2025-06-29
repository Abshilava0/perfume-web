import { useEffect, useState } from 'react';
import Image from 'next/image';

import classes from './ImagesSlideshow.module.css';

const images = [
  { image: '/sauvage2.jpg', alt: 'A perfect, jonny' },
  { image: '/sauvage.png', alt: 'A great, sauvage' },
  { image: '/versace.jpg', alt: 'perfect sauvage' },
  { image: '/sauvage3.jpg', alt: 'perfect sauvage' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
       {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt={image.alt}
          className={index === currentImageIndex ? classes.active : ''}
          fill
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
      ))}
    </div>
  );
}