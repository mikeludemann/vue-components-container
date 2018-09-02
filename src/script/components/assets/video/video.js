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

// ----------------------------------------------------

Vue.component('video-container', {
    template:
    `
    <video
        v-bind:controls="controls"
        v-bind:poster="poster"
        v-bind:loop="loop"
        v-bind:muted="muted"
        v-bind:autoplay="autoplay"
        v-bind:preload="preload"
        v-bind:id="id"
        v-bind:title="title"
    >
        <slot></slot>
    </video>
    `,
    props: {
        controls: Boolean,
        poster: String,
        loop: Boolean,
        muted: Boolean,
        autoplay: Boolean,
        preload: String,
        id: String,
        title: String
    }
})

var videos = new Vue({
    el: "#app"
})