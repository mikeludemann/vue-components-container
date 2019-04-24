Vue.component('custom-alert', {
	props: {
		position: String,
		type: String,
		text: String
	},
	methods: {
		insertExternalSource: function () {

			var link = document.createElement("link");

			link.setAttribute("rel", "stylesheet");
			link.setAttribute("href", "https://use.fontawesome.com/releases/v5.8.1/css/all.css");
			link.setAttribute("crossorigin", "anonymous");
			link.setAttribute("integrity", "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf");

			document.getElementsByTagName("head").item(0).appendChild(link);

			var style = document.createElement('style');
			style.type = 'text/css';

			let styling =
			` 
			.alert {
				padding: 15px 0px 15px 15px;
				background-color: #fff;
				color: #000;
				opacity: 1;
				transition: opacity 0.6s;
				max-width: 400px;
				min-width: 250px;
				max-height: auto;
				left: 50%;
				display: table;
				position: absolute;
				border: 0.25px solid #000;
			}

			.closebtn {
				margin-left: 15px;
				color: white;
				font-weight: bold;
				float: right;
				font-size: 22px;
				line-height: 50%;
				cursor: pointer;
				transition: 0.3s;
			}

			.closebtn:hover {
				color: white;
			}

			.alert > .alert--container > .close > .closebtn,
			.alert > .alert--container > .close > .closebtn:hover {
				color: #000;
			}

			.alert.info {
				background-color: #2196F3;
				color: #fff;
			}

			.alert.success {
				background-color: #4CAF50;
				color: #fff;
			}

			.alert.warning {
				background-color: #ff9800;
				color: #fff;
			}

			.alert.danger {
				background-color: #f44336;
				color: #fff;
			}

			.alert.info > .alert--container > .close > .closebtn,
			.alert.info > .alert--container > .close > .closebtn:hover,
			.alert.success > .alert--container > .close > .closebtn,
			.alert.success > .alert--container > .close > .closebtn:hover,
			.alert.warning > .alert--container > .close > .closebtn,
			.alert.warning > .alert--container > .close > .closebtn:hover,
			.alert.danger > .alert--container > .close > .closebtn,
			.alert.danger > .alert--container > .close > .closebtn:hover {
				color: #fff;
			}

			.alert--container {
				display: table-row;
			}

			.alert--container > div {
				display: table-cell;
			}

			.icon {
				width: 5%;
				top: 30%;
				position: absolute;
			}

			.context {
				width: 80%;
				padding-left: 20px;
			}

			.close {
				width: 5%;
				top: 35%;
				right: 2.5%;
				position: absolute;
			}
			`

			style.innerHTML = styling;
			document.getElementsByTagName('head')[0].appendChild(style);

		},
		alertLogic: function(){

			var mainAlert = document.getElementById("alert--custom");
			var headline = document.getElementById("headline");
			var contentText = document.getElementById("text");
			var icon = document.getElementsByClassName("icon")[0];
			var close = document.getElementsByClassName("close")[0];

			if(this.position == "bottom"){

				mainAlert.style.bottom = "0%";
				mainAlert.style.transform = "translate(-50%, 0%)";

			} else if(this.position == "top"){

				mainAlert.style.top = "0%";
				mainAlert.style.transform = "translate(-50%, 0%)";

			} else if(this.position == "middle"){

				mainAlert.style.top = "50%";
				mainAlert.style.transform = "translate(-50%, -50%)";

			}

			if(this.type == "success"){

				mainAlert.className += " success";
				headline.innerHTML = "Success!";
				contentText.innerHTML = this.text || "Indicates a successful or positive action.";
				icon.children[0].className += " fa-check-circle";

			} else if(this.type == "warning"){

				mainAlert.className += " warning";
				headline.innerHTML = "Warning!";
				contentText.innerHTML = this.text || "Indicates a warning that might need attention.";
				icon.children[0].className += " fa-exclamation-triangle";

			} else if(this.type == "info"){

				mainAlert.className += " info";
				headline.innerHTML = "Info!";
				contentText.innerHTML = this.text || "Indicates a neutral informative change or action.";
				icon.children[0].className += " fa-info-circle";

			} else if(this.type == "danger"){

				mainAlert.className += " danger";
				headline.innerHTML = "Danger!";
				contentText.innerHTML = this.text || "Indicates a dangerous or potentially negative action.";
				icon.children[0].className += " fa-exclamation-circle";

			} else if(this.type == "default"){

				mainAlert.className += "";
				headline.innerHTML = "Default!";
				contentText.innerHTML = this.text || "Indicates a default action.";
				icon.children[0].className += " fa-info-circle";

			} else {

				mainAlert.className += "";
				headline.innerHTML = "Default!";
				contentText.innerHTML = this.text || "Indicates a default action.";
				icon.children[0].className += " fa-info-circle";

			}

			close.addEventListener("click", function(){
				var div = this.parentElement.parentElement;
				div.style.opacity = "0";
				setTimeout(function(){ 
					div.style.display = "none"; 
				}, 600);
			})

		}
	},
	mounted: function () {
		this.insertExternalSource();
		this.alertLogic();
	},
	template: 
	`
	<div id="alert--custom" class="alert">
		<div class="alert--container">
			<div class="icon">
				<i class="fa-2x fas"></i>
			</div> 
			<div class="context">
				<strong id="headline"></strong><br/>
				<span id="text"></span>
			</div>
			<div class="close">
				<span class="closebtn"><i class="fas fa-times fa-lg"></i></span>
			</div>
		</div>
	</div>
	`
})
