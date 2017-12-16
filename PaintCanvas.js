var Canvas = {};

var button_load;

Canvas.selectedColor = " ";

var pictureTitle = document.createElement('div');
pictureTitle.setAttribute('id', 'titlePic');
document.body.appendChild(pictureTitle);

Canvas.start = function() {
Canvas.bindMenuActions();
}

var button_div = document.createElement('div');
button_div.setAttribute('id', 'div_menu');
document.body.appendChild(button_div);

Canvas.bindMenuActions = function (){
	var button_new = document.createElement("BUTTON");
	button_new.setAttribute('id', 'new_canvas');
	button_div.appendChild(button_new);
	button_new.innerHTML = 'New Canvas';
	button_new.addEventListener('click', Canvas.new);

	var button_save = document.createElement("BUTTON");
	button_save.setAttribute('id', 'save_canvas');
	button_div.appendChild(button_save);
	button_save.innerHTML = 'Save Canvas';
	button_save.addEventListener('click', Canvas.save);

	button_load = document.createElement("BUTTON");
	button_load.setAttribute('id', 'load_canvas');
	button_div.appendChild(button_load);
	button_load.innerHTML = 'Load Canvas';
	button_load.addEventListener('click', Canvas.load);
	 }

Canvas.new = function() {
	var pictureName = prompt("What is the name of your new painting?");
	pictureTitle.innerHTML = pictureName;
	Canvas.show();
}

Canvas.show = function() {
	tableChange.style.visibility = "visible";
}

Canvas.save = function() {
	alert("save");
}

Canvas.load = function() {
	alert("load");
}

Canvas.start();

var para = document.createElement('div');
para.setAttribute('id', 'title_colors');
document.body.appendChild(para);
var colorTitle = document.createTextNode("Color Options");
para.appendChild(colorTitle);

Canvas.colors = ["salmon", "green", "purple", "black", "blue"];

var colorButton_div = document.createElement('div');
colorButton_div.setAttribute('id', 'div_colorMenu');
document.body.appendChild(colorButton_div);

// Canvas.bindColorActions = function (){

var button_salmon = document.createElement("BUTTON");
button_salmon.setAttribute('id', 'salmonButton');
colorButton_div.appendChild(button_salmon);

var button_green = document.createElement("BUTTON");
button_green.setAttribute('id', 'greenButton');
colorButton_div.appendChild(button_green);

var button_purple = document.createElement("BUTTON");
button_purple.setAttribute('id', 'purpleButton');
colorButton_div.appendChild(button_purple);

var button_black = document.createElement("BUTTON");
button_black.setAttribute('id', 'blackButton');
colorButton_div.appendChild(button_black);

var button_blue = document.createElement("BUTTON");
button_blue.setAttribute('id', 'blueButton');
colorButton_div.appendChild(button_blue);


// }

// don't know if need DIV

// var canvas_div = document.createElement('div');
// canvas_div.setAttribute('id', 'canvasDiv');
// document.body.appendChild(canvas_div);

var table = document.createElement("TABLE");
table.setAttribute('id', 'tableChange');
table.border = "1";
document.body.appendChild(table);
var tblBody = document.createElement('tbody');
tblBody.setAttribute('id', 'tableFunctions');
table.appendChild(tblBody);


for(var i=0; i<50; i++){
	var tr = document.createElement('TR');
	tr.setAttribute('id', 'trFunctions');
	tblBody.appendChild(tr);

		for(var j = 0; j<50;j++) {
			var td = document.createElement('TD');
			td.setAttribute('id', 'tableData');
			td.setAttribute('id', 'tdFunctions');
			tr.appendChild(td);
		}
	}

	// Canvas.generateDynamicColors = function(){
// //need to create element to append too
// var colorsHolder = 
// for (var i = 0; i < Canvas.colors.length; i++) {
// var buttonItem = document.createElement("li");
// 	var 
// 	}
// }




