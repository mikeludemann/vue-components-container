Vue.component('bold', {
    props: ['text'],
    template: '<b>{{text}}</b>'
})

// ----------------------------------------------------

Vue.component('italic', {
    props: ['text'],
    template: '<i>{{text}}</i>'
})

// ----------------------------------------------------

Vue.component('stronger', {
    props: ['text'],
    template: '<strong>{{text}}</strong>'
})

// ----------------------------------------------------

Vue.component('emphrasize', {
    props: ['text'],
    template: '<em>{{text}}</em>'
})

// ----------------------------------------------------

Vue.component('up', {
    props: ['text'],
    template: '<sup>{{text}}</sup>'
})

// ----------------------------------------------------

Vue.component('down', {
    props: ['text'],
    template: '<sub>{{text}}</sub>'
})

// ----------------------------------------------------

Vue.component('inserted', {
    props: ['text'],
    template: '<ins>{{text}}</ins>'
})

// ----------------------------------------------------

Vue.component('marked', {
    props: ['text'],
    template: '<mark>{{text}}</mark>'
})

// ----------------------------------------------------

Vue.component('delete', {
    props: ['text'],
    template: '<del>{{text}}</del>'
})

// ----------------------------------------------------

Vue.component('smaller', {
    props: ['text'],
    template: '<small>{{text}}</small>'
})

// ----------------------------------------------------

Vue.component('bigger', {
    props: ['text'],
    template: '<big>{{text}}</big>'
})

// ----------------------------------------------------

Vue.component('codes', {
    props: ['text'],
    template: '<code>{{text}}</code>'
})

// ----------------------------------------------------

Vue.component('variable', {
    props: ['text'],
    template: '<var>{{text}}</var>'
})

// ----------------------------------------------------

Vue.component('break', {
    template: '<br/>'
})

// ----------------------------------------------------

Vue.component('acronyms', {
    props: ['text'],
    template: '<acronym>{{text}}</acronym>'
})

// ----------------------------------------------------

Vue.component('quote', {
    props: ['url'],
    template: `
    <q
    	v-bind:cite="url"
    >
        <slot></slot>
    </q>
    `
})

// ----------------------------------------------------

Vue.component('blockquotes', {
    props: ['url'],
    template: `
    <blockquote
    	v-bind:cite="url"
    >
        <slot></slot>
    </blockquote>
    `
})

// ----------------------------------------------------

Vue.component('abbreviation', {
    props: ['title'],
    template: `
    <abbr
    	v-bind:title="title"
    >
        <slot></slot>
    </abbr>
    `
})

// ----------------------------------------------------

Vue.component('address-container', {
    template: `
    <address>
        <slot></slot>
    </address>
    `
})

// ----------------------------------------------------

Vue.component('address-text', {
    props: ['text'],
    template: `
    <address>
        {{text}}
    </address>
    `
})

// ----------------------------------------------------

Vue.component('keyboarddisplay', {
    props: ['text'],
    template: '<kbd>{{text}}</kbd>'
})

// ----------------------------------------------------

Vue.component('pretext', {
    props: ['text'],
    template: '<pre>{{text}}</pre>'
})

// ----------------------------------------------------

Vue.component('cite-title', {
    props: ['text'],
    template: '<cite>{{text}}</cite>'
})

// ----------------------------------------------------

Vue.component('bidirectional', {
    props: {
        direction: String,
        text: String,
    },
    template: `
    <bdo
    	v-bind:dir="direction"
    >
        {{text}}
    </bdo>
    `
})

// ----------------------------------------------------

Vue.component('article-container', {
    template: '<article><slot></slot></article>'
})

// ----------------------------------------------------

Vue.component('article-text', {
    props: ['text'],
    template: '<article>{{text}}</article>'
})

// ----------------------------------------------------

Vue.component('aside-container', {
    template: '<aside><slot></slot></aside>'
})

// ----------------------------------------------------

Vue.component('aside-text', {
    props: ['text'],
    template: '<aside>{{text}}</aside>'
})
// ----------------------------------------------------

Vue.component('applet-container', {
    props: {
        url: String,
        objectname: String,
        position: String,
        alttext: String,
        archiveurl: String,
        codebaseurl: String,
        spacehorizontal: String,
        spacevertical: String,
        height: String,
        width: String,
        name: String
    },
    template: `
    <applet
    	v-bind:code="url"
    	v-bind:object="objectname"
    	v-bind:align="position"
    	v-bind:archive="archiveurl"
    	v-bind:codebase="codebaseurl"
    	v-bind:hspace="spacehorizontal"
    	v-bind:vspace="spacevertical"
        v-bind:height={this.props.height}
        v-bind:width={this.props.width}
        v-bind:name={this.props.name}
    >
        <slot></slot>
    </applet>
    `
})

// ----------------------------------------------------

Vue.component('bidirectional-isolation', {
    props: ['text'],
    template: '<bdi>{{text}}</bdi>'
})

// ----------------------------------------------------

Vue.component('center-text', {
    props: ['text'],
    template: '<center>{{text}}</center>'
})

// ----------------------------------------------------

Vue.component('data-container', {
    props: {
        value: String,
        text: String,
    },
    template: `
    <data
    	v-bind:value="value"
    >
        {{text}}
    </data>
    `
})

