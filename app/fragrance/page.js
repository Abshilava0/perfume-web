import perfumes from "../data";
import Image from "next/image";
import ShinyText from "../components/ShinyText";
import '@/app/components/ShinyText.css'

import classes from "./page.module.css";

export default function Fragrance() {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <ul>
          {perfumes.map((perfume) => (
            <li key={perfume.id}>
              <Image
                src={perfume.image}
                alt={perfume.perfumeNumber}
                width={210}
                height={300}
              />
              <ShinyText
                text={perfume.perfumeNumber}
                disabled={false}
                speed={3}
                className="custom-class-card-h1"
              />
              <ShinyText
                text={perfume.description}
                disabled={false}
                speed={3}
                className="custom-class-card-desc"
              />
              <ShinyText
                text={perfume.price}
                disabled={false}
                speed={3}
                className="custom-class-card-price"
              />
              <button>
                <ShinyText
                  text="Add To Cart"
                  disabled={false}
                  speed={3}
                  className="custom-class-card-button"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
