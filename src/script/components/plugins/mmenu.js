Vue.component('mmenu', {
    props: {
        options: String,
        version: String,
        id: String
    },
    methods: {
        insertExternalSource: function () {

            /*var jq = document.createElement("script");

            jq.setAttribute("src", "https://code.jquery.com/jquery-3.3.1.min.js");

            document.getElementsByTagName("head").item(0).appendChild(jq);*/

            var script = document.createElement("script");

            script.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/" + this.version + "/jquery.mmenu.all.js");

            document.getElementsByTagName("head").item(0).appendChild(script);

            var link = document.createElement("link");

            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/" + this.version + "/jquery.mmenu.all.css");

            document.getElementsByTagName("head").item(0).appendChild(link);

            var mmenu_options = document.createElement("script");

            if (typeof this.options === "undefined") {
                this.options = "";
            }

            mmenu_options.innerHTML = 'jQuery(document).ready(function( $ ) { $("#' + this.id + '").mmenu(' + this.options + '); });';

            document.getElementsByTagName("head").item(0).appendChild(mmenu_options);

        }
    },
    mounted: function () {
        this.insertExternalSource();
    },
    template:
    `
    <nav :id="id">
        <slot></slot>
    </nav>
    `
})