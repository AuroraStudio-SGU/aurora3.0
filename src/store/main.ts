import {defineStore} from "pinia";
import {ref} from "vue";

export const MainStore = defineStore('main', {
    state: () => {
        return {
            count:ref(0),
        }
    },
    getters: {
        double: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
})
