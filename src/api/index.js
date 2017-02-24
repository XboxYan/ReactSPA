const API_BASE = 'http://news-at.zhihu.com/api';
const API_V4 = API_BASE + '/4';
const API_V3 = API_BASE + '/3';
const API_NEWS = API_V4 + '/news';
const API_STORY = API_V4 + '/story';
export default {
  /*获取最新日报*/
  getLatestNews() {
    return API_NEWS + '/latest';
  },
  /*获取日报详情*/
  getNewsDetail( newsId ) {
    return API_NEWS + '/' + newsId;
  },
}