// ----------------------------------------------------

Vue.component('description-list', {
    props: ['text'],
    template: '<dl>{{text}}</dl>'
})

// ----------------------------------------------------

Vue.component('description-term', {
    props: ['text'],
    template: '<dt>{{text}}</dt>'
})

// ----------------------------------------------------

Vue.component('description-describe', {
    props: ['text'],
    template: '<dd>{{text}}</dd>'
})

// ----------------------------------------------------

Vue.component('details-container', {
    props: {
        open: Boolean,
        text: String,
    },
    template: `
    <details
    	v-bind:open="open"
    >
        <slot></slot>
    </details>
    `
})

// ----------------------------------------------------

Vue.component('defining-instance', {
    props: {
        id: String,
        title: String,
    },
    template: `
    <dfn
    	v-bind:id="id"
    	v-bind:title="title"
    >
        <slot></slot>
    </dfn>
    `
})

// ----------------------------------------------------

Vue.component('dialogs', {
    props: {
        compact: String
    },
    template: `
    <dialog
    	v-bind:compact="compact"
    >
        <slot></slot>
    </dialog>
    `
})

// ----------------------------------------------------

Vue.component('form-border', {
    props: {
        disabled: Boolean,
        formname: String,
        name: String
    },
    template: `
    <fieldset
    	v-bind:disabled="disabled"
    	v-bind:form="formname"
    	v-bind:name="name"
    >
        <slot></slot>
    </fieldset>
    `
})

// ----------------------------------------------------

Vue.component('form-title', {
    props: {
        position: String
    },
    template: `
    <legend
    	v-bind:align="position"
    >
        <slot></slot>
    </legend>
    `
})

// ----------------------------------------------------

Vue.component('figure-container', {
    template: `
    <figure>
        <slot></slot>
    </figure>
    `
})

// ----------------------------------------------------

Vue.component('figcaption-container', {
    template: `
    <figcaption>
        <slot></slot>
    </figcaption>
    `
})

// ----------------------------------------------------

Vue.component('frames', {
    props: {
        border: String,
        urllong: String,
        url: String,
        width: String,
        height: String,
        name: String,
        noresize: String,
        scrolling: String
    },
    template: `
    <frame
    	v-bind:border="border"
    	v-bind:longdesc="urllong"
    	v-bind:url="url"
    	v-bind:marginHeight="height"
    	v-bind:marginWidth="width"
    	v-bind:name="name"
    	v-bind:noresize="noresize"
    	v-bind:scrolling="scrolling"
    />
    `
})

// ----------------------------------------------------

Vue.component('frame-set', {
    props: {
        rows: String,
        cols: String
    },
    template: `
    <frameset
        v-bind:cols="cols"
    	v-bind:rows="rows"
    >
        <slot></slot>
    </frameset>
    `
})

// ----------------------------------------------------

Vue.component('no-frames', {
    props: ['text'],
    template: '<noframes>{{text}}</noframes>'
})

// ----------------------------------------------------

Vue.component('mains', {
    props: ['text'],
    template: '<main>{{text}}</main>'
})

// ----------------------------------------------------

Vue.component('meters', {
    props: {
        value: String,
        min: String,
        max: String,
        text: String
    },
    template: `
    <meter
        v-bind:min="min"
        v-bind:max="max"
        v-bind:value="value"
    >
        {{text}}
    </meter>
    `
})

// ----------------------------------------------------

Vue.component('navigation', {
    props: ['text'],
    template: '<nav>{{text}}</nav>'
})

// ----------------------------------------------------

Vue.component('outputs', {
    props: {
        name: String,
        form: String,
        for: String
    },
    template: `
    <output
        v-bind:name="name"
        v-bind:form="form"
        v-bind:for="for"
    >
    </output>
    `
})

// ----------------------------------------------------

Vue.component('progress-bar', {
    props: {
        value: String,
        max: String
    },
    template: `
    <progress
        v-bind:max="max"
        v-bind:value="value"
    >
    </progress>
    `
})

// ----------------------------------------------------

Vue.component('rubys', {
    props: ['text'],
    template: '<ruby>{{text}}</ruby>'
})

// ----------------------------------------------------

Vue.component('ruby-term', {
    props: ['text'],
    template: '<rt>{{text}}</rt>'
})

// ----------------------------------------------------

Vue.component('ruby-parse', {
    props: ['text'],
    template: '<rb>{{text}}</rb>'
})

// ----------------------------------------------------

Vue.component('s-delete', {
    props: ['text'],
    template: '<s>{{text}}</s>'
})

// ----------------------------------------------------

Vue.component('strike-delete', {
    props: ['text'],
    template: '<strike>{{text}}</strike>'
})

// ----------------------------------------------------

Vue.component('summary-text', {
    props: ['text'],
    template: '<summary>{{text}}</summary>'
})

// ----------------------------------------------------

Vue.component('word-break-opportunity', {
    props: ['text'],
    template: '<wbr>{{text}}</wbr>'
})

// ----------------------------------------------------

Vue.component('templates', {
    props: ['text'],
    template: '<template>{{text}}</template>'
})

// ----------------------------------------------------

Vue.component('line', {
    template: '<hr></hr>'
})