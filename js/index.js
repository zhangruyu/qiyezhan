window.onload=function(){
	//轮播图
	let top=document.getElementsByClassName("top")[0];
	let ImgBox=top.getElementsByClassName("ImgBox")[0];
	let imgs=ImgBox.getElementsByTagName("img");
	let left=ImgBox.getElementsByClassName("icon-left-copy")[0];
	let right=ImgBox.getElementsByClassName("icon-you")[0];
	let btn=ImgBox.getElementsByClassName("btn")[0];
	let btns=btn.getElementsByClassName("iconfont");
	
	let num=0;
	let t=setInterval(move,2000);
	function move(){
		num++;
		if(num==imgs.length){
			num=0;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=5;
			btns[i].className="iconfont icon-huiyuan";
		}
		imgs[num].style.zIndex=10;
		btns[num].className="iconfont icon-huiyuan hot";
	}
	function move1(){
		num--;
		if(num<0){
			num=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=5;
			btns[i].className="iconfont icon-huiyuan";
		}
		imgs[num].style.zIndex=10;
		btns[num].className="iconfont icon-huiyuan hot";
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

	for(let i=0;i<btns.length;i++){
		btns[i].onclick=function(){
			for(let j=0;j<btns.length;j++){
				imgs[j].style.zIndex=5;
				btns[j].className="iconfont icon-huiyuan";
			}
			imgs[i].style.zIndex=10;
			btns[i].className="iconfont icon-huiyuan hot";
			num=i;
		}
	}


	//服务中心
	let box=document.querySelector(".CON2 .right");
	let boxs=box.querySelectorAll(".IMG");
	let left1=box.querySelector(".icon-left-copy");
	let right1=box.querySelector(".icon-you");
	console.log(left1,right1);

	let now=0;
	let next=0;
	let next1=0;
	let flag=true;
	let p=setInterval(move3,2000);
	box.onmouseenter=function(){
		clearInterval(p);
	}
	box.onmouseleave=function(){
		p=setInterval(move3,2000);
	}
	function move3(){
		next=now+1;
		if(now==boxs.length-1){
			next=0;
		}
		next1=next+1;
		if(next==boxs.length-1){
			next1=0;
		}
		boxs[next1].style.left=870+"px";
		animate(boxs[now],{left:-425});
		animate(boxs[next],{left:0});
		animate(boxs[next1],{left:445},function(){
			flag=true;
		})
		now=next;
	}
	function move4(){
		next=now-1;
		if(now==0){
			next=boxs.length-1;
		}
		next1=next-1;
		if(next==0){
			next1=boxs.length-1;
		}
		// console.log(next1,next,now);
		boxs[next1].style.left=-425+"px";
		animate(boxs[now],{left:870});
		animate(boxs[next],{left:445});
		animate(boxs[next1],{left:0},function(){
			flag=true;
		})
		now=next;
		// next=next1;
	}

	right1.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		move3();
	}
	/*left1.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		console.log(now);
		move4();
	}*/
	

}