"use client";

import Link from "next/link";
import classes from "./header.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";



export default function Header() {
  const path = usePathname();

  return (
    <nav className={classes.nav}>
      <div className={classes.info}>
        <h1><Link href="/">DIOR</Link></h1>
      </div>
      <ul>
        <li>
          <Link
            href="/"
            className={
              path === "/" ? `${classes.link} ${classes.active}` : classes.link
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/fragrance"
            className={
              path === "/fragrance"
                ? `${classes.link} ${classes.active}`
                : classes.link
            }
          >
            Fragrance
          </Link>
        </li>
      </ul>
      <div className={classes.image}>
        <Image src="/dior.jpg" fill alt="Image" />

      </div>
    </nav>
  );
}
