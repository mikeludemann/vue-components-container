Vue.component('map-image', {
    props: {
        name: String
    },
    template: `
    <map
    	v-bind:name="name"
    >
        <slot></slot>
    </map>
    `
})

// ----------------------------------------------------

Vue.component('map-area', {
    props: {
        format: String,
        coordination: String,
        url: String,
        alttext: String
    },
    template: `
    <area
    	v-bind:shape="format"
    	v-bind:coords="coordination"
    	v-bind:src="url"
    	v-bind:alt="alttext"
    />
    `
})