Vue.component('sidenavigation', {
	props: ['list'],
	template: 
	`
	<div class="list">
		<a :href="list.url">{{list.text}}</a>
	</div>
	`
})

new Vue({
	el: "#myNav",
	data: {
		customList: [
			{ id: 1, text: 'Hello', url: '#' },
			{ id: 2, text: 'Morning', url: '#top' },
			{ id: 3, text: 'Evening', url: '#test' }
		]
	}
})
