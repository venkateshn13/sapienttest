import React, { useEffect, useState } from 'react';
import { getNews } from './redux/actions/newsActions';

import './App.css';
import GridHeader from './components/Grid/GridHeader';
import GridBody from './components/Grid/GridBody';
const { connect } = require('react-redux');

/**
 * App component
 * @param props 
 */
export function App(props: any) {
  const { getNews, news, pageNo } = props;
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getNews(0);
  }, []);

  useEffect(() => {
    setFeed(news);
  }, [news]);

  /**
   * Navigate previous page.
   */
  const prevPage = () => {
    if (pageNo > 0) {
      setPage(pageNo - 1);
      getNews(pageNo - 1);
    }
  }

  /**
   * Navigate next page.
   */
  const nextPage = () => {
    setPage(pageNo + 1);
    getNews(pageNo + 1);
  }

  return (
    <div className="App">
      <table id="hnmain" cellPadding={0} cellSpacing={0}
        style={{ backgroundColor: '#f6f6ef', width: "100%", padding: '5px' }}>
        <GridHeader headers={["Comments", "Vote Count", "UpVote", "News Details"]} />
        <GridBody feeds={feed} />
      </table>
      <div className="navlink">
        {page > 0 && <span onClick={() => prevPage()}>Previous</span>} |
        <span onClick={() => nextPage()}>Next</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  news: state.newsReducers.news,
  pageNo: state.newsReducers.pageNo,
});

const mapDispatchToProps = (dispatch: any) => ({
  getNews: (pageNo: number) => dispatch(getNews(pageNo))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
