'use client';

import classes from "./page.module.css";
import ShinyText from "./components/ShinyText";
import ImageSlideshow from "./components/ImagesSlideshow";
import Link from "next/link";


export default function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <ShinyText
          text="Unleash the Elegance"
          disabled={false}
          speed={3}
          className="custom-class"
        />
        <ShinyText
          text="Discover the timeless allure of Dior’s signature fragrance — a bold
          yet refined scent crafted for those who dare to stand out. Let every
          note of Sauvage awaken your senses and leave a trail of sophistication."
          disabled={false}
          speed={3}
          className="custom-class-second"
        />

        <button>
          <Link href="/fragrance">
            <ShinyText
              text="DISCOVER"
              disabled={false}
              speed={3}
              className="custom-class-third"
            />
          </Link>
        </button>
      </div>
      <div className={classes.imageCont}>
        <ImageSlideshow />
      </div>
    </div>
  );
}

