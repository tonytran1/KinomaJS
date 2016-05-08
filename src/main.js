/**
*	Filename: main.js
*
*	Author: Tony Tran
*	
*	This application was created to practice
*	the KinomaJS framework.
*/

// ID Variable creation
let tempString;
let fahrenheitToCelsiusButton;
let fahrenheitToKelvinButton;
let CelsiusToFahrenheitButton;
let CelsiusToKelvinButton;
let KelvinToFahrenheitButton;
let KelvinToCelsiusButton;

let screen = Container.template((data) => 
{
	return { left: 0, right: 0, top: 0, bottom: 0, 
		skin: new Skin("#d9d9d9"),
		contents: [
			// Temperature String
 			tempString = Label(data, {
				string: " " + temperature.temp + " ",
				left: 18,
				bottom: 0,
				style: new Style ({color:"black", size:30}),
				skin: new Skin({
					fill: "white",
					borders:{
						top: 2,
						bottom: 2,
						right: 2,
						left: 2
					},
					stroke: "#000000"
				}),
				Behavior: class extends Behavior {
					onCreate(label) {
						
					}
					onTouchBegan(label) {
						label.skin = new Skin("#808080");
					}
					onTouchEnded(label) {
						label.skin = new Skin({
							fill: "white",
							borders:{
								top: 2,
								bottom: 2,
								right: 2,
								left: 2
							},
							stroke: "#000000"
						}),
					}
				},				
			}),
			
			// Title
			Label(data, {
				string: "Temperature Conversion", 
				top: 0,
				left: 0,
				right: 0, 
				style: new Style ({color:"white", size:30}), 
				skin: new Skin({
					fill: "#404040",
					borders:{
						top: 2,
						bottom: 2,
						right: 0,
						left: 0 
					},
					stroke: "#000000"
				}) 
			}),
			// Temperature decrementer
			Label(data, {
				string: " - ",
				left: 0,
				bottom: 0,
				active: true,
				style: new Style ({color:"white", size:30}),
				skin: new Skin({
					fill: "#404040",
					borders:{
						top: 2,
						bottom: 2,
						right: 2,
						left: 2
					},
					stroke: "#000000"
				}),
				Behavior: class extends Behavior {
					onCreate(label) {
						
					}
					onTouchBegan(label) {
						label.skin = new Skin("#808080");
					}
					onTouchEnded(label) {
						temperature.temp--;
						tempString.string = " " + temperature.temp + " ";
						label.skin = new Skin({
							fill: "#404040",
							borders:{
								top: 2,
								bottom: 2,
								right: 2,
								left: 2
							},
							stroke: "#000000"
						}),
					}
				},				
			}),
			
			// Temperature incrementer
			Label(data, {
				string: " + ",
				left: 70,
				bottom: 0,
				active: true,
				style: new Style ({color:"white", size:30}),
				skin: new Skin({
					fill: "#404040",
					borders:{
						top: 2,
						bottom: 2,
						right: 2,
						left: 2
					},
					stroke: "#000000"
				}),
				Behavior: class extends Behavior {
					onCreate(label) {
						
					}
					onTouchBegan(label) {
						label.skin = new Skin("#808080");
					}
					onTouchEnded(label) {
						temperature.temp++;
						tempString.string = " " + temperature.temp + " ";
						label.skin = new Skin({
							fill: "#404040",
							borders:{
								top: 2,
								bottom: 2,
								right: 2,
								left: 2
							},
							stroke: "#000000"
						}),
					}
				},				
			}),
			
			// Conversion button
			Label(data, {
				string: "Convert",
				active: true, 
				bottom: 2,
				right: 2, 
				active: true,
				style: new Style ({color:"white", size:30}),
				skin: new Skin({
					fill: "#404040",
					borders:{
						top: 2,
						bottom: 2,
						right: 2,
						left: 2
					},
					stroke: "#000000"
				}),
				Behavior: class extends Behavior {
					onCreate(label) {
						
					}
					onTouchBegan(label) {
						label.skin = new Skin("#808080");
					}
					onTouchEnded(label) {
						label.skin = new Skin({
						fill: "#404040",
						borders:{
							top: 2,
							bottom: 2,
							right: 2,
							left: 2
						},
						stroke: "#000000"
					}),
					}
				},				 
			}),
		] 
	}
});

let temperature = {
	temp: 100,
	unit: ""
}

application.add(screen());