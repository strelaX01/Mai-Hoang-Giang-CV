import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import englishCert from "../assets/englishCertificate.jpg";
import scoreBoard from "../assets/scoreBoard.jpg";
import universityDegree from "../assets/universityDegree.jpg";
import "./PopupCertificate.css";

export default function PopupCertificate() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [zoomImg, setZoomImg] = useState(null);

  const images = [
    { title: "University Degree", src: universityDegree },
    { title: "Transcript", src: scoreBoard },
    { title: "English Certificate", src: englishCert },
  ];

  const nextImage = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <button className="view-btn" onClick={() => setShow(true)}>
        View Degree & Transcript
      </button>

      {show && (
        <div className="popup-overlay" onClick={() => setShow(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShow(false)}>
              <X size={18} />
            </button>

            <div className="popup-gallery">
              <h3>{images[index].title}</h3>

              <div className={`popup-img-container ${direction}`}>
                <img
                  key={images[index].src}
                  src={images[index].src}
                  alt={images[index].title}
                  className="popup-img"
                  onClick={() => setZoomImg(images[index].src)} 
                />
              </div>

              <button className="nav-btn left" onClick={prevImage}>
                <ChevronLeft size={28} color="#000000" />
              </button>
              <button className="nav-btn right" onClick={nextImage}>
                <ChevronRight size={28} color="#000000" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 👇 Overlay hiển thị ảnh to*/}
      {zoomImg && (
        <div className="zoom-overlay" onClick={() => setZoomImg(null)}>
          <img src={zoomImg} alt="Zoomed" className="zoomed-img" />
          <button className="zoom-close" onClick={() => setZoomImg(null)}>
            <X size={20} color="#fff" />
          </button>
        </div>
      )}
    </>
  );
}
