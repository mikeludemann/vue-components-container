Vue.component('material-icon', {
    props: {
        icon: String
    },
    methods: {
        insertExternalSource: function () {

            var link = document.createElement("link");

            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "https://fonts.googleapis.com/icon?family=Material+Icons");

            document.getElementsByTagName("head").item(0).appendChild(link);

        }
    },
    mounted: function () {
        this.insertExternalSource();
    },
    template: '<i class="material-icons">{{this.icon}}</i>'
})