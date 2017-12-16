var Canvas = {};

var button_load;

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


var colorButton_div = document.createElement('div');
colorButton_div.setAttribute('id', 'div_colorMenu');
document.body.appendChild(colorButton_div);

Canvas.colors = ["salmon", "green", "purple", "black", "blue", "white"];
var colorsHolder;
	

for (var i=0; i<Canvas.colors.length ;i++){
	var button = document.createElement("BUTTON");
	button.setAttribute('id', Canvas.colors[i]);
	colorButton_div.appendChild(button);
	button.addEventListener("click", selectColor);
}

function selectColor (event) {
	var clickedColor = event.srcElement.id;
	colorsHolder = clickedColor;
}

function coloredDiv (event) {
	var clickedDiv = event.srcElement;
	clickedDiv.style.backgroundColor = colorsHolder;
}





// var button_eraser = document.createElement("BUTTON");
// button_eraser.setAttribute('id', 'eraserButton');
// button_eraser.innerHTML = "Eraser";
// document.body.appendChild(button_eraser);
// button_eraser.addEventListener("click", deletedColor);
// var eraserHolder = document.createElement('ul');

// var deletecolor = ["white"];

//  function deletedColor (event) {
// 	var clickedDelete = event.srcElement.id;
// 	eraserHolder = clickedDelete;
// }

// function deleteDiv (event) {
// 	var clickedDelete = event.srcElement;
// 	clickedDelete.style.backgroundColor = "white";
// }



var table = document.createElement("TABLE");
table.setAttribute('id', 'tableChange');
table.border = "1";
document.body.appendChild(table);
var tblBody = document.createElement('tbody');
tblBody.setAttribute('id', 'tableFunctions');
table.appendChild(tblBody);


tableChange.addEventListener("mousemove", coloredDiv);
// tableChange.addEventListener("onclick", deleteDiv);

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





