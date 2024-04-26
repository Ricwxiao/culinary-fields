
// import "./ImageBox.css"
import "../index.css"
import ImageIcon from "./ImageIcon"

export default function ImageBox ({src, text, text2, alt, width, height}) {
  return (
    <div className="image-container">
      <div class="Overlay">
        <div className="image-icon">{text2}</div>
      </div>
      <img src={src} alt={alt} width={width} height={height} />
      <p className="text-overlay">{text}</p>
    </div>

  )
}
