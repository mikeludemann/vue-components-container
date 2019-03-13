Vue.component('flipcard', {
	props: {
		rotation: String,
		eventaction: String,
		width: String,
		height: String,
		frontcolor: String,
		frontbgcolor: String,
		backcolor: String,
		backbgcolor: String
	},
    methods: {
        main: function() {

            var main = document.querySelector('.container');
            var element = document.querySelector('.container__sub');

            if(this.rotation == "vertical"){

                if(this.eventaction == "hover"){

                    main.addEventListener('mouseover', function () {

                        element.classList.toggle('flip__vertical');
                        main.children[0].children[1].style.transform = "rotateX(180deg)";

                    });

                } else if(this.eventaction == "click"){

                    main.addEventListener('click', function () {

                        element.classList.toggle('flip__vertical');
                        main.children[0].children[1].style.transform = "rotateX(180deg)";

                    });

                }

            } else if (this.rotation == "horizontal"){

                if(this.eventaction == "hover"){

                    main.addEventListener('mouseover', function () {

                        element.classList.toggle('flip__horizontal');
                        main.children[0].children[1].style.transform = "rotateY(-180deg)";

                    });

                } else if(this.eventaction == "click"){

                    main.addEventListener('click', function () {

                        element.classList.toggle('flip__horizontal');
                        main.children[0].children[1].style.transform = "rotateY(-180deg)";

                    });

                }

            }


			var style = document.createElement('style');
			style.type = 'text/css';

			let styling =
            ` 
            .container {
                border: 1px solid #CCC;
                margin: 10px;
                perspective: 600px;
            }

            .container__sub {
                position: relative;
                width: 100%;
                height: 100%;
                cursor: pointer;
                transform-style: preserve-3d;
                transform-origin: center right;
                transition: transform 0.5s;
            }

            .container__sub.flip__vertical {
                transform: translateY(0%) rotateX(-180deg);
            }

            .container__sub.flip__horizontal {
                transform: translateX(-100%) rotateY(180deg);
            }

            .container__sub__face {
                position: absolute;
                width: 100%;
                height: 100%;
                text-align: center;
                font-weight: bold;
                font-size: 40px;
                backface-visibility: hidden;
            }
            `

            style.innerHTML = styling;
            document.getElementsByTagName('head')[0].appendChild(style);

        }
	},
	mounted: function () {
		this.main();
	},
	computed: {
		container: function() {
			return {
				width: this.width + "px",
				height: this.height + "px",
			};
        },
		container__sub__face__frontside: function() {
			return {
				background: this.frontbgcolor || "#fff",
				color: this.frontcolor || "#000",
			};
        },
		container__sub__face__backside: function() {
			return {
				background: this.backbgcolor || "#fff",
				color: this.backcolor || "#000",
			};
        }
	},
	template:
	`
	<div class="container" :style="container">
		<div class="container__sub">
			<div class="container__sub__face container__sub__face--frontside" :style="container__sub__face__frontside">
				<slot name="frontside">Default Frontside</slot>
			</div>
			<div class="container__sub__face container__sub__face--backside" :style="container__sub__face__backside">
				<slot name="backside">Default Backside</slot>
			</div>
		</div>
    </div>
	`
})
