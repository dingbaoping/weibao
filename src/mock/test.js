import Mock from 'mockjs';
import { param2Obj } from 'utils';

const List = [];
const count = 22;
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id:'@increment',
    registertime: +Mock.Random.date('T'),
    account: '18709827062',
    username:'丫丫',
    totalname:'安徽高管家医疗科技有限公司',
    branchname:'安徽高管家医疗科技有限公司',
    membercount:'500',
    xueyacount:'1000',
    xuetangcount:'2000',
    xuezhicount:'220',
    lastlogintime:+Mock.Random.date('T'),
    loginaddress:'合肥市政务区',
    loginfrequency:'16',
    version:'安卓V1.1.0'   
  })
  );
}

export default {
  getTest: config => {
    const { registertime,lastlogintime,account,username,totalname,branchname,loginaddress,version,page, limit, sort } = param2Obj(config.url);
    let mockList = List.filter(item => {
      if (registertime && item.registertime !== registertime) return false;
      if (lastlogintime && item.lastlogintime !== lastlogintime) return false;
      // if (cesn && item.cesn.indexOf(cesn) < 0) return false;
       if (account && item.account.indexOf(account) < 0) return false;
      if (username && item.username.indexOf(username) < 0) return false;
        if (totalname && item.totalname.indexOf(totalname) < 0) return false;
      if (branchname && item.branchname.indexOf(branchname) < 0) return false;
      if (loginaddress && item.loginaddress.indexOf(loginaddress) < 0) return false;
      if (version && item.version.indexOf(version) < 0) return false;
      
      return true;
    });
    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1));
    return {
      total: mockList.length,
      items: pageList
    }
  }

};
