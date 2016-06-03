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
let resultTemp;
let fahrenheitToCelsiusButton;
let fahrenheitToKelvinButton;
let celsiusToFahrenheitButton;
let celsiusToKelvinButton;
let kelvinToFahrenheitButton;
let kelvinToCelsiusButton;
let conversionSelection;

let screen = Container.template((data) => 
{
	return { left: 0, right: 0, top: 0, bottom: 0, 
		skin: new Skin("#d9d9d9"),
		contents: [
		
			// Fahrenheit To Celsius Button
			fahrenheitToCelsiusButton = Label(data, {
				string: "  \xB0F to \xB0C  ",
				left: 20,
				top: 50,
				active: true,
				style: new Style ({color:"white", size:23}),
				skin: buttonColor.standard,
				Behavior: class extends Behavior {
					onTouchEnded(label) {
						conversionSelection = "fahToCel";
						fahrenheitToCelsiusButton.skin = buttonColor.onClicked;
						fahrenheitToKelvinButton.skin = buttonColor.standard;
						celsiusToFahrenheitButton.skin = buttonColor.standard;
						celsiusToKelvinButton.skin = buttonColor.standard;
						kelvinToFahrenheitButton.skin = buttonColor.standard;
						kelvinToCelsiusButton.skin = buttonColor.standard;
					}
				},				
			}),
			
			// Fahrenheit To Kelvin Button
			fahrenheitToKelvinButton = Label(data, {
				string: "  \xB0F to \xB0K  ",
				left: 20,
				top: 90,
				active: true,
				style: new Style ({color:"white", size:23}),
				skin: buttonColor.standard,
				Behavior: class extends Behavior {
					onTouchEnded(label) {
						conversionSelection = "fahToKel";
						fahrenheitToCelsiusButton.skin = buttonColor.standard;
						fahrenheitToKelvinButton.skin = buttonColor.onClicked;
						celsiusToFahrenheitButton.skin = buttonColor.standard;
						celsiusToKelvinButton.skin = buttonColor.standard;
						kelvinToFahrenheitButton.skin = buttonColor.standard;
						kelvinToCelsiusButton.skin = buttonColor.standard;
					}
				},				
			}),
			
			// Celsius To Fahrenheit Button
			celsiusToFahrenheitButton = Label(data, {
				string: "  \xB0C to \xB0F  ",
				left: 20,
				top: 130,
				active: true,
				style: new Style ({color:"white", size:23}),
				skin: buttonColor.standard,
				Behavior: class extends Behavior {
					onTouchEnded(label) {
						conversionSelection = "celToFah";
						fahrenheitToCelsiusButton.skin = buttonColor.standard;
						fahrenheitToKelvinButton.skin = buttonColor.standard;
						celsiusToFahrenheitButton.skin = buttonColor.onClicked;
						celsiusToKelvinButton.skin = buttonColor.standard;
						kelvinToFahrenheitButton.skin = buttonColor.standard;
						kelvinToCelsiusButton.skin = buttonColor.standard;
					}
				},				
			}),
			
			// Kelvin To Fahrenheit Button
			kelvinToFahrenheitButton = Label(data, {
				string: "  \xB0K to \xB0F  ",
				right: 20,
				top: 50,
				active: true,
				style: new Style ({color:"white", size:23}),
				skin: buttonColor.standard,
				Behavior: class extends Behavior {
					onTouchEnded(label) {
						conversionSelection = "kelToFah";
						fahrenheitToCelsiusButton.skin = buttonColor.standard;
						fahrenheitToKelvinButton.skin = buttonColor.standard;
						celsiusToFahrenheitButton.skin = buttonColor.standard;
						celsiusToKelvinButton.skin = buttonColor.standard;
						kelvinToFahrenheitButton.skin = buttonColor.onClicked;
						kelvinToCelsiusButton.skin = buttonColor.standard;
					}
				},				
			}),
			
			// Kelvin To Celsius Button
			kelvinToCelsiusButton = Label(data, {
				string: "  \xB0K to \xB0C  ",
				right: 20,
				top: 90,
				active: true,
				style: new Style ({color:"white", size:23}),
								skin: buttonColor.standard,
				Behavior: class extends Behavior {
					onTouchEnded(label) {
						conversionSelection = "kelToCel";
						fahrenheitToCelsiusButton.skin = buttonColor.standard;
						fahrenheitToKelvinButton.skin = buttonColor.standard;
						celsiusToFahrenheitButton.skin = buttonColor.standard;
						celsiusToKelvinButton.skin = buttonColor.standard;
						kelvinToFahrenheitButton.skin = buttonColor.standard;
						kelvinToCelsiusButton.skin = buttonColor.onClicked;
					}
				},				
			}),
			
			// Celsius To Kelvin Button
			celsiusToKelvinButton = Label(data, {
				string: "  \xB0C to \xB0K  ",
				right: 20,
				top: 130,
				active: true,
				style: new Style ({color:"white", size:23}),
				skin: buttonColor.standard,
				Behavior: class extends Behavior {
					onTouchEnded(label) {
						conversionSelection = "celToKel";
						fahrenheitToCelsiusButton.skin = buttonColor.standard;
						fahrenheitToKelvinButton.skin = buttonColor.standard;
						celsiusToFahrenheitButton.skin = buttonColor.standard;
						celsiusToKelvinButton.skin = buttonColor.onClicked;
						kelvinToFahrenheitButton.skin = buttonColor.standard;
						kelvinToCelsiusButton.skin = buttonColor.standard;
					}
				},				
			}),
			
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
			
			// Result Temperature
 			resultTemp = Label(data, {
				string: "",
				bottom: 50,
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
				style: new Style ({font: "bold", color:"white", size:30}), 
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
						if (temperature.temp < 100)
							tempString.string = "  " + temperature.temp + "  "
						else
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
						if (temperature.temp < 100)
							tempString.string = "  " + temperature.temp + "  "
						else
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
				string: " Convert ",
				active: true, 
				bottom: 2,
				right: 2, 
				active: true,
				style: new Style ({font: "bold", color:"white", size:30}),
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
						converter(conversionSelection);
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

let buttonColor = {
	standard: new Skin({
		fill: "#404040",
		borders:{
			top: 2,
			bottom: 2,
			right: 2,
			left: 2
		},
		stroke: "#000000"
	}),
	
	onClicked: new Skin({
		fill: "#808080",
		borders:{
			top: 2,
			bottom: 2,
			right: 2,
			left: 2
		},
		margins: {
			top: 3,
			bottom: 3,
			left: 3,
			right: 3,
		},
		stroke: "#000000"
	})
}

function converter(conversionType) {
	let convertedString = "";
	switch (conversionType) {
		case "fahToCel":
			convertedString = ((parseFloat(temperature.temp) - 32) * (5/9)).toFixed(2) + " \xB0C"
			break;
		case "fahToKel":
			convertedString = ((parseFloat(temperature.temp) + 459.67) * (5/9)).toFixed(2) + " \xB0K"
			break;
		case "celToFah":
			convertedString = ((parseFloat(temperature.temp) * 9/5) + 32).toFixed(2) + " \xB0F"
			break;
		case "celToKel":
			convertedString = (parseFloat(temperature.temp) + 273.15).toFixed(2) + " \xB0K"
			break;
		case "kelToFah":
			convertedString = ((parseFloat(temperature.temp) * 9/5) - 459.67).toFixed(2) + " \xB0F"
			break;
		case "kelToCel":
			convertedString = (parseFloat(temperature.temp) - 273.15).toFixed(2) + " \xB0C"
			break;
		default:
			convertedString = "N/A";
	}
	resultTemp.string = " " + convertedString + " ";
}

let temperature = {
	temp: 100,
	unit: ""
}

application.add(screen());