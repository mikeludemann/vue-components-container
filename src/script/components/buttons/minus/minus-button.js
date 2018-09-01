Vue.component('minus-button', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<div v-on:click="count--">{{ count }}</div>'
})

var MinusBtn = new Vue({
    el: '#button'
})