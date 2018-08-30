Vue.component('custom-footer', {
    props: ['footer'],
    template:  
    `
    <div>
      <div class="float-left">Copyright &copy; 2018 - heute</div>
      <div class="float-right">Mike Ludemann</div>
    </div>
    `
})

var footer = new Vue({
    el: 'footer'
})