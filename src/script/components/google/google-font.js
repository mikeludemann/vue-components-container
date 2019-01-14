Vue.component('google-font', {
    props: {
        font: String
    },
    methods: {
        insertExternalSource: function () {

            var link = document.createElement("link");

            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "https://fonts.googleapis.com/css?family=" + this.font);

            document.getElementsByTagName("head").item(0).appendChild(link);
        }
    },
    mounted: function () {
        this.insertExternalSource();
    }
})