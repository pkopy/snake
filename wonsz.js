function wonsz(x){
	glowa(x)
	kula()
function glowa(x){
//body = document.getElementsByTagName('div');
//body[body.length-2].id='jeden'
var element = document.createElement('div')					//tworzymy nowego "diva"
	//var element = document.getElementById('jeden')			
element.id = 'jeden';
//element.style.top='100px'
//element.style.border='2px solid #4CAF50'
element.style.height='482px'
element.style.width='482px'
element.style.position='relative'
//element.style.left='100px'
element.style.backgroundColor='white'
//element.style.borderRadius='8px'
element.style.boxShadow ='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
var body = document.getElementById(x);

if(body){													//jeżeli element istnieje
		body.appendChild(element);							//wstawiamy do niego "DIva"
	}else{													//jeżeli nie
		body = document.getElementsByTagName('div'); 	
		body[body.length-1].appendChild(element);			//wstaw "DIVa" do body
	}

var kulag=document.createElement('div')
kulag.id='kula0'
kulag.className='kula'
kulag.style.zIndex='999'
var kula_kontener = document.getElementById('jeden');
kula_kontener.appendChild(kulag)

}

var kula_kontener = document.getElementById('jeden');
<!-- var kulag=document.getElementById('kula0') -->
<!-- console.log(kulag) -->
var arr =[]

var kule=[]
var axy=[];
//axy[0]=[null,null]
kule[0]=0
var u,l,r,d 
var trig = 0;
console.log(axy)


function kula(){
var x=500;
window.addEventListener('keydown',ruch);//oczekiwanie na ruch 

function ruch(e){ //rozpoczęcie ruchu
console.log(e.which)
switch(e.keyCode){     //kod klawisza
case 37:                 
l=1
left();
setTimeout(addElement,1000)
window.removeEventListener('keydown',ruch);
break;
case 38:
u=1
up();
setTimeout(addElement,1000)
window.removeEventListener('keydown',ruch);
break;
case 39:
r=1
right();
setTimeout(addElement,1000)
window.removeEventListener('keydown',ruch);
break;
case 40:
d=1
down();
setTimeout(addElement,1000)
window.removeEventListener('keydown',ruch);
break;
}
}
function ruchd(e){ //ruch poziomy
console.log(e.which)
switch(e.keyCode){
case 37:
d=0; r=0;l=1;u=0; //wyłączamy wszystkie ruchy oprócz ruchu w lewo
window.removeEventListener('keydown',ruchd);
left();
break;
case 39:
d=0; r=1;l=0;u=0; //wyłączamy wszystkie ruchy oprócz ruchu w prawo
window.removeEventListener('keydown',ruchd);
right();
break;

}
}

function ruchl(e){ //ruch pionowy
console.log(e.which)
switch(e.keyCode){
case 38:
d=0; r=0;l=0;u=1; //wyłączamy wszystkie ruchy oprócz ruchu do góry
window.removeEventListener('keydown',ruchl);
up();
break;
case 40:
d=1; r=0;l=0;u=0;//wyłączamy wszystkie ruchy oprócz ruchu w dół
window.removeEventListener('keydown',ruchl);
down();
break;

}
}

//zmienne głowa i reszta


var kulka=document.getElementById('kula0')
kulka.style.left='240px';
kulka.style.top='240px';
var c1=kula0.style.left;
var c=kula0.style.top;
c1=c1.slice(0,c1.length-2)
c=c.slice(0,c.length-2)
c=parseInt(c);
c1=parseInt(c1);
console.log(c1)

function koniec(){

if(kula_kontener.style.backgroundColor=='white'){
kula_kontener.style.backgroundColor='red'
}else{
kula_kontener.style.backgroundColor='white'
}
setTimeout(function(){
koniec()
},300)
}

function stop(){

window.removeEventListener('keydown',ruchl);
window.removeEventListener('keydown',ruchd);
window.removeEventListener('keydown',ruch);

//setTimeout(koniec(),1000)
}

function down(){
var ab=document.querySelectorAll('.kula')
console.log('a: '+ab.length)
var ac=ab.length-1
var kulaid='kula'+ac
var kula = document.getElementById('kula0');
var ky=kula.style.top
ky=ky.slice(0,ky.length-2)
ky=parseInt(ky)
var kx=kula.style.left
kx=kx.slice(0,kx.length-2)
kx=parseInt(kx)
ky=parseInt(ky)
var arr0=[kx,ky]

	if(c>420||d==0){
		clearTimeout(t)
		stop()
			if(c==440&&d==1){koniec()}
		}else{
			var ad = ac;
			var bbb='kula'+ad
			console.log('bbb: '+bbb)
			var ccc=document.getElementById('jeden')
			var ddd=ccc.lastChild
			var eee=ddd.id
			if(ad==0){eee=undefined}
			console.log(eee)
			if(bbb==eee){													//sprawdź czy jest nowy element węża
				if(arr[0][0]==axy[ad-1][0] && arr[0][1]==axy[ad-1][1]){		//sprawdzaj czy glowa najechala na element
				kule.push(1)												//wstaw flagę dla nowego elementu
				var czas = Math.floor(1000+Math.random()*3500)
				setTimeout(addElement,czas)
			}
		}
	arr.unshift(arr0)													//poprzednia pozycja wstawiona do tablic arr na początku
	c+=40																// ruch w dół
	kula.style.top=c+'px'												//	
	//kula.innerHTML = 'y: ' +c											//
	kula.style.backgroundImage='url("glowad.png")'						//zmiana kierunku oczu węża
		for(var i=1; i<ac+1; i++){										//dla każdego elementu
			if (kule[i]==1){											//sprawdzaj czy flaga ustawiona
				kulaid='kula'+i											
				var kula_move = document.getElementById(kulaid)
				kula_move.style.left = arr[i-1][0]+'px'					//ustaw pozycję poziomą
				kula_move.style.top = arr[i-1][1]+'px'					//ustaw pozycję pionową
			}
		}
	window.addEventListener('keydown',ruchd);							//włącz nasłuch do ruchu poziomego
	var t = setTimeout(function(){down()},x);							//włącz powtarzanie co x czas
	}
}
function up(){
var ab=document.querySelectorAll('.kula')
var ac=ab.length-1
var kulaid='kula'+ac
var kula = document.getElementById('kula0');
var ky=kula.style.top
ky=ky.slice(0,ky.length-2)
ky=parseInt(ky)
var kx=kula.style.left
kx=kx.slice(0,kx.length-2)
kx=parseInt(kx)
ky=parseInt(ky)
var arr0=[kx,ky]
	if(c<=0||u==0){
		clearTimeout(t)
		stop()
			if(c==0&&u==1){koniec()}
	}else{
		var ad = ac;
		var bbb='kula'+ad
		console.log('bbb: '+bbb)
		var ccc=document.getElementById('jeden')
		var ddd=ccc.lastChild
		var eee=ddd.id
		if(ad==0){eee=undefined}
			console.log(eee)
		console.log(eee)
			if(bbb==eee){
				if(arr[0][0]==axy[ad-1][0] && arr[0][1]==axy[ad-1][1]){
				kule.push(1)
				var czas = Math.floor(1000+Math.random()*3500)
				setTimeout(addElement,czas)
				}
			}
	arr.unshift(arr0)
	c-=40
	kula.style.top=c+'px'
	//kula.innerHTML = 'y: ' +c
	kula.style.backgroundImage='url("glowau.png")'
		for(var i=1; i<ac+1; i++){
			if (kule[i]==1){
			kulaid='kula'+i
			var kula_move = document.getElementById(kulaid)
			kula_move.style.left = arr[i-1][0]+'px'
			kula_move.style.top = arr[i-1][1]+'px'
			}
		}
	window.addEventListener('keydown',ruchd);
	var t = setTimeout(function(){up()},x);
	}
}
function right(){
var ab=document.querySelectorAll('.kula')
var ac=ab.length-1
var kulaid='kula'+ac
var kula = document.getElementById('kula0');
var ky=kula.style.top
ky=ky.slice(0,ky.length-2)
ky=parseInt(ky)
var kx=kula.style.left
kx=kx.slice(0,kx.length-2)
kx=parseInt(kx)
ky=parseInt(ky)
var arr0=[kx,ky]
	if(c1>420||r==0){
		clearTimeout(t)
		stop()
			if(c1==440&&r==1){koniec()}
	}else{
		var ad = ac;
		var bbb='kula'+ad
		var ccc=document.getElementById('jeden')
		var ddd=ccc.lastChild
		var eee=ddd.id
		if(ad==0){eee=undefined}
			console.log(eee)
		console.log(eee)
			if(bbb==eee){
				if(arr[0][0]==axy[ad-1][0] && arr[0][1]==axy[ad-1][1]){
				kule.push(1)
				var czas = Math.floor(1000+Math.random()*3500)
				setTimeout(addElement,czas)
				}
			}
		arr.unshift(arr0)
		c1+=40
		kula.style.left=c1+'px'
		//kula.innerHTML = 'y: ' +c
		kula.style.backgroundImage='url("glowap.png")'
		for(var i=1; i<ac+1; i++){
			if (kule[i]==1){
				kulaid='kula'+i
				var kula_move = document.getElementById(kulaid)
				kula_move.style.left = arr[i-1][0]+'px'
				kula_move.style.top = arr[i-1][1]+'px'
			}
		}
	window.addEventListener('keydown',ruchl);
	var t = setTimeout(function(){right()},x);
	}
}
function left(){
var ab=document.querySelectorAll('.kula')
var ac=ab.length-1
var kulaid='kula'+ac
var kula = document.getElementById('kula0');
var ky=kula.style.top
ky=ky.slice(0,ky.length-2)
ky=parseInt(ky)
var kx=kula.style.left
kx=kx.slice(0,kx.length-2)
kx=parseInt(kx)
ky=parseInt(ky)
var arr0=[kx,ky]
	if(c1<=0||l==0){
		clearTimeout(t)
		stop()
		if(c1==0&&l==1){koniec()}
	}else{
		var ad = ac;
		var bbb='kula'+ad
		var ccc=document.getElementById('jeden')
		var ddd=ccc.lastChild
		var eee=ddd.id
		if(ad==0){eee=undefined}
			console.log(eee)
		if(bbb==eee){
			if(arr[0][0]==axy[ad-1][0] && arr[0][1]==axy[ad-1][1]){
				kule.push(1)
				var czas = Math.floor(1000+Math.random()*3500)
				setTimeout(addElement,czas)
			}
		}
		arr.unshift(arr0)
		c1-=40
		kula.style.left=c1+'px'
		//kula.innerHTML = 'y: ' +c
		kula.style.backgroundImage='url("glowal.png")'
			for(var i=1; i<ac+1; i++){
				if (kule[i]==1){
					kulaid='kula'+i
					var kula_move = document.getElementById(kulaid)
					kula_move.style.left = arr[i-1][0]+'px'
					kula_move.style.top = arr[i-1][1]+'px'
				}
			}
		window.addEventListener('keydown',ruchl);
		var t = setTimeout(function(){left()},x);
	}
}

function addElement(){
var ab=document.querySelectorAll('.kula')
var ac=ab.length
var kulaid='kula'+ac
var newNode = document.createElement('div')
	newNode.id=kulaid;
	newNode.classList.add('kula')

var a = Math.floor((Math.random() * 460));
var b = Math.floor((Math.random() * 460));
	newNode.style.left = a-a%40 + 'px';
	newNode.style.top = b-b%40 + 'px';
	kula_kontener.appendChild(newNode);
var pozx = newNode.style.left
	pozx=pozx.slice(0,pozx.length-2)
var pozy = newNode.style.top
	pozy=pozy.slice(0,pozy.length-2)
	pozy=parseInt(pozy)
	pozx=parseInt(pozx)
	axy.push([pozx,pozy])
	//newNode.innerHTML=ac
var pomocx=document.getElementById('nk')
	//pomocx.innerHTML='Nowy kwadat x: '+newNode.style.left+' y: \n'+newNode.style.top;
}
//document.getElementById('jeden').addEventListener('click',addElement)
<!-- addElement() -->
<!-- var p=document.getElementById('kula1') -->
<!-- kula_kontener.removeChild(p) -->
}
}