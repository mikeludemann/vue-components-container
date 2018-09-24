Vue.component('modal', {
    template:
    `
    <div id="modal">
        <div class="modal--background" @click="$emit('closing')">
            <div class="modal--container">
                <div class="modal--header">
                    <slot name="header">
                        Default header
                    </slot>
                    <div class="modal--close" @click="$emit('closing')">
                        x
                    </div>
                </div>
                <div class="modal--body">
                    <slot name="body">
                        Default body
                    </slot>
                </div>
                <div class="modal--footer">
                    <slot name="footer">
                        Default footer
                    </slot>
                </div>
            </div>
        </div>
    </div>
    `
})

// New Vue Instance
var modal = new Vue({
    el: '#app',
    data: {
        isModalVisible: false
    }
})