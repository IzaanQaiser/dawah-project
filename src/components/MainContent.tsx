import React from 'react';

const MainContent: React.FC = () => {
  return (
    <main className="flex-grow p-8 min-w-0 bg-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-100">Welcome to Our Website</h1>
      <div className="bg-gray-800 p-6 rounded shadow-lg mb-8">
        <p className="text-gray-300">
          This is a placeholder for dynamic content. Here, we'll display information related to the main theme of the page.
        </p>
      </div>
      <article className="prose lg:prose-xl">
        <h3>Main Article</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
        </p>
        <p>
          Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.
        </p>
      </article>
    </main>
  );
};

export default MainContent;