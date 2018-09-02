Vue.component('custom-object', {
    props: {
        url: String,
        type: String,
        name: String
    },
    template: '<object v-bind:data="url" v-bind:type="type" v-bind:name="name"></object>'
})

var objects = new Vue({
    el: '#object'
})