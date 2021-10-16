(()=>{

	const	btn = document.querySelectorAll(".btn");

	const thingList = {
		Thing1: {
			title: "Dogs",
			subTitle: "Top 1 lovely creature in the world",
			description:"What is the most lovely creature in the world? Absolutely not human. Maybe cats, maybe rabbits or hamsters. But for me it's dogs. The only one problem left is that when can I have a fluffy doggy?",
			picture: "dog.jpg"
		},
		Thing2: {
			title: "Illustration",
			subTitle: "Great way to spend spare time",
			description: "Even though not making money from it, I stil draw illustrations regularly. Sometimes for practice, and sometimes just want to bring my imagination on paper... well, actually on screen.",
			picture: "illustration.jpg"
		},
		"Thing3": {
			title: "Mincraft",
			subTitle: "Everyone loves playing games",
			description: "To me, the most exciting part of Minecraft is to build whatever I like and make it a cosy place - without costing any money in the real world. This texture pack is also my favourite, and it's called Mizuno's 16 Craft.",
			picture: "minecraft.jpg"
		}
	  }


	function showData(event) {
		let key = event.target.dataset.info;

		let thingTitle = document.querySelector("h2"),
			thingImg = document.querySelector("img"),
			thingSubTitle = document.querySelector("h3"),
			thingDesc = document.querySelector("p");

		thingImg.src = `images/${thingList[key].picture}`;
		thingTitle.textContent = thingList[key].title;
		thingSubTitle.textContent = thingList[key].subTitle;
		thingDesc.textContent = thingList[key].description;

	}


	//getData();

	btn.forEach(button => button.addEventListener("click", showData));

})();