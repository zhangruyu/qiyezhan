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
	let yuan=box.querySelectorAll(".icon-huiyuan");
	console.log(left1,right1);

	let now=0;
	let next=0;
	let next1=0;
	let flag=true;
	let New=0;
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
		/*yuan.forEach(function(v){
			v.classList.remove("hot7");
		})
		yuan[next].classList.add("hot7");*/
		boxs[next1].style.left=870+"px";
		animate(boxs[now],{left:-425});
		animate(boxs[next],{left:0});
		animate(boxs[next1],{left:445},function(){
			flag=true;
		})
		now++;
		if(now==boxs.length){
			now=0;
		}
	}
	function move4(){
		next=now+1;
		if(now==boxs.length-1){
			next=0;
		}
		next1=now-1;
		if(now==0){
			next1=boxs.length-1;
		}
		boxs[next1].style.left=-425+"px";
		animate(boxs[next],{left:870});
		animate(boxs[now],{left:445});
		animate(boxs[next1],{left:0},function(){
			flag=true;
		})
		now--;
		if(now<0){
			now=boxs.length-1;
		}
	}

	right1.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		move3();
	}
	left1.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		move4();
	}
	/*yuan.forEach(function(v,i){
		v.onclick=function(){
			if(i>next+1){
				animate(boxs[now],{left:-425});
				if(now==boxs.length-1){
					animate(boxs[0],{left:-425});
				}
				else{
					animate(boxs[now+1],{left:-425});
				}
				now=i;
				boxs[now].style.left=870+"px";
				if(now==boxs.length-1){
					boxs[0].style.left=1315+"px";
				}
				else{
					boxs[now+1].style.left=1315+"px";
				}
				animate(boxs[now],{left:0});
				if(now==boxs.length-1){
					animate(boxs[0],{left:445});
				}
				else{
					animate(boxs[now+1],{left:445});
				}
				console.log(now,next);
			}
			if(i=next+1){
				animate(boxs[now],{left:-425});
				/*if(now==boxs.length-1){
					animate(boxs[0],{left:-425});
				}
				else{
					animate(boxs[now+1],{left:-425});
				}*/
				// now=i;
				// boxs[now].style.left=870+"px";
				/*if(now==boxs.length-1){
					boxs[0].style.left=870+"px";
				}
				else{
					boxs[now+1].style.left=870+"px";
				}
				animate(boxs[now],{left:0});
				if(now==boxs.length-1){
					animate(boxs[0],{left:445});
				}
				else{
					animate(boxs[now+1],{left:445});
				}
				now++;
				console.log(now,next);
			}
		}
	})
*/
}