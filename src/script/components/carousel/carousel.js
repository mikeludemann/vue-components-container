Vue.component('carousel', {
	props: {},
	data() {
		return {
      isHover: false,
      viewport: {}
		}
	},
	computed:{
		container: function(){
			return {
				maxWidth: "100%",
				position: "relative",
				margin: "auto"
			}
		},
		next: function(){
			return {
				cursor: "pointer",
				position: "absolute",
				top: "50%",
				width: "auto",
				padding: "16px",
				marginTop: "-22px",
				color: "#fff",
				fontWeight: "bold",
				fontSize: "12px",
				transition: "1s ease-in-out",
				borderRadius: "0 3px 3px 0",
				userSelect: "none",
				right: "0",
				borderRadius: "3px 0 0 3px",
				backgroundColor: this.isHover ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0)'
			}
		},
		prev: function(){
			return {
				cursor: "pointer",
				position: "absolute",
				top: "50%",
				width: "auto",
				padding: "16px",
				marginTop: "-22px",
				color: "#fff",
				fontWeight: "bold",
				fontSize: "12px",
				transition: "1s ease-in-out",
				borderRadius: "0 3px 3px 0",
				userSelect: "none",
				backgroundColor: this.isHover ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0)'
			}
		}
	},
	methods: {
		isVisible(status) {
			this.isHover = status;
		},
		insertExternalSource: function () {

      function resizeViewport(){

        this.viewport({

          width: document.documentElement.clientWidth || document.body.clientWidth,
          height: document.documentElement.clientHeight || document.body.clientHeight

        });

      }

			window.addEventListener('resize', resizeViewport);

			var defaultIndex = 1;
			var prev = document.getElementById("prev");
			var next = document.getElementById("next");

			function slider(n) {

				var i,
				slides = document.getElementsByClassName("slider--element");

				if (n > slides.length) {

					defaultIndex = 1;

				} 

				if (n < 1) {

					defaultIndex = slides.length;

				}

				for (i = 0; i < slides.length; i++) {

					slides[i].style.display = "none"; 

				}

				slides[defaultIndex-1].style.display = "block"; 

			}

			slider(defaultIndex);

			prev.addEventListener("click", function(){

        slider(defaultIndex -= 1);
        
			});

			next.addEventListener("click", function(){

        slider(defaultIndex += 1);
        
      });
      
      window.removeEventListener('resize', resizeViewport);

		}
	},
	mounted: function () {
		this.insertExternalSource();
	},
  template: 
  `
    <div v-bind:class="container--slider" v-bind:style="container">
      <slot></slot>
      <a v-bind:id="prev" v-bind:style="prev" @mouseover="isVisible(true)" @mouseleave="isVisible(false)">&#10094;</a>
      <a v-bind:id="next" v-bind:style="next" @mouseover="isVisible(true)" @mouseleave="isVisible(false)">&#10095;</a>
    </div>
  `
})
