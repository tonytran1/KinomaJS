let title;
let mainPicture;
let comicPicURL;
let flickrPicURL;
let api_key = "FLICKR_API_KEY";
let api_sig = "FLICKR_API_SIG";

new Message("http://xkcd.com/614/info.0.json").invoke(Message.JSON)
	.then(JSON => {
		let screen = Container.template((data) => {
			return {
				left: 0, right: 0, top: 0, bottom: 0,
				skin: new Skin("white"),
				contents: [
					mainPicture = new Picture({
						top: 20,
						bottom: 20,
						url: JSON.img,
					}),
					Label (data, {
						string: JSON.safe_title,
						top: 0,
						style: new Style ({font: "bold 20px",color: "black"}),
					}),
					Label (data, {
						string: "Get Cartoon Image",
						skin: colorSchemes.standard,
						bottom: 2,
						left: 2,
						active: true,
						style: new Style ({font: "bold 18px",color: "black"}),
						Behavior: class extends Behavior {
							onTouchBegan(label) {
								label.skin = colorSchemes.onClicked;
							}
							onTouchEnded(label) {
								label.skin = colorSchemes.standard;
								//new Skin("white");
								if (comicPicURL) {
									mainPicture.url = comicPicURL;
								}
							}
						}
					}),
					Label (data, {
						string: "Find Flickr Image",
						skin: colorSchemes.standard,
						bottom: 2,
						right: 2,
						active: true,
						style: new Style ({font: "bold 18px",color: "black"}),
						Behavior: class extends Behavior {
							onTouchBegan(label) {
								label.skin = colorSchemes.onClicked;
							}
							onTouchEnded(label) {
								label.skin = colorSchemes.standard;
								//new Skin("white");
								title = JSON.safe_title.toLowerCase();
								if (!comicPicURL)
									comicPicURL = mainPicture.url;
								if (flickrPicURL) {
									mainPicture.url = flickrPicURL;
								}
								else {
									new Message(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&text=${title}&format=json&nojsoncallback=1&auth_token=72157669255372255-59e627118432d4d7&api_sig=${api_sig}`).invoke(Message.JSON)
										.then(JSON => {
											mainPicture.url = `http://farm${JSON.photos.photo[0].farm}.staticflickr.com/${JSON.photos.photo[0].server}/${JSON.photos.photo[0].id}_${JSON.photos.photo[0].secret}.jpg`
											flickrPicURL = mainPicture.url;
										})
										.catch (JSON => {
											trace("Error parsing flickr JSON");
										});
								}
							}
						}
					})
				]
			}
	});
		application.add(screen());
	})
	.catch(JSON => {
		trace("Error parsing");
	});

	let colorSchemes = {
		standard: new Skin({
			fill: "white",
			borders:{
				top: 0,
				bottom: 0,
				right: 0,
				left: 0
			},
			margins: {
				top: 3,
				bottom: 3,
				left: 3,
				right: 3,
			},
			stroke: "#000000"
		}),

		onClicked: new Skin({
			fill: "#808080",
			borders:{
				top: 0,
				bottom: 0,
				right: 0,
				left: 0
			},
			stroke: "#000000"
		})
	}
