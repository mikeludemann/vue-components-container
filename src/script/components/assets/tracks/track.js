Vue.component('track-list', {
    props: ['tracks'],
    template: "#tracks"
})

var tracks = new Vue({
    el: "#selectTrack",
    data: {
        tracks: [
            { url: "xxx.vtt", kind: "subtitles", srclang: "de", label: "German" },
            { url: "yyy.vtt", kind: "subtitles", srclang: "en", label: "English" }
        ]
    }
});