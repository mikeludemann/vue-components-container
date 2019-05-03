Vue.component('profile', {
	props: {
		firstname: {
			type: String,
			required: true
		},
		lastname: {
			type: String,
			required: true
		},
		imageurl: {
			type: String,
			required: true
		},
		imagetext: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: false
		},
		jobtitle: {
			type: String,
			required: false
		},
		employer: {
			type: String,
			required: false
		}
	},
	data() {
		return {
			isHover: false
		};
	},
	computed: {
		container: function(){
			return {
				margin: "10px 0px"
			}
		},
		image: function () {
			return {
				width: "100%"
			};
		},
		link: function () {
			return {
				color: "#fff",
				textDecoration: "none"
			};
		},
		title: function () {
			return {
				color: "#999",
				fontSize: "18px"
			};
		},
		card: function () {
			return {
				boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
				maxWidth: "300px",
				margin: "auto",
				textAlign: "center",
				position: "relative"
			};
		},
		button: function () {
			return {
				border: "none",
				outline: "0",
				display: "inline-block",
				padding: "10px 0px",
				color: "#fff",
				backgroundColor: "#000",
				textAlign: "center",
				cursor: "pointer",
				width: "100%",
				fontSize: "18px",
				opacity: this.isHover ? '0.7' : '1.0',
				transition: "all 1s ease-in-out"
			};
		}
	},
	methods: {
		animate(status) {
			this.isHover = status;
		}
	},
	template:
	`
	<div class="card--profile" :style="card">
		<div class="image--profile" :style="container">
			<img :src="imageurl" :alt="imagetext" :style="image">
		</div>
		<div class="fullname--profile" :style="container">
			<h1>{{this.firstname + " " + this.lastname}}</h1>
		</div>
		<div class="jobtitle--profile" :style="container">
			<p class="title" :style="title">{{this.jobtitle}}</p>
		</div>
		<div class="employer--profile" :style="container">
			<p>{{this.employer}}</p>
		</div>
		<div class="contact--profile" @mouseover="animate(true)" @mouseleave="animate(false)">
			<div :style="button">
				<a :href="'mailto:' + email" :style="link">Contact</a>
			</div>
		</div>
	</div>
	`
})
