import Link from "next/link";
import React from "react";
import styles from './index.module.css'

export const BackHome = () => {
  return (
    <div className={`${styles.back_home_link}`}>
      <Link href="/">
        <a>Back To Home</a>
      </Link>
    </div>
  )
}