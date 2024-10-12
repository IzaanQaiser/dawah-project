import React from 'react';

const RightSidebar: React.FC = () => {
  const categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
  ];

  const externalLinks = [
    { name: "External Link 1", url: "https://example.com/1" },
    { name: "External Link 2", url: "https://example.com/2" },
    { name: "External Link 3", url: "https://example.com/3" },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-gray-900 p-4">
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-100">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <a href={`/category/${index + 1}`} className="text-blue-400 hover:text-blue-300 transition-colors break-words">
                {category}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-100">External Links</h2>
        <ul className="space-y-2">
          {externalLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} className="text-blue-400 hover:text-blue-300 transition-colors break-words" target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default RightSidebar;