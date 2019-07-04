import neapi from '@/renderer/util/neapi';

export default {
  namespaced: true,
  state: {
    status: {
      isPlaying: false
    },
    song: {
      name: '余温（完整版）',
      id: 1294243275,
      pst: 0,
      t: 0,
      ar: [{ id: 1160158, name: '宋扬', tns: [], alias: [] }],
      _singer: { id: 1160158, name: '宋扬', tns: [], alias: [] },
      alia: [],
      pop: 100,
      st: 0,
      rt: null,
      fee: 0,
      v: 8,
      crbt: null,
      cf: '',
      al: {
        id: 71845040,
        name: '余温（完整版）',
        picUrl:
          'http://p1.music.126.net/laTh_I3VwfzFBv1EHzLK8A==/109951163606217643.jpg',
        tns: [],
        pic_str: '109951163606217643',
        pic: 109951163606217650
      },
      dt: 299999,
      h: { br: 320000, fid: 0, size: 12002787, vd: 24702 },
      m: { br: 192000, fid: 0, size: 7201689, vd: 24460 },
      l: { br: 128000, fid: 0, size: 4801141, vd: 29578 },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 64,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      mv: 0,
      publishTime: 1531699200000
    }
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
      window.localStorage.setItem('userProfile', JSON.stringify(profile));
    }
  },
  actions: {
    async login({ commit }, { phone, password }) {
      const loginRet = await neapi('/login/cellphone', {
        phone: phone,
        password: password
      });
      commit('setProfile', loginRet.profile);
    }
  },
  getters: {}
};
