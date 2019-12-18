//popup
document.onload = popupdelay()

function changepopup(){
	document.getElementById("popup").className = "shown";
}
function popupdelay(){
	let milliseconds = setTimeout(changepopup, 1500000)
}

function exitpopup (){
document.getElementById("popup").className = "hidden";
}

document.getElementById("exit").addEventListener("click", exitpopup);

//create string
let str = ""
count4 = 0;
function addToString () {
console.log(str);
if (count4 == 1){str = ""; count4 --; return str}
if (str.length == 0){str = str.concat("c"); return str}
if (str.length == 1){str = str.concat("r"); return str}
if (str.length == 2){str = str.concat("e"); return str}
if (str.length == 3){str = str.concat("a"); return str}
if (str.length == 4){str = str.concat("t"); return str}
if (str.length == 5){str = str.concat("e"); return str}
if (str.length == 6){str = str.concat("d"); return str}
if (str.length == 7||str.length == 8){str = str.concat("."); return str}
//if (){str = str.concat("."); return str}
if (str.length == 9){str = str.concat("."); count4++; return str}
}

function strDelay(str){
  let milliseconds = setInterval(addToString, 200, str)
}

//insert String into HTML
function insertStr(){
  document.getElementById("insert").innerHTML = str;
}

function insertDelay(){
  let milliseconds = setInterval(insertStr, 201)
}

document.onload = strDelay();
document.onload = insertDelay();


//change colour scheme
let count3 = 0;
function changeColour() {
	if (count3 < 1){
 document.body.style.backgroundImage = "url('bg2.png')";
 document.getElementsByClassName("column")[0].className = "columndark";
 document.getElementById("colourchange").innerText = "Light Mode";
 document.getElementById("col3").id = "col3dark";
 //console.log("dark")
 let pelem = document.getElementsByTagName("p");
 	for (var i = 0; i < pelem.length; i++) {
    pelem[i].style.color = "#F0F0F0";
	}  
count3 ++;
}

else {
	document.body.style.backgroundImage = "url('bg.png')";
	document.getElementsByClassName("columndark")[0].className = "column";
	document.getElementById("colourchange").innerText = "Dark Mode";
	document.getElementById("col3dark").id = "col3";
	let pelem = document.getElementsByTagName("p");
		for (var i = 0; i < pelem.length; i++) {
    pelem[i].style.color = "#24305e";
		}
		count3--;
}

}

document.getElementById("colourchange").addEventListener("click", changeColour);


//Hide and show icon in first column (Github)
function hideIcon1() {
  document.getElementById("icon1").className = "hidden";
  document.getElementById("col1h2").className = "shown";

}
function showIcon1() {
  document.getElementById("icon1").className = "shown";
  document.getElementById("col1h2").className = "hidden";
}
document.getElementById("col1").addEventListener("mouseleave", hideIcon1);
document.getElementById("col1").addEventListener("mouseenter", showIcon1);


//Hide and show icon in second column (Freecodecamp)
function hideIcon2() {
  document.getElementById("icon2").className = "hidden";
  document.getElementById("col2h2").className = "shown";
}
function showIcon2() {
  document.getElementById("icon2").className = "shown";
  document.getElementById("col2h2").className = "hidden";
}
document.getElementById("col2").addEventListener("mouseleave", hideIcon2);
document.getElementById("col2").addEventListener("mouseenter", showIcon2);


//Hide and show icon in first column (Codewars)
function hideIcon3() {
  document.getElementById("icon3").className = "hidden";
  document.getElementById("col3h2").className = "shown";
}
function showIcon3() {
  document.getElementById("icon3").className = "shown";
  document.getElementById("col3h2").className = "hidden";
}
document.getElementById("col3").addEventListener("mouseleave", hideIcon3);
document.getElementById("col3").addEventListener("mouseenter", showIcon3);


function centerBoxes() {
	let elem1 = document.getElementById("threecolumns");
	let info1 = elem1.getBoundingClientRect();
	let width1 = info1.width;
	let elem2 = document.getElementById("col1");
	let info2 = elem2.getBoundingClientRect();
	let width2 = info2.width;
    
    if (width1 < width2*2 ) {
       document.getElementById("threecolumns").className = "columnscenter";
    } else if (width1 < width2*3 ) {
       document.getElementById("threecolumns").className = "columnsaround"; 

    } else {
       document.getElementById("threecolumns").className = "threecolumns";
    }
}

window.onresize = centerBoxes;
window.onload = centerBoxes;



function changeImgFwd() {
if (document.getElementById("car-image").src.includes("img1.jpg"))	
{
   	document.getElementById("car-image").src = "img2.jpg";
   	document.getElementById("circle1").className = "smallbtn";
   	document.getElementById("circle2").className = "smallbtndark";
} 

else if (document.getElementById("car-image").src.includes("img2.jpg")) 
{
	document.getElementById("car-image").src = "img3.jpg";
	document.getElementById("circle2").className = "smallbtn";
   	document.getElementById("circle3").className = "smallbtndark";
}
else {document.getElementById("car-image").src = "img1.jpg";
	document.getElementById("circle3").className = "smallbtn";
   	document.getElementById("circle1").className = "smallbtndark";} 
}


function changeImgBck() {
if (document.getElementById("car-image").src.includes("img1.jpg"))
{
   	document.getElementById("car-image").src = "img3.jpg";
   	document.getElementById("circle1").className = "smallbtn";
   	document.getElementById("circle3").className = "smallbtndark";
} 

else if (document.getElementById("car-image").src.includes("img2.jpg")) 
{
	document.getElementById("car-image").src = "img1.jpg";
	document.getElementById("circle2").className = "smallbtn";
   	document.getElementById("circle1").className = "smallbtndark";
}
else {document.getElementById("car-image").src = "img2.jpg";
	  	document.getElementById("circle3").className = "smallbtn";
   		document.getElementById("circle2").className = "smallbtndark";
      } 
}


document.getElementById("fwdbtn").addEventListener("click", changeImgFwd);
document.getElementById("bckbtn").addEventListener("click", changeImgBck);

//onkeydown function to move through images with arrow keys
document.onkeydown = function (event){
    if (event.keyCode == "37"){changeImgBck()}
	if (event.keyCode == "39"){changeImgFwd()}	
}

var x = null;
var count = 0;
function playImgs(){
	if (count <1 ){
		x = setInterval(changeImgFwd, 1000);
		count += 1;
	}
	else {
		clearInterval(x);
		count -= 1;
	}
}

var count2 = 0;
function changeOpacity(){
	if (count2 <1 ){
		document.getElementById("playbtn").style.opacity = 0.2;
		document.getElementById("pausebtn").style.opacity = 1;
		count2 += 1;
	}
	else {
		document.getElementById("playbtn").style.opacity = 1;
		document.getElementById("pausebtn").style.opacity = 0.2;
		count2 -= 1;
	}
}

document.getElementById("playbtn").addEventListener("click", playImgs);
document.getElementById("pausebtn").addEventListener("click", playImgs);
document.getElementById("playbtn").addEventListener("click", changeOpacity);
document.getElementById("pausebtn").addEventListener("click", changeOpacity);



