
// import "./ImageBox.css"
import "../index.css"

export default function ImageBox ({src, text, text2, alt, width, height}) {
  return (
    <div className="image-container">
      <img src={src} alt={alt} width={width} height={height} />
      <div class="Overlay">
        <div className="image-icon">{text2}</div>
      </div>
      <p className="text-overlay">{text}</p>
    </div>

  )
}
