Vue.component('image', {
    props: {
        id: String,
        class: String,
        url: String,
        alt: String,
        width: String,
        height: String,
        mapname: String
    },
    template: `
    <img
    	v-bind:id="id"
    	v-bind:class="class"
    	v-bind:src="url"
    	v-bind:alt="alt"
    	v-bind:width="width"
    	v-bind:height="height"
    	v-bind:usemap="mapname"
    />
    `
})