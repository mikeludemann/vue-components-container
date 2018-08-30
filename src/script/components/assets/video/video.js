Vue.component('custom-video', {
    props: {
        url: String,
        type: String,
        defaulttext: String
    },
    template:
        `
    <video controls>
    	<source v-bind:src="url" v-bind:type="type">
       {{defaulttext}}
    </video>
    `
})

var video = new Vue({
    el: '#asset'
})