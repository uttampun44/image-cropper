import React, { useEffect, useRef, useState } from "react";
import ImageCropProps from "../types/ImageCropProps";
import "../css/ImageCrop.css";

const ImageCrop: React.FC<ImageCropProps> = ({accept,className,style,type,ratio,}) => {
  const [preview, setImagePreview] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null);
  const [imagesrc, setImageSrc] = useState<string>("");

  const cropTransparentRef = useRef<HTMLDivElement | null>(null)
  const cropOverlayRef = useRef<HTMLDivElement | null>(null);

  const acceptString = accept?.join(",") || "";

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImagePreview((preview) => !preview);
    if (!e.target.files || e.target.files.length == 0) return;
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    if (!image) return;

    const imageUrl = URL.createObjectURL(image);

    setImageSrc(imageUrl);

    return () => URL.revokeObjectURL(imageUrl);
  }, [image]);

  return (
    <>
      <div className="containerImage">
        <div className="input">
          <input type={type} accept={acceptString} onChange={imageHandler} />
        </div>

        
        <div className="imagePreview">
          {preview && (
            <>
              <img src={imagesrc} style={{ width: "100%", margin: "1em 0em" }} />
              <div className="cropOverlay" ref={cropOverlayRef}></div>
              <div className="cropTransparent" ref={cropTransparentRef}></div>

              </>
          
          )}
        </div>
      </div>
    </>
  );
};

export default ImageCrop;
