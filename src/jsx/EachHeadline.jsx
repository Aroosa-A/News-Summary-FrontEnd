import React from 'react';
import "../css/NewsGallery.css";
import { Link } from 'react-router-dom';




const EachHeadline = ({ newsImage, newsHeadline, webPublicationDate }) => {
    return (
        <div className="news-gallery">
            <section className="gallery-holder">
                <div className="gallery-data">
                    <img data-testid="imageRendered" className='image' src={newsImage} alt="headline1" ></img>
                    <Link className="heading" to={`/article/${webPublicationDate}`}
                        rel="noopener noreferrer">
                        <h3 > {newsHeadline}
                        </h3>
                    </Link>
                </div>
            </section>
        </div>
    );
}


export default EachHeadline;