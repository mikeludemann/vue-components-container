Vue.component('github-informations', {
	props: {
		username: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			data: null,
			error: ""
		};
	},
	created: function() {
		axios
			.get("https://api.github.com/users/" + this.username)
			.then(res => {
				this.data = res.data;

				const tableInfo = document.getElementById("main--table");
				const tableStatus = document.getElementById("status--table");

				var infos = "";
				var status = "";

				const dataObject = JSON.stringify(this.data, null);
				const dataJSON = JSON.parse(dataObject);

				infos += "<tr><th>Options</th><th>Information</th></tr>";

				for (var x in dataJSON) {
					infos += "<tr><td>" + x + "</td><td>" + dataJSON[x] + "</td></tr>";
				}

				tableInfo.innerHTML = infos;

				status += "<table><tr><th>Options</th><th>Information</th></tr><tr><td>Status</td><td>" + res.status + "</td></tr></table>";

				tableStatus.innerHTML = status;

			})
			.catch(error => {
				this.error = error;
				console.log(this.error);
			});
	},
	template:
	`
	<div id="container">
		<div id="main">
			<table id="main--table"></table>
		</div>
		<div id="status">
			<table id="status--table"></table>
		</div>
	</div>
	`
})

/**
 * Axios - Install via npm
 */