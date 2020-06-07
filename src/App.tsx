import React, { useEffect, useState } from 'react';
import { getNews } from './redux/actions/newsActions';

import './App.css';
import GridHeader from './components/Grid/GridHeader';
import GridBody from './components/Grid/GridBody';
const { connect } = require('react-redux');

function App(props: any) {
  const { getNews, news } = props;
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    setFeed(news);
  }, [news]);

  return (
    <div className="App">
      <table id="hnmain" cellPadding={0} cellSpacing={0} 
      style={{ backgroundColor: '#f6f6ef', width: "100%", padding: '5px' }}>
        <GridHeader headers={["Comments", "Vote Count", "UpVote", "News Details"]}/>
        <GridBody feeds={feed} />
      </table>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  news: state.newsReducers.news,
});

const mapDispatchToProps = (dispatch: any) => ({
  getNews: () => dispatch(getNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
