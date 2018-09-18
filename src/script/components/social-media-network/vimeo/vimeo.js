Vue.component('vimeo', {
    props: {
        videoid: String,
        width: String,
        height: String
    },
    methods: {
        insertExternalSource: function () {
            
            var video = document.getElementById("vimeo");
            video.setAttribute("src", "https://player.vimeo.com/video/" + this.videoid);

        }
    },
    mounted: function () {

        this.insertExternalSource();

    },
    template:
    `
    <iframe id="vimeo" :width="width" :height="height" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
    </iframe>
    `
})