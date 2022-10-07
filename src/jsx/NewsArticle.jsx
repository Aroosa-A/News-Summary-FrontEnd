import React from 'react';
import '../css/NewsGallery.css';
import { useParams } from 'react-router-dom';
import EachArticle from './EachArticle';



const NewsArticle = ({ data }) => {
    const { id } = useParams();
    return (
        <>
            {data.map(article => article.webPublicationDate === id ?
                <EachArticle
                    key={article.id}
                    articleImage={article.fields.thumbnail}
                    articleHeadline={article.webTitle}
                    articleBody={article.fields.bodyText}
                    articleUrl={article.webUrl}
                />
                :
                <p key={article.id} ></p>
            )}
        </>
    );
}

export default NewsArticle;