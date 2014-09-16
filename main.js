var image=new Array("Images/flower1.jpg", "Images/flower2.jpg", "Images/quilling.jpg","Images/calli.jpg","Images/crotchet.jpg");
var timeout={};
function stopIt(){
	clearTimeout(timeout);
}
function changeimage(dvX){
	var dvi=document.getElementById(dvX);
	if(!dvi.count || dvi.count == image.length )
		dvi.count=0;
	dvi.src=image[dvi.count];
	dvi.alt=image[dvi.count];
	dvi.count=dvi.count+1;
	timeout=setTimeout('changeimage("'+dvX+'")',3000);
}