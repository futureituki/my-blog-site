import React from "react";
import fs from 'fs'
import path from "path";
import matter from "gray-matter";
import { NextPage, InferGetStaticPropsType } from "next";
import {getAllPosts} from '../../lib/api'
import styles from '../../styles/Home.module.css'
import Link from "next/link";
import { sliceString } from "../../lib/sliceString";
type Props = InferGetStaticPropsType<typeof getStaticProps>

type Post = {
  slug:string,
  content:string,
  title:string,
  date:string,
  img: string,
  categories:string[]
}

export const getStaticProps = ({params}:any) => {  
  const allPosts = getAllPosts(["slug","title","date","img","content"])
  const posts = allPosts.map((post) => {
    const slug = post.slug
    const fileContent = fs.readFileSync(`content/${slug}/index.md`, 'utf-8');
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });

  const category = params.category;

  const filteredPosts = posts.filter((post) => {
    return post.frontMatter.categories.includes(category);
  });

  const sortedPosts = filteredPosts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
  );

  return {
    props: {
      posts: sortedPosts,
      category,
      allPosts:JSON.parse(JSON.stringify(allPosts)),
    },
  };
};

export const getStaticPaths = () => {
  const categories =  ['react','Laravel','料理'];
  const paths = categories.map((category) => ({params:{category:category.toString()}}))
  return {
    paths,
    fallback:false
  }
}

const Category:NextPage<Props> = ({posts,category,allPosts}) => {
  // console.log(allPosts,post
  const content = allPosts.filter(function(post:Post){
    return post.slug === posts[0].slug
  })
  console.log(posts)
  return (
    <div className={`${styles.category_container}`}>
      <div className={`${styles.category_title}`}>
        <h2>{category}</h2>
      </div>
      {/* <Link href={`${post.slug}`} key={i}>
          <div className={styles.post_container}>
            <a><h1 className={styles.post_title}>{post.title}</h1></a>
            <h4 className={styles.post_date}>{post.date}</h4>
            <p className={styles.post_content}>{sliceString(post.content)}</p>
            {post.img !== "" ? <div className={styles.post_img}><img src={post.img} alt="" /></div> : ""}
          </div>
          </Link> */}
      <div className={`${styles}`}>
      {posts.map((post) =>(
        <Link href={`/${post.slug}`} key={post.slug}>
          <div className={`${styles.post_container}`}>
          <a className={`${styles.post_title}`}><h3>{post.frontMatter.title}</h3></a>
          <h4 className={`${styles.post_date}`}>{post.frontMatter.date}</h4>
          <img src={`${post.frontMatter.img}`} alt="" />
          <p></p>
          <p className={styles.post_content}>{content.map((post:Post) =>(
            sliceString(post.content)
          ))}</p>
          </div>
        </Link>
      ))}
      </div>
    </div>
  )
}

export default Category