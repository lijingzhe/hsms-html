import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    heat:{
      value: "81288.98",
      unit: "kw",
      prompt: "热量",
      valueSize:55
    },
    flow:{
      value: "588.98",
      unit: "t/h",
      prompt: "流量",
      valueSize:55
    },
    supplyT:{
      value: "87.8",
      unit: "℃",
      prompt: "供水温度",
      valueSize:55
    },
    returnT:{
      value: "68.9",
      unit: "℃",
      prompt: "回水温度",
      valueSize:50
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
