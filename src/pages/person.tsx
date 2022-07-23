import { NextPage } from "next";
import Link from "next/link";
import styles from '../styles/Home.module.css'
const Person:NextPage = () => {
  return (
    <div className={styles.person_container}>
      <h2 className={styles.person_name}>futureituki-Itsuki_Sato</h2>
      <div className={styles.person_introduction}>
        <p>Hello, I`m a front-end engineer. I mainly use React and Firebase. Please take a look at my SNS</p>
      </div>
      <h4 className={styles.person_link_text}>Find me on <Link href="https://github.com/futureituki" target={"_blank"}><a className={styles.person_link}>Github</a></Link> and <Link href="https://twitter.com/8tfGpQ99poWMQFN" target={"_blank"}>
        <a className={styles.person_link}>Twitter</a>
        </Link>
      </h4>
    </div>
  )
}

export default Person