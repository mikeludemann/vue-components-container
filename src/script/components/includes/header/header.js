Vue.component('custom-header', {
    props: ['header'],
    template:  
    `
    <nav id="title" class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="navbar-brand" v-if="visible">{{title}}</div>
        <div class="navbar-brand" v-else>Vue</div>
    </nav>
    `
})

var header = new Vue({
    el: 'header',
    data: {
        title: "Vue Tutorial and Learning",
        visible: true
    }
})