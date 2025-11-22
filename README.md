# YouTube Clone

A modern YouTube-inspired web application built with React and Redux, featuring video discovery, advanced search, and infinite scroll.

## 🎯 Features

- **YouTube Video API Integration** - Fetch and display videos in real-time
- **Advanced Search with Debouncing** - Optimized search with cached suggestions
- **Infinite Scroll** - Seamless video loading with intelligent caching to prevent duplicates
- **Hover Video Preview** - Auto-playing video preview on thumbnail hover
- **Watch Later List** - Save videos for later viewing
- **Dark/Light Theme** - Toggle between themes
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Live Chat Example** - Interactive chat simulation

## 🛠️ Tech Stack

- **React 19** - UI Framework
- **Redux Toolkit** - State Management
- **Tailwind CSS** - Styling
- **React Router DOM** - Navigation
- **YouTube Data API v3** - Video Data
- **Vite** - Build Tool

## 📁 Key Files

- `src/components/VideoContainer.jsx` - Infinite scroll implementation
- `src/hooks/useVideosApi.js` - YouTube API fetching with caching
- `src/redux/videosSlice.js` - Video state management
- `src/redux/watchLaterslice.js` - Watch later state
- `src/components/SearchBar.jsx` - Debounced search with suggestions

## 💡 How It Works

**Search Debouncing** - Reduces API calls by waiting 300ms after user stops typing

**Video Caching** - Redux deduplicates videos before adding them to prevent duplicates

**Infinite Scroll** - Triggers `fetchMore()` when user scrolls 500px from bottom

**Watch Later** - Click the three-dot menu to save videos locally

**Made with ❤️ by [Your Name]**
