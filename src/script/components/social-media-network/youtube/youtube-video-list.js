Vue.component('youtube-video', {
    props: {
        videolistid: String,
        width: String,
        height: String
    },
    methods: {
        insertExternalSource: function () {

            var video = document.getElementById("youtube");
            video.setAttribute("src", "https://www.youtube.com/embed/videoseries?list=" + this.videolistid);

        }
    },
    mounted: function () {

        this.insertExternalSource();

    },
    template:
    `
    <iframe id="youtube" :width="width" :height="height" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
    </iframe>
    `
})