import http from './../util/http';

export function detail(data, cookies = '') {
  return http({
    method: 'POST',
    url: `https://music.163.com/weapi/v3/playlist/detail`,
    data: {
      id: data.id,
      n: 100000,
      s: data.s || 8
    },
    crypto: 'linuxapi',
    cookies: cookies
  });
}

export function intelligence(data, cookies = '') {
  return http({
    method: 'POST',
    url: `http://music.163.com/weapi/playmode/intelligence/list`,
    data: {
      songId: data.id,
      type: 'fromPlayOne',
      playlistId: data.pid,
      startMusicId: data.id,
      count: 1
    },
    crypto: 'weapi',
    cookies: cookies
  });
}
