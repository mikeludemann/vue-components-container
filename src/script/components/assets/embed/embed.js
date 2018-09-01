Vue.component('custom-embed', {
    props: {
        url: String,
        type: String,
        width: String,
        height: String
    },
    template: '<embed v-bind:src="url" v-bind:type="type" v-bind:width="width" v-bind:height="height"></embed>'
})

var embeds = new Vue({
    el: '#embed'
})