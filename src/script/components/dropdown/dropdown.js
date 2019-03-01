Vue.component('dropdown', {
	props: {
		textbutton: String
	},
    data() {
        return {
            isHover: false,
            isHoverDepth: false,
            isHoverDepthTwo: false
        }
    },
    methods: {
        isVisible(status) {
            this.isHover = status;
        },
        isVisibleDepth(status) {
            this.isHoverDepth = status;
        },
        isVisibleDepthTwo(status) {
            this.isHoverDepthTwo = status;
        }
    },
	computed: {
		dropbtn: function() {
			return {
				backgroundColor: this.isHover ? '#2980B9' : '#3498DB',
                color: 'white',
                padding: '5px',
                width: '100px',
                border: 'none'
			}
        },
		dropdown: function() {
			return {
				position: 'relative',
				display: 'block'
			}
        },
		dropdown_content: function() {
			return {
				display: this.isHover ? 'block' : 'none',
				position: 'absolute',
				backgroundColor: '#f1f1f1',
				width: '100px',
				top: '25px',
				zIndex: '1'
			}
        },
		dropdown_content_sub: function() {
			return {
				display: this.isHoverDepth ? 'block' : 'none',
				position: 'absolute',
				backgroundColor: '#f1f1f1',
				width: '100px',
				top: '0px',
				left: '100px',
				zIndex: '1'
			}
        },
		dropdown_content_sub_next: function() {
			return {
				display: this.isHoverDepthTwo ? 'block' : 'none',
				position: 'absolute',
				backgroundColor: '#f1f1f1',
				width: '100px',
				top: '0px',
				left: '100px',
				zIndex: '1'
			}
        },
        link: function(){
            return {
                color: 'black',
                padding: '5px',
                textDecoration: 'none',
                display: 'block'
            }
        }
    },
    template:
    `
    <div class="dropdown" :style="dropdown" @mouseover="isVisible(true)" @mouseleave="isVisible(false)">
        <button class="dropbtn" :style="dropbtn">{{this.textbutton}}</button>
        <div class="dropdown-content" :style="dropdown_content">
            <div class="dropdown-sub" :style="dropdown" @mouseover="isVisibleDepth(true)" @mouseleave="isVisibleDepth(false)">
                <a href="#" :style="link">Link 1</a>
                <div class="dropdown-content-sub" :style="dropdown_content_sub">
                    <div class="dropdown-sub" :style="dropdown" @mouseover="isVisibleDepthTwo(true)" @mouseleave="isVisibleDepthTwo(false)">
                        <a href="#" :style="link">Link 1.1</a>
                        <div class="dropdown-content-sub" :style="dropdown_content_sub_next">
                            <a href="#" :style="link">Link 1.1.1</a>
                            <a href="#" :style="link">Link 1.1.2</a>
                            <a href="#" :style="link">Link 1.1.3</a>
                        </div>
                    </div>
                    <a href="#" :style="link">Link 1.2</a>
                    <a href="#" :style="link">Link 1.3</a>
                </div>
            </div>
            <a href="#" :style="link">Link 2</a>
            <a href="#" :style="link">Link 3</a>
        </div>
    </div>
    `
})
