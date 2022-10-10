import React, { useEffect, useState } from 'react';
import '../css/App.css';
import NewsGallery from '../jsx/NewsGallery';
import NewsArticle from '../jsx/NewsArticle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import AnimationLoader from '../jsx/AnimationLoader';


function App() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    getData();

  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(`https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=720179ef-f52e-4ac0-80ac-571390bf0f88`);
      setNews(res.data.response.results);
    }
    catch (e) {
      console.log(e);
    }
  }


  return (
    <Router>
      <Routes>
        (news ? (
        <Route path="/" element={<NewsGallery news={news} />} />
        )
        :
        (
        <Route path='/' element={<AnimationLoader />} />
        )
        )
        <Route path="/article/:id" element={<NewsArticle data={news} />} />
      </Routes>
    </Router >
  );
}

export default App;
