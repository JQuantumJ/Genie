import React from 'react';
import { GalleryGrid, GalleryItem } from './RecentStyle';

const Article = ({ articles }) => {
    return (
        <GalleryGrid>
          {articles.map((article, index) => (
            <GalleryItem key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <img 
                src={article.thumbnail} // 기사별 썸네일 이미지를 가져옴
                alt={article.title} 
                />
                <h3>{article.title.length > 30 ? `${article.title.slice(0, 30)}...` : article.title}</h3>
              </a>
            </GalleryItem>
          ))}
        </GalleryGrid>
    );
};

export default Article;
