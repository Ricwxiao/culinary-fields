import React, { useState } from 'react';

const Gallery = ({ photos }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const openPopup = (index) => {
    setSelectedPhotoIndex(index);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  }; 

  return (
    <div>
      <div className="gallery">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index}`}
            onClick={() => openPopup(index)}
            style={{ cursor: 'pointer', margin: '5px', maxWidth: '200px' }}
          />
        ))}
      </div>
      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <img
              src={photos[selectedPhotoIndex]}
              alt={`Photo ${selectedPhotoIndex}`}
              style={{ maxWidth: '100%' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
