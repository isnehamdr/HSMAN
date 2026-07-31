const posts = [
  {
    date: "February 14, 2026",
    category: "Networking",
    title: "Building Stronger Bonds Across Nepal's Hospitality Industry",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&auto=format&fit=crop&q=70",
  },
  {
    date: "February 17, 2026",
    category: "CSR",
    title: "HSMAN's Blood Donation Drive Brings the Community Together",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&auto=format&fit=crop&q=70",
  },
  {
    date: "February 19, 2026",
    category: "Training",
    title: "Digital Marketing Skills Every Hotel Sales Team Needs",
    image:
      "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=700&auto=format&fit=crop&q=70",
  },
];

export default function Blog() {
  return (
    <section className="w-full bg-gray-50 px-4 sm:px-10 lg:px-0 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <span className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-800 text-sm font-medium px-5 py-2.5 rounded-full w-fit mb-4">
              Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900">
              Read Our Latest Blog Posts
            </h2>
          </div>

          <a
            href="#blog"
            className="inline-flex items-center gap-2 bg-[#007DCC] hover:bg-[#0066a8] transition-colors text-white font-semibold pl-2 pr-6 py-2.5 rounded-full w-fit shrink-0"
          >
            <span className="w-7 h-7 rounded-full bg-white text-[#007DCC] flex items-center justify-center text-xs">
              »
            </span>
            View All Blog
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
            <div
              key={post.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5 flex flex-col"
            >
              <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.category}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3 leading-snug">
                {post.title}
              </h3>

              <a
                href="#read-more"
                className="inline-flex items-center gap-1.5 text-gray-900 font-medium text-sm mt-4 w-fit"
              >
                Read more
                <span className="text-base">↗</span>
              </a>

              <div className="h-px bg-gray-200 mt-4 mb-4" />

              <div className="rounded-xl overflow-hidden mt-auto">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-44 sm:h-48 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}