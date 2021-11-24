import axios from "axios";

// api
const api = 'http://www.com/swagger/api';

// Get
export async function getBoardListFree(page=1, perPage=10, sort=1, keyword, target, category) {
  const search = keyword ? `&search_keyword=${keyword}&search_target=${target}` : '';
  const cat = category ? `&category_srl=${category}` : '';
  return await axios.get(`${api}/board_list.php?mid=155&page=${page}&currPage=${perPage}&sort=${sort}${search}${cat}`);
}
export async function getBoardViewFree(id) {
  return await axios.get(`${api}/board_read.php?mid=155&document_srl=${id}`);
}
export async function getBoardListNews(page=1, perPage=10, sort=1, keyword, target, category) {
  const search = keyword ? `&search_keyword=${keyword}&search_target=${target}` : '';
  const cat = category ? `&category_srl=${category}` : '';
  return await axios.get(`${api}/board_list.php?mid=317&page=${page}&currPage=${perPage}&sort=${sort}${search}${cat}`);
}
export async function getBoardViewNews(id) {
  return await axios.get(`${api}/board_read.php?mid=317&document_srl=${id}`);
}
export async function getBoardListLive(page=1, perPage=10, sort=1, keyword, target) {
  const search = keyword ? `&search_keyword=${keyword}&search_target=${target}` : '';
  return await axios.get(`${api}/board_list.php?mid=315&page=${page}&currPage=${perPage}&sort=${sort}${search}`);
}
export async function getBoardViewLive(id) {
  return await axios.get(`${api}/board_read.php?mid=315&document_srl=${id}`);
}
export async function getBoardListCoin(page=1, perPage=10, sort=1, keyword, target) {
  const search = keyword ? `&search_keyword=${keyword}&search_target=${target}` : '';
  return await axios.get(`${api}/board_list.php?mid=195&page=${page}&currPage=${perPage}&sort=${sort}${search}`);
}
export async function getBoardViewCoin(id) {
  return await axios.get(`${api}/board_read.php?mid=195&document_srl=${id}`);
}
export async function getBoardListNotice(page=1, perPage=10, sort=1, keyword, target) {
  const search = keyword ? `&search_keyword=${keyword}&search_target=${target}` : '';
  return await axios.get(`${api}/board_list.php?mid=236&page=${page}&currPage=${perPage}&sort=${sort}${search}`);
}
export async function getBoardViewNotice(id) {
  return await axios.get(`${api}/board_read.php?mid=236&document_srl=${id}`);
}
export async function getEventList(page=1, perPage=10, keyword, target) {
  const search = keyword ? `&search_keyword=${keyword}&search_target=${target}` : '';
  return await axios.get(`${api}/event_list.php?page=${page}&currPage=${perPage}${search}`);
}
export async function getEventView(id) {
  return await axios.get(`${api}/event_read.php?document_srl=${id}`);
}
export async function getBoardPopLike(id1, id2) {
  return await axios.get(`${api}/main_populer.php?limit_pop=${id1}&limit_like=${id2}`);
}
export async function getSearchList(page=1, perPage=10, fullSearch, mid) {
  const moduleId = mid ? `&mid=${mid}` : '';
  return await axios.get(`${api}/board_list.php?&page=${page}&currPage=${perPage}&full_search_keyword=${fullSearch}${moduleId}`);
}
export async function getCategoryList() {
  return await axios.get(`${api}/main_category_list.php?`);
}

// Post
export async function postBoardFree(title, content, nick_name, category) {
  const formData = new FormData();
  formData.append('mid', 155);
  formData.append('title', title);
  formData.append('content', content);
  formData.append('nick_name', nick_name);
  formData.append('category_srl', category);
  return await axios.post(`${api}/board_insert.php`, formData);
}
export async function postBoardNews(title, content, nick_name, category) {
  const formData = new FormData();
  formData.append('mid', 317);
  formData.append('title', title);
  formData.append('content', content);
  formData.append('nick_name', nick_name);
  formData.append('category_srl', category);
  return await axios.post(`${api}/board_insert.php`, formData);
}
export async function postEvent(title, content, start_date, end_date, place, address, thumbnail, nick_name) {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  formData.append('start_date', start_date);
  formData.append('end_date', end_date);
  formData.append("file", thumbnail);
  formData.append("place", place);
  formData.append("address", address);
  formData.append('nick_name', nick_name);
  return await axios.post(`${api}/event_insert.php`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}
export async function postComment(mid, document_srl, content, nick_name) {
  const formData = new FormData();
  formData.append('mid', mid);
  formData.append('document_srl', document_srl);
  formData.append('content', content);
  formData.append('nick_name', nick_name);
  return await axios.post(`${api}/comment_insert.php`, formData);
}
export async function postVote(mid, document_srl, voted_count) {
  return await axios.post(`${api}/board_voted.php?mid=${mid}&document_srl=${document_srl}&voted_count=${voted_count}`);
}

// Put
export async function putBoardFree(document_srl, title, content, category) {
  const formData = new FormData();
  formData.append('mid', 155);
  formData.append('document_srl', document_srl);
  if(title) {
    formData.append('title', title);
  }
  if(content) {
    formData.append('content', content);
  }
  if(category) {
    formData.append('category_srl', category);
  }
  return await axios.post(`${api}/board_update.php`, formData);
}
export async function putBoardNews(document_srl, title, content, category) {
  const formData = new FormData();
  formData.append('mid', 317);
  formData.append('document_srl', document_srl);
  if(title) {
    formData.append('title', title);
  }
  if(content) {
    formData.append('content', content);
  }
  if(category) {
    formData.append('category_srl', category);
  }
  return await axios.post(`${api}/board_update.php`, formData);
}
export async function putEvent(document_srl, title, content, start_date, end_date, place, address, thumbnail) {
  const formData = new FormData();
  formData.append('document_srl', document_srl);
  if(title) {
    formData.append('title', title);
  }
  if(content) {
    formData.append('content', content);
  }
  if(start_date) {
    formData.append('start_date', start_date);
  }
  if(end_date) {
    formData.append('end_date', end_date);
  }
  if(place) {
    formData.append('place', place);
  }
  if(address) {
    formData.append('address', address);
  }
  if(thumbnail) {
    formData.append('file', thumbnail);
  }
  return await axios.post(`${api}/event_update.php`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}
export async function putComment(mid, document_srl, comment_srl, content) {
  const formData = new FormData();
  formData.append('mid', mid);
  formData.append('document_srl', document_srl);
  formData.append('comment_srl', comment_srl);
  formData.append('content', content);
  return await axios.post(`${api}/comment_update.php`, formData);
}

// Delete
export async function deleteBoardFree(document_srl) {
  const formData = new FormData();
  formData.append('mid', 155);
  formData.append('document_srl', document_srl);
  return await axios.post(`${api}/board_delete.php`, formData);
}
export async function deleteBoardNews(document_srl) {
  const formData = new FormData();
  formData.append('mid', 317);
  formData.append('document_srl', document_srl);
  return await axios.post(`${api}/board_delete.php`, formData);
}
export async function deleteEvent(document_srl) {
  const formData = new FormData();
  formData.append('document_srl', document_srl);
  return await axios.post(`${api}/event_delete.php`, formData);
}
export async function deleteComment(mid, document_srl, comment_srl) {
  const formData = new FormData();
  formData.append('mid', mid);
  formData.append('document_srl', document_srl);
  formData.append('comment_srl', comment_srl);
  return await axios.post(`${api}/comment_delete.php`, formData);
}