import {defineStore} from "pinia";
import {ref} from "vue";

interface Config {
    baseUrl:string,
}
const defaultConfig: Config = {
    baseUrl:"http://192.168.49.66:8081"
}
//这里所有参数都会持久化保存!!!
export const ConfigStore = defineStore('config', () => {
    const config = ref<Config>(defaultConfig)
    return { config }
},{
    persist:true
})
