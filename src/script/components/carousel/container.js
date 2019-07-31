Vue.component('container', {
	computed:{
		sliderElement: function(){
			return {
				display: "none"
			}
		}
	},
	methods: {
		insertExternalSource: function () {

			var style = document.createElement('style');

			style.type = 'text/css';

			let styling = 
			`
			@keyframes fade{
				from {
					opacity: 0.4
				} 
				to {
					opacity: 1
				}
			}

			.fading{
				animation: "fade 1s"
			}
			`

			style.innerHTML = styling;
			document.getElementsByTagName('head')[0].appendChild(style);

    }
  },
	mounted: function () {
		this.insertExternalSource();
	},
  template: 
  `
    <div v-bind:class="slider--element fading" v-bind:style="sliderElement">
      <slot></slot>
    </div>
  `
})
