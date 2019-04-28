Vue.component('accordion', {
	props: {
		headline: String,
		text: String
	},
	data() {
		return{
			isOpen: false
		};
	},
	computed: {
		containerAccordion: function() {
			return {
				transition: "0.4s"
			};
		},
		accordionHeadline: function() {
			return {
				backgroundColor: "#eee",
				color: "#444",
				cursor: "pointer",
				padding: "20px",
				width: "100%",
				border: "none",
				textAlign: "left",
				outline: "none",
				fontSize: "15px",
				transition: "1s"
			};
		},
		accordionPanel: function() {
			return {
				padding: "10px",
				backgroundColor: "white",
				display: "none",
				overflow: "hidden",
				transition: "max-height 0.5s ease-out",
				border: "0.5px solid #000",
				borderTop: "0px solid #000"
			};
		}
	},
	methods: {
		insertExternalSource: function () {

			var acc = document.getElementsByClassName("accordion--headline");
			var i;

			for (i = 0; i < acc.length; i++) {

				acc[i].addEventListener("click", function () {

					var panel = this.nextElementSibling;

					if (this.isOpen == true) {
						panel.style.display = "none";
					} else {
						panel.style.display = "block";
					}

					/*if (panel.style.display === "block") {
						panel.style.display = "none";
					} else {
						panel.style.display = "block";
					}*/

				});

			}

		},
		toggleAccordion: function() {
			this.isOpen = !this.isOpen;
		}
		/*,
		beforeEnter: function(el) {
			el.style.height = '0';
		},
		enter: function(el) {
			el.style.height = el.scrollHeight + 'px';
		},
		beforeLeave: function(el) {
			el.style.height = el.scrollHeight + 'px';
		},
		leave: function(el) {
			el.style.height = '0';
		}*/
	},
	mounted: function () {
		this.insertExternalSource();
	},
	template: 
	`
		<div class="container--accordion" :style="containerAccordion">
			<div class="accordion--headline" :style="accordionHeadline" v-on:click="toggleAccordion">
				{{this.headline}}
			</div>
			<!-- v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:before-leave="beforeLeave" v-on:leave="leave" -->
			<transition name="accordion">
				<div class="accordion--panel" :style="accordionPanel" v-show="isOpen">
				{{this.text}}
				</div>
			</transition>
		</div>
	`
})
