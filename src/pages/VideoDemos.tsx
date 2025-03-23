import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const videos = [
  {
    id: 'resume-screening',
    title: 'AI Resume Screening Demo',
    description: 'See how our AI automatically analyzes and ranks candidate resumes.',
    thumbnail: 'https://placehold.co/800x450/EEE/31343C?text=Resume+Screening+Demo&font=montserrat',
    category: 'features',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder URL
  },
  {
    id: 'chatbot-interview',
    title: 'AI Chatbot Interview Process',
    description: 'Watch how our chatbot conducts pre-screening interviews with candidates.',
    thumbnail: 'https://placehold.co/800x450/EEE/31343C?text=Chatbot+Interview&font=montserrat',
    category: 'features',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder URL
  },
  {
    id: 'psycho-testing',
    title: 'Psychoanalytical Testing Walkthrough',
    description: 'Learn how our AI evaluates candidate personality traits and skills.',
    thumbnail: 'https://placehold.co/800x450/EEE/31343C?text=Psychoanalytical+Testing&font=montserrat',
    category: 'features',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder URL
  },
  {
    id: 'platform-overview',
    title: 'HRGPTAI Platform Overview',
    description: 'A complete tour of our AI recruitment platform and its benefits.',
    thumbnail: 'https://placehold.co/800x450/EEE/31343C?text=Platform+Overview&font=montserrat',
    category: 'overview',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder URL
  },
  {
    id: 'customer-testimonial',
    title: 'Customer Success Story: TechCorp',
    description: 'How TechCorp reduced hiring time by 70% using HRGPTAI.',
    thumbnail: 'https://placehold.co/800x450/EEE/31343C?text=Customer+Story&font=montserrat',
    category: 'testimonials',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder URL
  },
  {
    id: 'getting-started',
    title: 'Getting Started with HRGPTAI',
    description: 'A step-by-step guide for setting up your account and first job posting.',
    thumbnail: 'https://placehold.co/800x450/EEE/31343C?text=Getting+Started&font=montserrat',
    category: 'tutorials',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder URL
  },
];

const categories = [
  { id: 'all', name: 'All Videos' },
  { id: 'features', name: 'Feature Demos' },
  { id: 'overview', name: 'Platform Overview' },
  { id: 'testimonials', name: 'Customer Stories' },
  { id: 'tutorials', name: 'Tutorials' },
];

const VideoDemos = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVideos = videos.filter(video => {
    // Filter by category
    if (activeCategory !== 'all' && video.category !== activeCategory) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !video.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !video.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <>
      <Helmet>
        <title>Video Demos - HRGPTAI</title>
        <meta name="description" content="Watch demos of HRGPTAI's AI-powered recruitment platform." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 py-16">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Video Demonstrations
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Watch how HRGPTAI transforms the recruitment process with our AI-powered tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="section bg-white dark:bg-dark">
        <div className="container">
          {/* Search and Filter */}
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search Bar */}
            <div className="md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search videos..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </span>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-dark-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-600'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Video Player */}
            <div className="lg:col-span-2">
              <motion.div 
                className="bg-white dark:bg-dark-800 rounded-lg shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
                key={selectedVideo.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-video w-full">
                  <iframe
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{selectedVideo.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300">{selectedVideo.description}</p>
                </div>
              </motion.div>
            </div>

            {/* Video Playlist */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Video Playlist</h3>
              <div className="space-y-4 h-[500px] overflow-y-auto pr-4">
                {filteredVideos.length > 0 ? (
                  filteredVideos.map((video) => (
                    <motion.div
                      key={video.id}
                      className={`rounded-lg overflow-hidden cursor-pointer transition-all bg-white dark:bg-dark-800 border border-gray-100 dark:border-gray-700 ${
                        selectedVideo.id === video.id ? 'ring-2 ring-primary' : 'hover:shadow-md'
                      }`}
                      onClick={() => setSelectedVideo(video)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="aspect-video">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <h4 className="font-medium text-sm line-clamp-1 text-gray-900 dark:text-white">{video.title}</h4>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    <p>No videos match your search.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoDemos; 