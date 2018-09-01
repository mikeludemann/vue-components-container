Vue.component('custom-audio', {
    props: {
        url: String,
        type: String,
        defaulttext: String
    },
    template:
        `
    <audio controls>
    	<source v-bind:src="url" v-bind:type="type">
       {{defaulttext}}
    </audio>
    `
})

var audio = new Vue({
    el: '#asset'
})