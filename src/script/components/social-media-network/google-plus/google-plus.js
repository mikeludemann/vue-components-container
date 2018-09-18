Vue.component('google-plus', {
    props: {
        google_plus_id: String,
        postid: String
    },
    methods: {
        insertExternalSource: function () {

            var link = document.createElement("link");

            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "https://use.fontawesome.com/releases/v5.2.0/css/all.css");
            link.setAttribute("crossorigin", "anonymous");
            link.setAttribute("integrity", "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ");

            document.getElementsByTagName("head").item(0).appendChild(link);

            var user = document.getElementsByClassName("g-post")[0];
            user.setAttribute("data-href", "https://plus.google.com/" + this.google_plus_id + "/posts/" + this.postid);

        }
    },
    mounted: function () {

        this.insertExternalSource();

    },
    template: '<div class="g-post"></div>'
})