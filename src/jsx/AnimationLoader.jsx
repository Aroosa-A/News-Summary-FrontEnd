import React from "react";
import ContentLoader from "react-content-loader";
import '../css/NewsGallery.css';


const AnimationLoader = () => {
  return (
    <div className="news-gallery"  >
      <section className="gallery-holder">
        <div className="gallery-data">
          <ContentLoader type="DoorDashFavorite" />
        </div>
      </section >
    </div >
  );
}

export default AnimationLoader;