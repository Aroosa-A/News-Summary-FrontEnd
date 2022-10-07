import React from "react";
import "../css/NewsGallery.css";




const EachArticle = ({ articleImage, articleHeadline, articleBody, articleUrl }) => {
    return (
        <div className="news-gallery"  >
            <section className="gallery-holder">
                <div className="gallery-data">
                    <img src={articleImage} alt="headline" ></img>
                    <a className="heading" href={`${articleUrl}`}><h3> {articleHeadline}
                    </h3>
                    </a>
                    <p>
                        {articleBody}
                    </p>
                </div>
            </section >
        </div >
    );
}


export default EachArticle;