import Link from "next/link";
import React from "react";
import styles from '../styles/Home.module.css'
const BookMark = () => {
  return (
    <div className={styles.book_container}>
      <h2 className={styles.book_title}>BookMark</h2>
      <div className={`${styles.book_content}`}>
        <div className={`${styles.book_main_language}`}>
          <h3>JavaScript</h3>
          <ul>
            <li>
              <Link href="https://ja.reactjs.org/" target={"_blank"}>
                <a>React-Document</a>
              </Link>
            </li>
            <li>
              <Link href="https://qiita.com/notakaos/items/85fd2f5c549f247585b1" target={"_blank"}>
                <a>TypeScript + Node.jsプロジェクトにESLint + Prettierを導入する手順2020</a>
              </Link>
            </li>
            <li>
              <Link href="https://zenn.dev/yodaka/articles/eca2d4bf552aeb" target={"_blank"}>
                <a>Next.jsディレクトリ構成・設計再考（featuresが何を解決するか）
</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.book_main_language}`}>
          <h3>PHP</h3>
          <ul>
          <li>
              <Link href="https://laravel-lang.com/" target={"_blank"}>
                <a>Laravel-lang</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.book_main_language}`}>
          <h3>HTML・CSS</h3>
        </div>
      </div>
    </div>
  )
}

export default BookMark