import React from "react";
import { NextPage, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getAllPosts, getPostBySlug } from "../lib/api";
import {markdownToHtml} from "../lib/remarkHtml";
import { BackHome } from '../component/homeLink/BackHome'
type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticPaths = async() => {
  const posts = getAllPosts(["slug"]);
  return {
    paths:posts.map(post =>{
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback:false
  }
}

export const getStaticProps = async({params}:any) => {
  const post = getPostBySlug(params.slug,["slug","title","date","content","img"]);
  const content = await markdownToHtml(post.content);
  return {
    props:{
      post:{
        ...post,
        content
      }
    }
  }
}

const Post:NextPage<Props> = (props) => {
  const router = useRouter();
  if (!router.isFallback && !props.post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  console.log(props.post)
  return (
    <div className={styles.detail_container}>
      <div className={styles.detail_title}>
        <h3>{props.post.title}</h3>
      </div>
      {props.post.img ? <div className={styles.detail_img}><img src={props.post.img}/></div> : ""}
      <div className={styles.detail_date}>
        <h4>{props.post.date}</h4>
      </div>
      <div className={styles.detail_content}>
        <div dangerouslySetInnerHTML={{ __html: props.post.content }} />
      </div>
      <BackHome/>
    </div>
  )
}


export default Post