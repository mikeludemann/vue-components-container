Vue.component('scroll-indicator', {
	props: {
		height: String,
		color: String,
		bgcolor: String
	},
	methods: {
		insertExternalSource: function () {

			window.onscroll = function() {
				processScrollIndicator()
			};

			function processScrollIndicator() {
				var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
				var documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
				var scrollPosition = (windowScroll / documentHeight) * 100;
				document.getElementById("scrollIndicator").style.width = scrollPosition + "%";
			}

		}
	},
	mounted: function () {

		this.insertExternalSource();

	},
	computed: {
        main: function(){
            return {
                position: 'fixed',
                top: 0,
                zIndex: 1,
                width: '100%',
                backgroundColor: '#f1f1f1'
            }
		},
        container: function () {
            return {
                background: this.bgcolor,
                height: this.height + "px",
                width: '100%'
            }
        },
        scrollColor: function () {
            return {
                background: this.color,
                height: this.height + "px",
                width: '0%'
            }
        },
    },
    template:
    `
    <div class="scroll--indicator--container" :style="main">
        <div class="scroll--indicator--background" :style="container">
            <div class="scroll--indicator--progressbar" id="scrollIndicator" :style="scrollColor"></div>
        </div> 
    </div>
    `
})