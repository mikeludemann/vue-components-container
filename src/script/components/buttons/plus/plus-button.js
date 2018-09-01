Vue.component('plus-button', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<div v-on:click="count++">{{ count }}</div>'
})

var PlusBtn = new Vue({
    el: '#button'
})