/** @format */

fetch("https://api.aniapi.com/v1/anime/11", {
	mode: "cors",
	headers: {
		"Access-Control-Allow-Origin": "*",
	},
})
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		document.querySelector(
			"#cover_image"
		).innerHTML = `<img src=${data.data.cover_image} />`;
		document.querySelector("#title-en").innerHTML = `${data.data.titles.en}`;
		document.querySelector("#title-jp").innerHTML = `${data.data.titles.jp}`;
		document.querySelector(
			"#genre"
		).innerHTML = `GENRE: ${data.data.genres[5]}`;
		document.querySelector(
			"#start_year"
		).innerHTML = `START DATE: ${data.data.end_date}`;
		document.querySelector(
			"#end_year"
		).innerHTML = `END DATE: ${data.data.start_date}`;
		document.querySelector(
			"#description"
		).innerHTML = `Description: ${data.data.descriptions.en}`;
	});
