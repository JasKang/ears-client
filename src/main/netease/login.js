// 手机登录

import crypto from 'crypto';

export function cellphone(query, request) {
  query.cookie.os = 'pc';
  const data = {
    phone: query.phone,
    countrycode: query.countrycode,
    password: crypto
      .createHash('md5')
      .update(query.password)
      .digest('hex'),
    rememberLogin: 'true'
  };
  return request('POST', `https://music.163.com/weapi/login/cellphone`, data, {
    crypto: 'weapi',
    ua: 'pc',
    cookie: query.cookie,
    proxy: query.proxy
  });
}
