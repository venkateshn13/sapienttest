import React from "react";

interface IGridBodyProps {
  feeds: any;
}

export default function GridBody(props: IGridBodyProps) {
  const { feeds } = props;

  return (
    <tbody className="itemlist">
      {feeds &&
        feeds.map((feed: any) => (
          <tr className="athing" key={feed.objectID}>
            <td align="center" valign="middle" className="title">
              <span className="rank">{feed.num_comments}</span>
            </td>
            <td align="center" className="title">55</td>
            <td align="center" valign="middle" className="votelinks">
              <div className="votearrow" title="upvote"></div>
            </td>
            <td className="subtext">
                <b>
                {
                    feed.title
                }
                </b>
                {" "}
              <span className="title sitebit comhead">
                {feed.url && (
                <a href={feed.url} target="_blank">
                <span className="sitestr">({feed.url})</span>
                </a>
                )}
              </span>{" "}
                by <span className="hnuser"><b>{feed.author}</b></span>
                {" "}
              <span className="age">4 hours ago</span>{" "}
              <span id="unv_23445944"></span>
              <span><b>[hide]</b></span>
            </td>
          </tr>
        ))}
    </tbody>
  );
}
