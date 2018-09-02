Vue.component('links', {
    props: {
        id: String,
        class: String,
        href: String,
        hreflang: String,
        media: String,
        ping: String,
        rev: String,
        target: String,
        type: String,
        downloadname: String
    },
    template: `
    <a
    	v-bind:id="id"
    	v-bind:class="class"
    	v-bind:href="href"
    	v-bind:hreflang="hreflang"
    	v-bind:media="media"
    	v-bind:ping="ping"
    	v-bind:rev="rev"
    	v-bind:target="target"
    	v-bind:type="type"
    	v-bind:download="downloadname"
    >
        <slot></slot>
    </a>
    `
})

// ----------------------------------------------------

Vue.component('download-link', {
    props: {
        id: String,
        class: String,
        href: String,
        downloadname: String
    },
    template: `
    <a
    	v-bind:id="id"
    	v-bind:class="class"
    	v-bind:href="href"
    	v-bind:download="downloadname"
    >
        <slot></slot>
    </a>
    `
})