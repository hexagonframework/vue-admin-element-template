import { param2Obj } from 'utils';

const userMap = {
  admin: {
    role: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: '',
    name: '超级管理员',
    uid: '001'
  },
  editor: {
    role: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: '',
    name: '普通编辑',
    uid: '002'

  },
  developer: {
    role: ['develop'],
    token: 'develop',
    introduction: '我是开发',
    avatar: '',
    name: '工程师',
    uid: '003'
  }
}

export default {
  loginByEmail: config => {
    const { email } = JSON.parse(config.body);
    return userMap[email.split('@')[0]];
  },
  getInfo: config => {
    const { token } = param2Obj(config.url);
    if (userMap[token]) {
      return userMap[token];
    } else {
      return Promise.reject('a');
    }
  },
  logout: () => 'success'
};
