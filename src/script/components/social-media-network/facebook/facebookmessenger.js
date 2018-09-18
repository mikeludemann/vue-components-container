Vue.component('facebook-messenger', {
    props: {
        username: String,
        text: String
    },
    methods: {
        insertExternalSource: function () {

            var link = document.createElement("link");

            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "https://use.fontawesome.com/releases/v5.2.0/css/all.css");
            link.setAttribute("crossorigin", "anonymous");
            link.setAttribute("integrity", "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ");

            document.getElementsByTagName("head").item(0).appendChild(link);

            var user = document.getElementById("username");
            user.setAttribute("href", "https://m.me/" + this.username);

        }
    },
    mounted: function () {

        this.insertExternalSource();

    },
    template:
    `
    <div id="facebookMessenger">
        <a id="username" target="_blank">
            <div>
                <i class="fab fa-facebook-messenger fa-2x">{{this.text}}</i>
            </div>
        </a>
    </div>
    `
})