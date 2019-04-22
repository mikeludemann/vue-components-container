Vue.component('cookie-banner', {
	props: {
		days: Number,
		cookiename: String,
		cookievalue: String,
		message: String,
		dataSecurityLink: String,
		position: String,
		color: String,
		bgcolor: String
	},
	computed: {
		cookielaw: function (){
			return {
				width: "100%",
				background: this.bgcolor || "#000",
				margin: "0px auto",
				borderRadius: "0px",
				webkitBorderRradius: "0px",
				mozBorderRadius: "0px",
				position: "absolute",
				padding: "5px"
			}
		},
		cookietext: function (){
			return {
				padding: "10px",
				fontSize: "1.1em",
				textAlign: "left",
				color: this.color || "#fff",
				margin: "0"
			}
		},
		information: function (){
			return {
				margin: "10px",
				width: "100%"
			}
		},
		datasecurity: function (){
			return {
				padding: "10px"
			}
		},
		accept: function (){
			return {
				maxWidth: "100px"
			}
		},
		button: function (){
			return {
				padding: "10px",
				backgroundColor: this.color || "#fff",
				color: this.bgcolor || "#000",
				border: "1px solid #000"
			}
		},
		link: function (){
			return {
				color: this.color || "#fff"
			}
		}
	},
	methods: {
		insertExternalSource: function () {
			var style = document.createElement('style');
			style.type = 'text/css';

			let styling =
			` 
			@media only screen and (max-width: 768px) {
				.context, .information {
					width: 100%;
				}
			}

			@media only screen and (min-width: 768px) {
				.context {
					width: 88%;
				}

				.information {
					width: 11%;
					float: right;
					margin-top: -42px;
				}
			}
			`

			style.innerHTML = styling;
			document.getElementsByTagName('head')[0].appendChild(style);
		},
	},
	mounted: function () {
		this.insertExternalSource();

		dropCookie = true;
		cookieDuration = this.days || 365;
		cookieName = this.cookiename;
		cookieValue = this.cookievalue;
		cookieMessage = this.message || "Wir verwenden Cookies. Bei den Besuch und weiteren Verlauf der Webseite akzeptieren Sie die Berechtigung und Nutzung der Cookies.";
		dataPolicyLink = this.dataSecurityLink || "#";
		var expires;

		document.getElementById("close-cookie-banner").addEventListener("click",function(){
			acceptCookie();
		});

		document.getElementById("message").innerHTML = cookieMessage;
		document.getElementById("data-link").setAttribute("href", dataPolicyLink);

		if(this.position == "top"){
			document.getElementById("cookie-law").style.top = "0";
		} else if(this.position == "bottom"){
			document.getElementById("cookie-law").style.bottom = "0";
		} else {
			document.getElementById("cookie-law").style.top = "0";
		}

		function createCookie(name,value,days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000)); 
				expires = "; expires="+date.toGMTString(); 
			}
			else {
				expires = "";
			}
			if(window.dropCookie) { 
				document.cookie = name+"="+value+expires+"; path=/"; 
			}
		}

		function createCookieBanner(){
			var main = document.getElementsByTagName('body')[0];
			var cid = document.getElementById('cookie-law');

			main.insertBefore(cid,main.firstChild);

			document.getElementsByTagName('body')[0].className+=' cookiebanner';

			createCookie(window.cookieName,window.cookieValue, window.cookieDuration);
		}

		function checkCookie(name) {
			var validator = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(validator) == 0) return c.substring(validator.length,c.length);
			}
			return null;
		}

		function eraseCookie(name) {
			createCookie(name,"",-1);
		}

		window.onload = function(){
			if(checkCookie(window.cookieName) != window.cookieValue){
				createCookieBanner(); 
			} else {
				console.log(window.cookieName + " - " + window.cookieValue);
			}
		}

		function acceptCookie(){
			var element = document.getElementById('cookie-law');
			element.parentNode.removeChild(element);
		}

	},
	template: '<div id="cookie-law" :style="cookielaw"><div class="context"><span id="message" :style="cookietext"></span><span class="datasecurity" :style="datasecurity"><a id="data-link" :style="link" rel="nofollow" title="Datenschutzerklärung">Datenschutzerklärung</a></span></div><div class="information" :style="information"><div class="accept" :style="accept"><a id="close-cookie-banner" href="javascript:void(0);"><div class="button" :style="button">Akzeptieren</div></a></div></div></div>'
})
