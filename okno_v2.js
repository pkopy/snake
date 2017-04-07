

function test(x){
//var o = document.createTextNode(x)
	
	console.log(x)
	createDiv()

	
function createDiv(){
	var check = document.querySelectorAll('.okna')
	var oknoQty = check.length;
	
	
	var okno = document.createElement('div')
	oknoName = 'okno'+oknoQty;
	okno.id = oknoName
	
	okno.style.position='absolute'
	var r=Math.floor(Math.random()*200)
	//console.log('r:'+r)
	okno.style.left = r+'px'
	okno.style.top = r+'px'
	okno.style.zIndex = '999'
	okno.style.backgroundColor = 'white'
	okno.style.color='black'
	//okno.style.border = '2px solid #4CAF50'
	//okno.style.borderRadius = '8px'
	okno.style.padding='16px, 32px'
	okno.className ='okna'
	okno.style.width='auto'
	okno.style.height='auto'
	okno.style.boxShadow =' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
	okno.style.userSelect='none'
        // -moz-user-select:none;
        // -webkit-user-select:none;
        // -ms-user-select:none;
	var pasek = document.createElement('div')
	pasekName = 'pasek'+oknoQty
	pasek.id = pasekName
	pasek.style.left = r+'px'
	pasek.style.top = r+'px'
	//pasek.style.position='relative'
	pasek.style.backgroundColor = '#e5e5e5'
	pasek.style.width='auto'
	pasek.style.height='30px'
	pasek.className='pasek'
	//pasek.style.borderTopRadius = '8px'
	pasek.style.zIndex=9999
	okno.appendChild(pasek)
	var guzikx= document.createElement('div')
	pasek.style.textAlign = 'center'
	pasek.appendChild(guzikx)
	guzikName= 'guzik'+oknoQty
	guzikx.id = guzikName
	guzikx.style.position = 'absolute'
	guzikx.style.top = '5px'
	guzikx.style.right = '15px'
	guzikx.style.width = '25px'
	guzikx.className='guziki'

	var napis = document.createTextNode(' X ')
	pasek.style.color='rgb(212, 197, 197)'
	guzikx.appendChild(napis)
	var guzik_= document.createElement('div')
	guzik_Name = 'guzik_'+oknoQty
	guzik_.id = guzik_Name
	guzik_.style.position = 'absolute'
	guzik_.style.top = '5px'
	guzik_.style.right = '45px'
	guzik_.style.width = '25px'
	guzik_.style.font='strong'
	guzik_.className='guziki'
	var napis_ = document.createTextNode(' _ ')
	pasek.style.color='rgb(212, 197, 197)'
	guzik_.appendChild(napis_)
	pasek.appendChild(guzik_)
	var body = document.getElementsByTagName('body')[0]
	
	
	body.appendChild(okno)
		// if(x!=null){
			// okno.appendChild(o)
		// }
	//console.log(okno)
	//var myDiv = document.querySelector('okno'+oknoQty);
	
	//myDiv.addEventListener('mousedown', mouseDownDiv);
	
	
		
		
}


function createDivHelp(){
	var check = document.querySelectorAll('.help')
	console.log(check)
	if(check.length==0){
		var okno = document.createElement('div')
		okno.id = 'help0'
		okno.style.position='absolute'
		okno.style.left = '-99999px'
		okno.className='help'
		var body = document.getElementsByTagName('body')[0]
		body.appendChild(okno);
		var okno1 = document.createElement('div')
		okno1.id = 'help1'
		okno1.style.position='absolute'
		okno1.style.top = '-99999px'
		okno1.className='help'
		//var body = document.getElementsByTagName('body')[0]
		body.appendChild(okno1);
	}
	
}

function mouseDownDiv(e) {
	  
	console.log(myDiv)

var qty1 = document.querySelectorAll('.okna')
var qty = document.querySelectorAll('.pasek')
		for (var x=0; x<qty.length;x++){
		qty[x].style.zIndex=0;
		qty1[x].style.zIndex=0;
		}
    if (myDiv != null) {
        var x, y;

        //pobieramy pozycję myszki wraz ze scrollem okna
        if (e.pageX || e.pageY) {
            x = e.pageX;
            y = e.pageY;
        } else {
            x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
		
		var body = document.getElementsByTagName('body')[0];
		myDiv.addEventListener('mousemove', moveDiv);
        var eDiv = document.querySelector('#help0');
		var c =myDiv.style.left
		var d=c.slice(0, c.length-2)
		//console.log('d1:'+d)
		eDiv.style.left = x-d+'px';
		//console.log(eDiv.style.left)
		var eDiv1 = document.querySelector('#help1');
		var c1 =myDiv.style.top
		var d1=c1.slice(0, c1.length-2)
		//console.log('h1:'+d1)
		eDiv1.style.top = y-d1+'px';
		myDiv.style.zIndex=qty.length;
		var oknoMy = myDiv.parentNode
		oknoMy.style.zIndex=qty.length;
		
		
    }
}
function moveDiv(e) {
    
   // if (myDiv != null) {
        var x, y;

        //pobieramy pozycję myszki wraz ze scrollem okna
        if (e.pageX || e.pageY) {
            x = e.pageX;
            y = e.pageY;
        } else {
            x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
		var eDiv = document.querySelector('#help0');
		var eDiv1 = document.querySelector('#help1');
var divPos = eDiv.style.left;
//console.log('divPos:'+divPos)
var a= divPos.slice(0, divPos.length-2)
var divPos1 = eDiv1.style.top;
//console.log('divPos:'+divPos)
var a1= divPos1.slice(0, divPos1.length-2)
   //console.log('a:'+a)
   //var b=myDiv.offsetHeight/2;
   //console.log(b);
   //var c =myDiv.style.left
 // var d=c.slice(0, c.length-2)
  
   //console.log('d:'+d)
   var xa=x-a
   var ya1=y-a1
        myDiv.style.left = xa + 'px';
		myDiv.style.top = ya1 + 'px';
		var myOkno = myDiv.parentNode
		myOkno.style.left =  myDiv.style.left
		myOkno.style.top = myDiv.style.top
		var ppp = myDiv.style.left
		ppp=ppp.slice(0,ppp.length-2)
		
   // }
   
}
function mouseUpDiv(){
myDiv.removeEventListener('mousemove', moveDiv);
//oko2.removeEventListener('mousedown', mouseDownDiv)
}
function minimalize(){
	
	var pas = guzik_.parentNode
	//console.log(pas)
	
	var okn = pas.parentNode
	
	var okn1 = okn.lastChild
	okn1.style.display='none'
	// console.log(okn1)
	
	// okn1.style.display='none'
	okn.style.width='200px'
	guzik_.removeEventListener('click',minimalize)
	guzik_.addEventListener('click',maxi)
}
function maxi(){
	
	var pas = guzik_.parentNode
	//console.log(pas)
	
	var okn = pas.parentNode
	
	var okn1 = okn.lastChild
	okn1.style.display='block'
	okn.style.width='auto'
	guzik_.removeEventListener('click',maxi)
	guzik_.addEventListener('click',minimalize)
}
function guziki(){
		guzik.style.border = '1px solid rgb(240, 240, 240) '
		//guzik.style.borderWidth='10px 10px 10px, 1px '
	guzik.style.backgroundColor='rgb(236, 236, 236)'
	
}
function guziki1(){
		
	guzik_.style.border = '1px solid rgb(240, 240, 240) '
		//guzik.style.borderWidth='10px 10px 10px, 1px '
	guzik_.style.backgroundColor='rgb(236, 236, 236)'
	
}
function guzikiOut(){
		guzik.style.border = ''
	guzik.style.backgroundColor=''
	
}
function guzikiOut1(){
	
	guzik_.style.border = ''
	guzik_.style.backgroundColor=''
}
function guzikiClick(){
	
	
//console.log(guz)
	var pas = guzik.parentNode
	console.log(pas)
	var okn = pas.parentNode
	console.log(okn)
	document.getElementsByTagName('body')[0].removeChild(okn)
	guzik.removeEventListener('click',guzikiClick)
	
}
function indexZ(){
	var qty1 = document.querySelectorAll('.okna')
	for (var x=0; x<qty1.length;x++){
		
		qty1[x].style.zIndex=0;
	}
		console.log(okno)
	okno.style.zIndex = qty1.length-1
}
//createDiv();
createDivHelp()
var myDiv = document.getElementById(pasekName);
var guzik = document.getElementById(guzikName)
var guzik_ = document.getElementById(guzik_Name)
var okno = document.getElementById(oknoName)
guzik.addEventListener('mouseover',guziki)
guzik_.addEventListener('mouseover',guziki1)
guzik.addEventListener('mouseout',guzikiOut)
guzik_.addEventListener('mouseout',guzikiOut1)
guzik.addEventListener('click',guzikiClick)
guzik_.addEventListener('click',minimalize)
myDiv.addEventListener('mousedown', mouseDownDiv);
myDiv.addEventListener('mouseup', mouseUpDiv);
okno.addEventListener('click', indexZ)
myDiv.addEventListener('mouseout', mouseUpDiv);
if (x!=null){
	x()
}

}