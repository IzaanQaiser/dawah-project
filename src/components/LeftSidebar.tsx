import React from 'react';

const LeftSidebar: React.FC = () => {
  const recommendedArticles = [
    "Article 1",
    "Article 2",
    "Article 3",
    "Article 4",
    "Article 5",
    "Article 6",
    "Article 7",
    "Article 8",
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-gray-900 p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-100">Recommended Articles</h2>
      <ul className="space-y-2">
        {recommendedArticles.map((article, index) => (
          <li key={index}>
            <a href={`/article/${index + 1}`} className="text-blue-400 hover:text-blue-300 transition-colors break-words">
              {article}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSidebar;