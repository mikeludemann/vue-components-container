Vue.component('youtube-video', {
    props: {
        videoid: String,
        width: String,
        height: String
    },
    methods: {
        insertExternalSource: function () {

            var video = document.getElementById("youtube");
            video.setAttribute("src", "https://www.youtube.com/embed/" + this.videoid);

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