Vue.component('heads', {
    template: `
    <head>
        <slot></slot>
    </head>
    `
})

// ----------------------------------------------------

Vue.component('bases', {
    props: {
        url: String,
        target: String
    },
    template: `
    <base
        v-bind:src="url"
        v-bind:target="target"
    />
    `
})

// ----------------------------------------------------

Vue.component('base-font', {
    props: {
        color: String,
        fontfamily: String,
        size: String
    },
    template: `
    <basefont
        v-bind:color="color"
        v-bind:face="fontfamily"
        v-bind:size="size"
    />
    `
})

// ----------------------------------------------------

Vue.component('link-css', {
    props: {
        href: String,
        rel: String,
        hreflang: String,
        sizes: String,
        title: String,
        type: String,
        target: String,
        rev: String,
        media: String,
        crossorigin: String
    },
    template: `
    <link
        v-bind:href="href"
        v-bind:rel="rel"
        v-bind:hreflang="hreflang"
        v-bind:sizes="sizes"
        v-bind:title="title"
        v-bind:type="type"
        v-bind:target="target"
        v-bind:rev="rev"
        v-bind:media="media"
        v-bind:crossorigin="crossorigin"
    />
    `
})

// ----------------------------------------------------

Vue.component('metas', {
    props: {
        name: String,
        content: String,
        charset: String,
        itemprop: String,
        httpsequiv: String,
        property: String
    },
    template: `
    <meta
        v-bind:name="name"
        v-bind:content="content"
        v-bind:charset="charset"
        v-bind:itemprop="itemprop"
        v-bind:https-equiv="httpsequiv"
        v-bind:property="property"
    />
    `
})

// ----------------------------------------------------

Vue.component('titles', {
    props: {
        text: String
    },
    template: `
    <title>
        {{text}}
    </title>
    `
})

// ----------------------------------------------------

Vue.component('scripts', {
    props: {
        src: String,
        async: Boolean,
        defer: Boolean,
        type: String,
        charset: String
    },
    template: `
    <script
        v-bind:src="src"
        v-bind:async="async"
        v-bind:defer="defer"
        v-bind:charset="charset"
        v-bind:type="type"
    >
    </script>
    `
})

// ----------------------------------------------------

Vue.component('noscripts', {
    template: `
    <noscript>
        <slot></slot>
    </noscript>
    `
})