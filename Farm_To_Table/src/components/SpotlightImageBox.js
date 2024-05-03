
// import "./ImageBox.css"
import "../index.css"
import ImageIcon from "./ImageIcon"

export default function SpotlightImageBox ({src, text, text2, alt, width, height}) {
  return (
    <div className="image-container">
      {/* <div class="Overlay">

      </div> */}
      <img src={src} alt={alt} width={width} height={height} />
      <div className="Overlay">
        <p className="image-icon">{text2}</p>
        <p className="text-overlay">{text}</p>

      </div>
    </div>
  )
}
<<<<<<< HEAD

=======
>>>>>>> homepage
