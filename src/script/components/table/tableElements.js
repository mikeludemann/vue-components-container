Vue.component('table-container', {
    props: {
        id: String,
        class: String
    },
    template: 
    `
    <table
        v-bind:id="id"
        v-bind:class="class"
    >
        <slot></slot>
    </table>
    `
})

// ----------------------------------------------------

Vue.component('table-header', {
    props: {
        id: String,
        class: String,
        columnsize: String,
        rowsize: String,
        headers: String,
        abbreviation: String,
        scope: String
    },
    template: 
    `
    <thead
        v-bind:id="id"
        v-bind:class="class"
        v-bind:colspan="columnsize"
        v-bind:rowspan="rowsize"
        v-bind:headers="headers"
        v-bind:abbr="abbreviation"
        v-bind:scope="scope"
    >
        <slot></slot>
    </thead>
    `
})

// ----------------------------------------------------

Vue.component('table-body', {
    props: {
        id: String,
        class: String
    },
    template: 
    `
    <tbody
        v-bind:id="id"
        v-bind:class="class"
    >
        <slot></slot>
    </tbody>
    `
})

// ----------------------------------------------------

Vue.component('table-footer', {
    props: {
        id: String,
        class: String
    },
    template: 
    `
    <tfoot
        v-bind:id="id"
        v-bind:class="class"
    >
        <slot></slot>
    </tfoot>
    `
})

// ----------------------------------------------------

Vue.component('table-row', {
    props: {
        id: String,
        class: String
    },
    template: 
    `
    <tr
        v-bind:id="id"
        v-bind:class="class"
    >
        <slot></slot>
    </tr>
    `
})

// ----------------------------------------------------

Vue.component('table-column', {
    props: {
        id: String,
        class: String,
        columnsize: String,
        rowsize: String,
        headers: String
    },
    template: 
    `
    <td
        v-bind:id="id"
        v-bind:class="class"
        v-bind:colspan="columnsize"
        v-bind:rowspan="rowsize"
        v-bind:headers="headers"
    >
        <slot></slot>
    </td>
    `
})

// ----------------------------------------------------

Vue.component('table-column-group', {
    props: {
        id: String,
        class: String,
        size: String
    },
    template: 
    `
    <colgroup
        v-bind:id="id"
        v-bind:class="class"
        v-bind:span="size"
    >
        <slot></slot>
    </colgroup>
    `
})

// ----------------------------------------------------

Vue.component('table-column-of-group', {
    props: {
        id: String,
        class: String,
        size: String
    },
    template: 
    `
    <col
        v-bind:id="id"
        v-bind:class="class"
        v-bind:span="size"
    >
        <slot></slot>
    </col>
    `
})

// ----------------------------------------------------

Vue.component('table-caption', {
    props: {
        id: String,
        class: String
    },
    template: 
    `
    <caption
        v-bind:id="id"
        v-bind:class="class"
    >
        <slot></slot>
    </caption>
    `
})