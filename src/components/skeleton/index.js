import "./skeleton.css"

const Skeleton = ({ style, classes }) => {
  return <div style={style} className={`skeleton ${classes ? classes : ""}`}></div>
}
export default Skeleton
