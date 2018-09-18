Vue.component('twitter', {
    props: {
        twitterid: String,
        format: String
    },
    methods: {
        insertExternalSource: function () {

            var js = document.createElement("script");
            js.setAttribute("src", "https://platform.twitter.com/widgets.js");
            js.setAttribute("async", "true");
            js.setAttribute("charset", "utf-8");
            document.getElementsByTagName("head").item(0).appendChild(js);

            var tweet = document.getElementById("tweets");
            tweet.setAttribute("href", "http://twitter.com/" + this.twitterid);
            tweet.setAttribute("class", "twitter-" + this.format);

        }
    },
    mounted: function () {

        this.insertExternalSource();

    },
    template: '<a id="tweets"> Tweets by {{this.twitterid}} </a>'
})

/**
 * Informations
 * 
 * Props:
 * 
 * twitterid: Username
 * format: "grid" or "timeline"
 */