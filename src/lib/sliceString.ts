export const sliceString = (content:string) => {
  return content.length > 100 ? content.slice(0,100) + "...." : content
}