import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    count: 0,
    deleteModalObj: {
      name: '',
      triger: false,
      url: '',
      delete_attachment: false,
      data: null,
    },
    helpers: {
      dataUpdated: false,
    },
    auth: {
      user: null,
      permissions: null,
    }
  },



  //Pass data from store to components..
  getters: {
    getCounters(state){
      return state.count;
    },
    //pass the delete object
    getDeleteObj(state){
      return state.deleteModalObj;
    },

    //pass update status
    getUpdateStatus(state){
      return state.helpers.dataUpdated;
    },

    //pass user permissions data
    getUserPermissionsData(state){
      return state.auth.permissions;
    }
  },







  //Recived data from Actions & set to store 
  mutations: {
    //Pass all delete data on modal open
    setDeleteModalData(state, data){
      state.deleteModalObj = data; 
    },
    
    //Set Attachment delete true/false
    setAttachmentDelete(state, data){
      state.deleteModalObj.delete_attachment = data;
    },

    //Set data after sending request to server
    setDataAfterSendRequest(state, data){
      state.deleteModalObj.triger = data.deleteModalClose 
    },

    //update status after all done
    updateStatusChange(state, data){
      state.helpers.dataUpdated = data.dataUpdated
    },

    // Login info
    setUserLoginInfo(state, data){
      state.auth.user = data
    },


    //setUserPermissionInfo
    setUserPermissionInfo(state, data){
      state.auth.permissions = data
    }
  },








  // Recived data from components & pass into mutations 
  actions:{
    changeCounter({commit}, data){
      commit('increments', data)
    },

    // reciveDeleteModalShowCommand({commit}, data){
    //   commit('setDeleteModalShow', data);
    // }
  }
})
