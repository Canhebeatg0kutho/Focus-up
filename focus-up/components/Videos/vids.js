import classes from "./vids.module.css"
const pic = new URL("../../images/Organise.jpg",import.meta.url)
const pic2 = new URL("../../images/Recall.jpg",import.meta.url)
const pic3 = new URL("../../images/stanford.jpg",import.meta.url)

export default function Vids(){

return(
  <div className={classes.links}>
  <a href="https://youtu.be/XqdDMNExvA0" target="_blank"><img className={classes.thumbnail} src={pic} alt="study"></img></a>
  <a href="https://youtu.be/MSq-KGj_cnY" target="_blank"><img className={classes.thumbnail} src={pic2} alt="study"></img></a>
  <a href="https://youtu.be/ZYJ17UVhI30" target="_blank"><img className={classes.thumbnail} src={pic3} alt="study"></img></a>
  </div>
    )
}