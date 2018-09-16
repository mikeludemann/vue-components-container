Vue.component('fw-icon', {
    props: {
        icon: String
    },
    methods: {
        insertExternalSource: function () {

            var link = document.createElement("link");

            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "https://use.fontawesome.com/releases/v5.2.0/css/all.css");
            link.setAttribute("crossorigin", "anonymous");
            link.setAttribute("integrity", "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ");

            document.getElementsByTagName("head").item(0).appendChild(link);

        }
    },
    mounted: function () {
        this.insertExternalSource();
    },
    template: '<i v-bind:class="icon"></i>'
})