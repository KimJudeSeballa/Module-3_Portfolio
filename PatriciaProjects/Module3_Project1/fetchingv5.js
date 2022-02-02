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
			"#cover_image_v5"
		).innerHTML = `<img src="${data.data[4].cover_image} " />`;
		document.querySelector(
			"#title-en-v5"
		).innerHTML = `${data.data[4].titles.en}`;
		document.querySelector(
			"#title-jp-v5"
		).innerHTML = `${data.data[4].titles.jp}`;
		document.querySelector(
			"#genrev5"
		).innerHTML = `GENRE: ${data.data[4].genres}
            `;
		document.querySelector(
			"#start_year_v5"
		).innerHTML = `START DATE: ${data.data[4].start_date}`;
		document.querySelector(
			"#end_year_v5"
		).innerHTML = `END DATE: ${data.data[4].end_date}`;
		document.querySelector(
			"#descriptionv5"
		).innerHTML = `Description: ${data.data[4].descriptions.en}`;
	});
