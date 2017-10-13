import fetch from 'utils/fetch';

export function getTest(query) {
  return fetch({
    url: '/test/test',
    method: 'get',
    params: query
  });
}
