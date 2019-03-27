import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import "intersection-observer";

import "./styles.css";

function LastImage({
  images,
  sizes,
  breakpoints,
  placeholder,
  alt,
  lazy,
  style,
  imgStyle
}) {
  const [isLoaded, setLoaded] = useState(false);
  const [wrapperRef, isInView] = useInView();

  const [placeholderImage, setPlaceholderImage] = useState(() => {
    const placeholderImage = determinePlaceholder(images);
    return placeholderImage;
  });

  function determinePlaceholder(images) {
    let placeholderImage = images[0];
    images.forEach(image => {
      if (
        image.width < placeholderImage.width ||
        image.height < placeholderImage.height
      ) {
        placeholderImage = image;
      }
    });
    return placeholderImage;
  }

  const [imageSet, setImageSet] = useState(() => {
    const imageSet = determineImageSet(images, breakpoints);
    return imageSet;
  });

  function determineImageSet(images, breakpoints) {
    let base = undefined;
    let srcSet = "";
    let sortedImages = images.sort(function(a, b) {
      return a.width - b.width;
    });
    sortedImages.forEach((image, index) => {
      if (image.width > breakpoints[0] && !base) {
        base = image;
      }
      if (base) {
        let closestBreak = 0;
        breakpoints.forEach(point => {
          if (point <= image.width) {
            closestBreak = point;
          }
        });
        srcSet +=
          image.url +
          " " +
          closestBreak +
          "w" +
          (index !== sortedImages.length - 1 ? ", " : "");
      }
    });
    return { base: base, srcSet: srcSet };
  }

  return (
    <div className="last-image-wrapper" style={style} ref={wrapperRef}>
      <div
        style={{
          width: "100%",
          paddingBottom:
            (imageSet.base.height / imageSet.base.width) * 100 + "%"
        }}
      />
      {(!lazy || isInView || isLoaded) && (
        <img
          className="last-image"
          style={imgStyle}
          src={imageSet.base.url}
          srcSet={imageSet.srcSet}
          sizes={sizes}
          alt={alt}
          onLoad={() => {
            setLoaded(true);
          }}
        />
      )}
      {!placeholder && (
        <img
          className={
            "last-image last-image-placeholder" + (isLoaded && " fade")
          }
          style={imgStyle}
          src={placeholderImage.url}
        />
      )}
    </div>
  );
}

LastImage.defaultProps = {
  lazy: true,
  breakpoints: [50, 512, 1024, 2048],
  sizes: "(min-width: 800px) 50vw, 100vw"
};

LastImage.propTypes = {
  images: PropTypes.shape([
    {
      url: PropTypes.string,
      height: PropTypes.number,
      width: PropTypes.number
    }
  ]).isRequired,
  sizes: PropTypes.string,
  breakpoints: PropTypes.array.isRequired,
  alt: PropTypes.string,
  lazy: PropTypes.bool
};

export default LastImage;
