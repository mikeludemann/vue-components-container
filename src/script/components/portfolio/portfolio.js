Vue.component('portfolio', {
	props: {
		url: String,
		alttext: String,
		headline: String,
		text: String,
		name: String,
		year: String
	},
	computed: {

		content: function() {
			return {
				backgroundColor: 'white',
				border: '0.5px solid #000',
			}
        },

		info: function() {
			return {
				padding: '15px 10px',
            }
        },

		image: function() {
			return {
				width: '100%',
                /* opacity: 1; */
            }
        },

		headlineStyle: function() {
			return {
				fontSize: '24px',
                paddingBottom: '10px',
            }
        },

		block: function() {
			return {
                padding: '10px 0px',
            }
        }
    },
    template:
    `
    <div class="content" :style="content">
        <img v-bind:src="url" v-bind:alt="alttext" :style="image"/>
        <div class="info" :style="info">
            <h1 :style="headlineStyle">{{this.headline}}</h1>
            <p class="block" :style="block">{{this.text}}</p>
            <p class="block" :style="block">&copy; {{this.name}} - {{this.year}}</p>
        </div>
    </div>
    `
})
