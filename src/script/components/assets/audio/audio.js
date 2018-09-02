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

// ----------------------------------------------------

Vue.component('audio-container', {
    template:
    `
    <audio
        v-bind:controls="controls"
        v-bind:crossOrigin="crossOrigin"
        v-bind:loop="loop"
        v-bind:muted="muted"
        v-bind:autoplay="autoplay"
        v-bind:preload="preload"
        v-bind:id="id"
        v-bind:title="title"
    >
        <slot></slot>
    </audio>
    `,
    props: {
        controls: Boolean,
        crossOrigin: String,
        loop: Boolean,
        muted: Boolean,
        autoplay: Boolean,
        preload: String,
        id: String,
        title: String
    }
})

var audios = new Vue({
    el: "#app"
})