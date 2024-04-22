
// import "./ImageBox.css"
import "../index.css"

export default function ImageBox ({src, text, alt, width, height}) {
  return (
    <div className="image-container">
      <img src={src} alt={alt} width={width} height={height} />
      <p className="text-overlay">{text}</p>
    </div>
  )
}
