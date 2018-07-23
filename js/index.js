window.onload=function(){
	let top=document.getElementsByClassName("top")[0];
	let ImgBox=top.getElementsByClassName("ImgBox")[0];
	let imgs=ImgBox.getElementsByTagName("img");
	let left=ImgBox.getElementsByClassName("icon-left-copy")[0];
	let right=ImgBox.getElementsByClassName("icon-you")[0];
	
	let num=0;
	let t=setInterval(move,2000);
	function move(){
		num++;
		if(num==imgs.length){
			num=0;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=5;
		}
		imgs[num].style.zIndex=10;
	}
	function move1(){
		num--;
		if(num<0){
			num=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=5;
		}
		imgs[num].style.zIndex=10;
	}
	right.onclick=function(){
		move();
	}
	left.onclick=function(){
		move1();
	}
	ImgBox.onmouseenter=function(){
		clearInterval(t);
	}
	ImgBox.onmouseleave=function(){
		t=setInterval(move,2000);
	}
}