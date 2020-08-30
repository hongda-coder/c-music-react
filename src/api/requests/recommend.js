import request from '../ajax';

// 推荐轮播图
export function getBanners() {
  return request({
    url: "/banner"
  })
}
// 热门推荐
export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

// 新碟上架
export function getNewSongs(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}