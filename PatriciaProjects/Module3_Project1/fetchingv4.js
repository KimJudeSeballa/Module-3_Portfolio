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
			"#cover_image_v4"
		).innerHTML = `<img src=${data.data[3].cover_image}  />`;
		document.querySelector(
			"#title-en-v4"
		).innerHTML = `${data.data[3].titles.en}`;
		document.querySelector(
			"#title-jp-v4"
		).innerHTML = `${data.data[3].titles.jp}`;
		document.querySelector(
			"#genrev4"
		).innerHTML = `GENRE: ${data.data[3].genres}
		`;
		document.querySelector(
			"#start_year_v4"
		).innerHTML = `START DATE: ${data.data[3].start_date}`;
		document.querySelector(
			"#end_year_v4"
		).innerHTML = `END DATE: ${data.data[3].end_date}`;
		document.querySelector(
			"#descriptionv4"
		).innerHTML = `Description: ${data.data[3].descriptions.en}`;
	});
