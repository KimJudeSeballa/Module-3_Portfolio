/** @format */

fetch("https://api.aniapi.com/v1/random/anime/5/true", {
	mode: "cors",
	headers: {
		"Access-Control-Allow-Origin": "*",
	},
})
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		document.querySelector(
			"#cover_image_v3"
		).innerHTML = `<img src=${data.data[2].cover_image}  />`;
		document.querySelector(
			"#title-en-v3"
		).innerHTML = `${data.data[2].titles.en}`;
		document.querySelector(
			"#title-jp-v3"
		).innerHTML = `${data.data[2].titles.jp}`;
		document.querySelector(
			"#genrev3"
		).innerHTML = `GENRE: ${data.data[2].genres}
		`;
		document.querySelector(
			"#start_year_v3"
		).innerHTML = `START DATE: ${data.data[2].start_date}`;
		document.querySelector(
			"#end_year_v3"
		).innerHTML = `END DATE: ${data.data[2].end_date}`;
		document.querySelector(
			"#descriptionv3"
		).innerHTML = `Description: ${data.data[2].descriptions.en}`;
	})
	.catch((rejected) => {
		console.log(rejected);
	});
