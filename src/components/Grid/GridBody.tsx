import React from "react";
import { hideNewsAction, upVoteAction } from "../../redux/actions/newsActions";

const { connect } = require("react-redux");

/**
 * Interface for Grid body props.
 */
interface IGridBodyProps {
  feeds: any;
  hideNewsAction: (id: string) => void;
  upVoteAction: (id: string) => void;
}

/**
 * GridBody Component
 * @param props
 */
function GridBody(props: IGridBodyProps) {
  const { feeds, hideNewsAction, upVoteAction } = props;

  /**
   * Get the domain name from the url.
   * @param url string
   */
  const getUrl = (url: string) => {
    return url.replace("http://", "").replace("https://", "").split(/[/?#]/)[0];
  };

  /**
   * Get the difference between 2 days by days.
   * @param date string
   */
  const getDays = (date: string) => {
    const date1: any = new Date(date);
    const date2: any = Date.now();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <tbody className="itemlist">
      {feeds &&
        feeds.map((feed: any) => (
          <tr className="athing" key={feed.objectID}>
            <td align="center" valign="middle" className="title">
              <span className="rank">
                {feed.num_comments ? feed.num_comments : 0}
              </span>
            </td>
            <td align="center" className="title">
              {feed.votes ? feed.votes : 0}
            </td>
            <td align="center" valign="middle" className="votelinks">
              <div
                onClick={() => upVoteAction(feed.objectID)}
                className="votearrow"
                title="upvote"
              ></div>
            </td>
            <td className="subtext">
              <b>{feed.title}</b>{" "}
              <span className="title sitebit comhead">
                {feed.url && (
                  <a href={feed.url} target="_blank">
                    <span className="sitestr">({getUrl(feed.url)})</span>
                  </a>
                )}
              </span>{" "}
              by{" "}
              <span className="hnuser">
                <b>{feed.author}</b>
              </span>{" "}
              <span className="age">{getDays(feed.created_at)} hours ago</span>{" "}
              <span
                className="hide"
                onClick={() => hideNewsAction(feed.objectID)}
              >
                <b>[hide]</b>
              </span>
            </td>
          </tr>
        ))}
    </tbody>
  );
}

const mapStateToProps = (state: any) => ({
  news: state.newsReducers.news,
});

const mapDispatchToProps = (dispatch: any) => ({
  hideNewsAction: (id: string) => dispatch(hideNewsAction(id)),
  upVoteAction: (id: string) => dispatch(upVoteAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GridBody);
