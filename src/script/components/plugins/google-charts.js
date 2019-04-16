Vue.component('google-charts', {
	props: {
		settings: String,
		chartoptions: Object,
		datas: Array
	},
	methods: {
		mainCore: function(){

			google.charts.load('current', this.settings);
			google.charts.setOnLoadCallback(drawChart);

			var mainOptions = this.chartoptions;
			var mainDatas = this.datas;

			function drawChart() {

				var data = google.visualization.arrayToDataTable(mainDatas);

				var options = mainOptions;

				var chart = new google.visualization.PieChart(document.getElementById('chart'));

				chart.draw(data, options);

			}

		}
	},
	mounted: function () {
		this.mainCore();
	},
	template:
	`
	<div id="chart"></div>
	`
})

// Prerequisite: Script File
// https://www.gstatic.com/charts/loader.js
