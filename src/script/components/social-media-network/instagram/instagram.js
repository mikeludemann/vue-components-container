Vue.component('instagram', {
    props: {
        postid: String
    },
    methods: {
        insertExternalSource: function () {

            var js = document.createElement("script");
            js.setAttribute("src", "https://www.instagram.com/embed.js");
            js.setAttribute("async", "true");
            js.setAttribute("defer", "true");
            document.getElementsByTagName("head").item(0).appendChild(js);

            var bq = document.getElementsByClassName("instagram-media").item(0);
            bq.setAttribute("data-instgrm-permalink", "https://www.instagram.com/p/" + this.postid);

        }
    },
    mounted: function () {
        
        this.insertExternalSource();

    },
    template: '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="9" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>'
})