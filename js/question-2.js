const url =
	"https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const resultsContainer = document.querySelector(".results");
const loading = document.querySelector(".loader");

setTimeout(function () {
	loading.classList.remove("loading-indicator");
}, 2000);

async function loopResults() {
	try {
		const response = await fetch(url);
		const data = await response.json();
		const facts = data.results;
		console.log(facts);

		resultsContainer.innerHTML = "";

		for (let i = 0; i < facts.length; i++) {
			console.log(facts[i]);

			if (i === 8) {
				break;
			}

			resultsContainer.innerHTML += `<div class="result">
                <b>Name:</b> ${facts[i].name} <br>
                <b>Ratings:</b> ${facts[i].rating} <br>
                <b>Number of tags:</b> ${facts[i].tags.length} <br>
            </div>`;
		}
	} catch (error) {
		console.log("An error occurred when calling the API: " + error);
		resultsContainer.innerHTML += `<div class="error"> An error occurred when calling the API</div>`;
	}
}
setTimeout(loopResults, 2000);
