
// import "./ImageBox.css"
import "../index.css"
import ImageIcon from "./ImageIcon"

export default function ImageBox ({src, text, text2, alt, width, height}) {
  return (
    <div className="image-container">
      <img src={src} alt={alt} width={width} height={height} />
      <div className="Overlay">
        <p className="text-overlay">{text}</p>
      </div>
    </div>

  )
}
