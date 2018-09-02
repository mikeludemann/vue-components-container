Vue.component('source-list', {
    props: ['sources'],
    template: "#selection"
})

var sources = new Vue({
    el: "#selectSource",
    data: {
        sources: {
            "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4": "video/mp4",
            "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp3": "video/mp3"
        }
    }
});

// ----------------------------------------------------

Vue.component('sources', {
    props: {
        url: String,
        urlset: String,
        media: String,
        size: String,
        type: String
    },
    template: 
    `
    <source
        v-bind:src="url"
        v-bind:srcset="urlset"
        v-bind:media="media"
        v-bind:sizes="size"
        v-bind:type="type"
    />
    `
})