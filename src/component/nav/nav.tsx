import React from "react";
import Link from "next/link";
import styles  from './index.module.css'
import { BsPersonFill, BsFillBookmarkFill } from 'react-icons/bs'
export const Nav = () => {
  return (
    <header>
      <div className={`${styles.header_container}`}>
        <div className={`${styles.header_content}`}>
          <h1 className={`${styles.title}`}>
            <Link href="/"><a>定期ぼやきブログ</a></Link>
          </h1>
            <nav className={`${styles.header_nav}`}>
            <ul className={`${styles.header_ul}`}>
            <li className={`${styles.header_li}`}>
              <Link href="/person"><BsPersonFill className={`${styles.header_small_logo}`} fontSize={32}/></Link>
            </li>
            <li className={`${styles.header_li}`}> 
              <Link href="/bookmark"><BsFillBookmarkFill className={`${styles.header_small_logo}`} fontSize={24}/></Link>
            </li>
          </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}