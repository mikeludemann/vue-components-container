Vue.component('custom-object', {
    props: {
        url: String,
        type: String
    },
    template: '<object v-bind:data="url" v-bind:type="type"></object>'
})

var objects = new Vue({
    el: '#object'
})