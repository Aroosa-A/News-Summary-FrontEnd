import React from 'react';
import "../css/NewsGallery.css";
import EachHeadline from './EachHeadline';


const NewsGallery = ({ news }) => {
    return (
        <>
            {news.map(Headline => (
                <EachHeadline
                    key={Headline.id}
                    newsImage={Headline.fields.thumbnail}
                    newsHeadline={Headline.fields.headline}
                    webPublicationDate={Headline.webPublicationDate}
                />
            ))
            }

        </>
    );
}


export default NewsGallery;