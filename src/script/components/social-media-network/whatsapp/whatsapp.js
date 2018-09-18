Vue.component('whatsapp', {
    props: {
        telephone: String,
        text: String,
        source: String,
        data: String,
        defaulttext: String
    },
    methods: {
        insertExternalSource: function () {

            var link = document.createElement("link");

            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "https://use.fontawesome.com/releases/v5.2.0/css/all.css");
            link.setAttribute("crossorigin", "anonymous");
            link.setAttribute("integrity", "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ");

            document.getElementsByTagName("head").item(0).appendChild(link);

            var elem = document.getElementById("content");
            elem.setAttribute("href", "https://api.whatsapp.com/send?phone=" + this.telephone + "&text=" + this.text + "&source=" + this.source + "&data=" + this.data);

        }
    },
    mounted: function () {

        this.insertExternalSource();

    },
    template:
        `
    <div id="whatsapp">
        <a id="content" target="_blank">
            <div>
                <i class="fab fa-whatsapp fa-2x">{{this.defaulttext}}</i>
            </div>
        </a>
    </div>
    `
})