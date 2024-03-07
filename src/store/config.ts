import {defineStore} from "pinia";
import {computed, ref} from "vue";

interface Config {
    baseUrl:string,
}
const defaultConfig: Config = {
    baseUrl:"http://localhost:8080"
}
//这里所有参数都会持久化保存!!!
export const ConfigStore = defineStore('config', () => {
    const config = ref<Config>(defaultConfig)
    return { config }
},{
    persist:true
})
