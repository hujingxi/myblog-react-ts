import React from 'react';
import './index.less';

interface ArticelItemProps {
  title: string;
  content: string;
  imgUrl?: string;
  viewCount: number;
  commentCount: number;
  likeCount: number;
  time: number;
}
const ArticelItem: React.FC<ArticelItemProps> = props => {
  const { title, content, imgUrl, viewCount, commentCount, likeCount, time } = props;
  return (
    <>
      <div>
        <h1>{ title }</h1>
        <p>{ content }</p>
        <div>
          {viewCount} {commentCount} {likeCount} {time}
        </div>
      </div>
      {
        imgUrl && <img src={imgUrl}/>
      }
    </>
  );
};

ArticelItem.displayName = 'ArticelItem';

export default ArticelItem;
