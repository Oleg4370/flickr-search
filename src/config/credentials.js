const FLICKR_API = '6b3575d10435de5f010fc941f5eff94a';
export const SEARCH_URL = 'https://api.flickr.com/services/rest/';
export const SEARCH_PARAMS = {
  method: 'flickr.photos.search',
  api_key: FLICKR_API,
  text: '',
  format: 'json',
  nojsoncallback: 1,
  per_page: 20
};
