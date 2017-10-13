import Mock from 'mockjs';
import testAPI from './test';//店员列表


Mock.mock(/\/test\/test/, 'get', testAPI.getTest);


export default Mock;
