Vue.component('modal-image', {
	props: {
		id: String,
		url: String,
		alttext: String
	},
    methods: {
        main: function() {

            let modal = document.getElementById('modal-image-container');
            let body = document.getElementsByTagName('body')[0];

            let container = document.getElementById(this.id);
            let close = document.getElementById("close");

            container.onclick = function(){

                modal.style.display = "block";
                body.style.overflow = 'hidden';
                modal.children[1].src = this.children[0].src;
                modal.children[2].innerHTML = this.children[0].alt;

            }

            close.onclick = function() { 

                modal.style.display = "none";
                body.style.overflow = '';

            }

            var dw = document || window;

            dw.onclick = function (event) {

                if (event.target == modal) {

                    modal.style.display = "none";
                    body.style.overflow = '';

                }

            }

        }
    },
    mounted: function () {
        this.main();
    },
    template:
    `
    <transition>
        <div class="main-container">
            <div :id="id" class="main-container">
                <img :src="url" :alt="alttext">
            </div>
            <div id="modal-image-container" class="modal">
                <span id="close" class="modal-close">&times;</span>
                <img class="modal-content">
                <div class="modal-text"></div>
            </div>
        </div>
    </transition>
    `
})
