import { getData } from "./components/TheData.js";

(()=>{

	const	btn = document.querySelectorAll(".btn");
	let thingList;

	function buildData(data) {
		thingList = data;
		return thingList;
	}

	function showData(event) {

		let	key = event.target.dataset.list;
		console.log(key);
		console.log(thingList);		

		let thingImg = document.querySelector("img"),
			thingTitle = document.querySelector("h2"),
			thingSubTitle = document.querySelector("h3"),
			thingDesc = document.querySelector("p");


			thingImg.src = `images/${thingList[key].picture}`;
			thingTitle.textContent = thingList[key].title;
			thingSubTitle.textContent = thingList[key].subTitle;
			thingDesc.textContent = thingList[key].description;
		
	}

	getData(buildData);
	

	btn.forEach(button => button.addEventListener("click", showData));

})();