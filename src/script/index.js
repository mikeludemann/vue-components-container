var Title = new Vue({
    el: '#title',
    data: {
        title: "Vue Tutorial and Learning",
        visible: true,
    }
});

var Alert = new Vue({
    el: "#root",
    methods: {
        handleAlert: function(){
            alert("Test");
        }
    }
});