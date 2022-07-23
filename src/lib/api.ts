import fs from "fs"
import path from "path"
import matter from "gray-matter"

type Post = {
  slug:string;
  content:string;
  title:string;
  date:string;
  img?:string;
  categories:string[]
}

const postDirectory = path.join(process.cwd(), "content");


export function getPostSlug() {
  const allDirents = fs.readdirSync(postDirectory, {withFileTypes:true})
  return allDirents.filter((dirent)=> dirent.isDirectory()).map(({name}) => name)
}
export function readFile(){
  const files = fs.readdirSync('content');
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`posts/${filename}`, 'utf-8');
    const {data} = matter(fileContent);
    return {
      frontMatter:data,
      slug
    }
  })
}
export function getPostBySlug(slug:string,fields:string[] = []){
  const fullPath = path.join(postDirectory, slug, "index.md");
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const {data,content} = matter(fileContents);

  const items:Post = {
    slug:"",
    content:"",
    title:"",
    date:"",
    img:"",
    categories:[]
  }

  fields.forEach((field) =>{
    if(field === "slug"){
      items[field] = slug
    }
    if(field === "content"){
      items[field] = content
    }
    if(field === "title" || field === "date" || field === "img" || field === "categories"){
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields:string[] = []){
  const slugs = getPostSlug()
  const posts = slugs.map((slug) => getPostBySlug(slug,fields))
  .sort((a,b) => (a.date > b.date ? -1 : 1))
  return posts
}