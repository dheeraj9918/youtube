const YOUTUBE_API_KEY = "AIzaSyCAFjjlrpn34kG1CtwN-zE6YYZybkOldvg"

export const YOUTUBE_VIDEO_API =
    'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + YOUTUBE_API_KEY;

export const YOUTUBE_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 25;