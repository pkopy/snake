function pushTimer3(elem,min,sek){ //element musi być podany w postaci 'elementID'
var a = 0;
var b = 0;
var c,d;
var m,s 
if(min){//jeżeli parametr min jest podany - mamy przycisk "M"
m=1
}
if(sek){//jeżeli parametr sek jest podany - mamy przycisk "S"
s=1;
}
create(elem,m,s);

function create(elementId,m,s){ 							//tworzymy timer
	
var check = document.getElementsByTagName('div');			//sprawdzamy czy istnieje jakiś "DIV"
d=check.length 												//ilość wszystkich "divów" na stronie
myDiv='myDiv'+d;

var element = document.createElement('div')					//tworzymy nowego "diva"
myDiv='myDiv'+d;				
element.id = myDiv;
element.style.zIndex=d;
element.className ='timer'

var body = document.getElementById(elementId);				//element do którego mamy wstawić "DIVa"
 
//body.appendChild(element);
if(body){													//jeżeli element istnieje
		body.appendChild(element);							//wstawiamy do niego "DIva"
	}else{													//jeżeli nie
		body = document.getElementsByTagName('div'); 	
		body[body.length-1].appendChild(element);			//wstaw "DIVa" do body
	}
console.trace();

	
var element1 = document.createElement('p');					//tworzymy "p"
element.appendChild(element1)								//wstawiamy "p" do "DIVa"

var element2 = document.createElement('span');				//tworzymy "span"
min='min'+d;												//
element2.id=min;											//nadajemy mazwę id min+d "span"
element2.innerHTML='00';									//wpisujemy do"span" "00"
element1.appendChild(element2);								//wstawiamy "span" do "p"

var dwukropek = document.createTextNode(':');				//tworzymy noda tekstowego ":"
element1.appendChild(dwukropek);							//wstawiamy ":" za "span"

var element3 = document.createElement('span');				//tworzymy "span"
sek = 'sek'+d;												//
element3.id =sek;											//nadajemy mazwę id sek+d "span"
element3.innerHTML='00'										//wpisujemy do"span" "00"
element1.appendChild(element3);								//wstawiamy "span" do "p"

var start = document.createElement('input')					//tworzymy guzik START
startx='start'+d;											//zmienna 
startg='start'+d;
start.id=startx;											//nadajemy mazwę id start+d "input"
start.type='button';										//ustawiamy typ na "button"
start.value='START';										//ustawiamay value na "START"
start.className='start'										//nadajemy klase "start"
element.appendChild(start);									//wstawiamy button do "DIVa"

min1x='min1'+d
if(m){														//sprawdzenie czy został podany parametr min
	
var min1 = document.createElement('input')					//tworzymy guzik M
min1.id=min1x;												//
min1.type='button';											//ustawiamy typ na "button"
min1.value='M';												//ustawiamay value na "M"
element.appendChild(min1);									//wstawiamy button do "DIVa"
}

sek1x='sek1'+d;												
if(s){														//sprawdzenie czy został podany parametr min
	
var sek1 = document.createElement('input')					//tworzymy guzik S
sek1.id=sek1x;
sek1.type='button';											//ustawiamy typ na "button"
sek1.value='S';												//ustawiamay value na "S"
element.appendChild(sek1);									//wstawiamy button do "DIVa"

}
}
function addZero(i){										//funkcja dodaje zero jeżeli odlicznie jest mniejsze od 10 np 09
if (i<10){ 
return '0'+i;
}else{
return i;
}
}

function down(){											//funkcja odliczanie
	//startp=document.querySelectorAll('.start');
	startp=startg.id;										//pobranie wartości id z guzika "START" wiersz 180
	console.log(startp)
	
	//clearTimeout(o);
	if((a+b)!=0){
		
startg = document.getElementById(startp);					//pobieramy guzik "START"
startg.removeEventListener('click',down);					//usuwamy nasłuchiwanie guzika "START" do funkcji "down()"
guzikSek.removeEventListener('click',sekPlus);				//usuwamy nasłuchiwanie guzika "S" do funkcji "sekPlus()"
guzikMin.removeEventListener('click',minPlus);				//usuwamy nasłuchiwanie guzika "M" do funkcji "minPlus()"
startg.value = 'STOP'										//ustawiamy value guzika "START" na "STOP"
startg.addEventListener('click',clear);						//podpinamy do guzika "START" funkcje "clear()"
	}else{
	return{}
	}
var sekd = document.getElementById(sek);					//pobieramy wartość ze "span" id "sek+d"
var mind = document.getElementById(min);					//pobieramy wartość ze "span" id "min+d"
var seku=60*a+b;											//czas podany w sekundach (minuty x 60 + sekundy)
console.log(sekd.value)
	
go();

function go(){



	if(seku>0){
	c = setTimeout(function(){
	go()
	},1000);
	seku--;
	console.log(seku)
	
	mind.innerHTML=addZero(Math.floor(seku/60));
	sekd.innerHTML = addZero(seku%60);
	
	}else{
		end();
	//clear();
	//return startp;
	
}
}
	
}
function end(){
	//myDiv=element.id
	startp=startg.id;
	startg.addEventListener('click',clear);	
	var xx = document.getElementById(startp)
	var col = xx.parentNode.style.backgroundColor
	console.log(xx)
	if(col=='white'){
	xx.parentNode.style.backgroundColor='rgb(236, 236, 236)'
	//xx.parentNode.style.border= '2px solid white';
	console.log(xx.ParentNode)

	}else{
		
		xx.parentNode.style.backgroundColor='white'
	//xx.parentNode.style.border= '2px solid #4CAF50';
	}
m =setTimeout(function(){
end()},500);
}
	
function minPlus(){
	
a++
var min2 = document.getElementById(min);
var minDisplay = addZero(a);
min2.innerHTML=minDisplay;

return a

}
function sekPlus(){
	b++


if(b>59){
	b=0
	var sek2 = document.getElementById(sek);
var sekDisplay = addZero(b);
sek2.innerHTML=sekDisplay;
	sek2.innerHTML=sekDisplay;
	b=0;
	
//sekPlus()
	minPlus()
	

}else{

var sek2 = document.getElementById(sek);
var sekDisplay = addZero(b);
sek2.innerHTML=sekDisplay;

return b	
	
}
}
function clear(){
startp=startg.id;
	console.log(startp)	
	clearTimeout(c);
clearTimeout(m);
	
startg = document.getElementById(startp);
console.log('zmienna: '+startp)
startg.removeEventListener('click',clear);
startg.addEventListener('click',down);
guzikSek.addEventListener('click',sekPlus);
guzikMin.addEventListener('click',minPlus);
var sekc = document.getElementById(sek);
var minc = document.getElementById(min);


var element = document.getElementById(startp)
element.parentNode.style.backgroundColor='white'
	//element.parentNode.style.border= '2px solid #4CAF50';

startg.value = 'START'
minc.innerHTML='00';
sekc.innerHTML='00';
a=0;
b=0;	
}
/*function pause(){
startp=startg.id;	
startg = document.getElementById(startp);					//pobieramy guzik "START"
startg.removeEventListener('click',down);					//usuwamy nasłuchiwanie guzika "START" do funkcji "down()"
startg.value = 'START'										//ustawiamy value guzika "START" na "STOP"
startg.addEventListener('click',down);	
clearTimeout(c);											//podpinamy do guzika "START" funkcje "clear()"
}*/


var guzikSek = document.getElementById(sek1x);
guzikSek.addEventListener('click',sekPlus);

var guzikMin = document.getElementById(min1x);
guzikMin.addEventListener('click',minPlus);
var startg = document.getElementById(startx);
startg.addEventListener('click',down);
console.log(startg)


}





