Vue.component('loading-spinner', {
    props: {
        id: {
            type: String,
            required: true
        },
        className: {
            type: String,
            required: false
        },
        text: {
            type: String,
            required: false
        },
        size: {
            type: String,
            required: true
        },
        bgcolor: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        speed: {
            type: String,
            required: true
        }
    },
    computed: {
        main: function () {
            return {
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: (-1 * (this.size / 2)) + 'px',
                marginLeft: (-1 * (this.size / 2)) + 'px'
            };
        },
        defaultelement: function () {
            return {
                width: this.size + 'px',
                height: this.size + 'px',
                border: '5px solid ' + this.bgcolor,
                borderRadius: '50%',
                borderTop: '5px solid ' + this.color,
                webkitAnimation: 'spin ' + this.speed + ' linear infinite',
                animation: 'spin ' + this.speed + ' linear infinite'
            };
        },
        textcontent: function () {
            return {
                paddingTop: '10px',
                textAlign: 'center',
                marginLeft: '-5px'
            };
        }
    },
    methods: {
        insertExternalSource: function () {

            var style = document.createElement('style');
            style.type = 'text/css';

            let keyframes =
                `
            @-webkit-keyframes spin {
              0% { -webkit-transform: rotate(0deg); }
              100% { -webkit-transform: rotate(360deg); }
            }

            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            `
            style.innerHTML = keyframes;
            document.getElementsByTagName('head')[0].appendChild(style);

        }
    },
    mounted: function () {
        this.insertExternalSource();
    },
    template:
    `
    <div :id="id" :style="main">
        <div :class="className" :style="defaultelement"></div>
        <div class="text" :style="textcontent">{{text}}</div>
    </div>
    `
})