(()=>{

	const	btn = document.querySelectorAll(".btn");
	let thingList;


	function getData() {
		fetch("./data.json")
		.then(res => res.json())
		.then(data => {
			
			thingList = data;
			return thingList;
			
		})
		.catch(error => console.error(error));
	}

	function buildData(data) {
		let thingList = Object(data);
	}

	function showData(event) {

		let	key = event.target.dataset.list;
		console.log(key);

		buildData();
		console.log(thingList);
		

		let thingTitle = document.querySelector("h2"),
			thingImg = document.querySelector("img"),
			thingSubTitle = document.querySelector("h3"),
			thingDesc = document.querySelector("p");

		thingImg.src = `images/${thingList[key].picture}`;
		thingTitle.textContent = thingList[key].title;
		thingSubTitle.textContent = thingList[key].subTitle;
		thingDesc.textContent = thingList[key].description;
		
	}

	getData();
	

	btn.forEach(button => button.addEventListener("click", showData));

})();