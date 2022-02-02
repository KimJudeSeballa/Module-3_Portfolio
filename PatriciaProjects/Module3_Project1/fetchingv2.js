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
			"#cover_image_v2"
		).innerHTML = `<img src=${data.data[1].cover_image}  />`;
		document.querySelector(
			"#title-en-v2"
		).innerHTML = `${data.data[1].titles.en}`;
		document.querySelector(
			"#title-jp-v2"
		).innerHTML = `${data.data[1].titles.jp}`;
		document.querySelector(
			"#genrev2"
		).innerHTML = `GENRE: ${data.data[1].genres}
		`;
		document.querySelector(
			"#start_year_v2"
		).innerHTML = `START DATE: ${data.data[1].end_date}`;
		document.querySelector(
			"#end_year_v2"
		).innerHTML = `END DATE: ${data.data[1].start_date}`;
		document.querySelector(
			"#descriptionv2"
		).innerHTML = `Description: ${data.data[1].descriptions.en}`;
	});
