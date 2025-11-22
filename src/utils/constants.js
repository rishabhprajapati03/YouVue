export const API_KEY = import.meta.env.VITE_API_KEY;

export const VIDEO_CATEGORIES_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" +
  API_KEY;

export const LIVE_CHAT_COUNT = 20;

export const MOST_POPULAR_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&pageToken=&regionCode=US&key=" +
  API_KEY;

export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=REPLACE_ME&key=" +
  API_KEY;

export const SEARCH_AUTOCOMPLETE_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_RESULTS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=REPLACE_ME&key=" +
  API_KEY;

export const CHANNEL_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=REPLACE_ME&key=" +
  API_KEY;

export const COMMENTS_API =
  "  https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=25&videoId=REPLACE_ME&key=" +
  API_KEY;
