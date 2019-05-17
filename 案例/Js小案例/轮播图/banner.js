var t = true;
var w = $('.banner li').width();

//移动
function next(){
	var l = $('.banner').position().left;
    	//图移动
		if(l <=-6000){
			l = 0;
		$('.banner').css({
			left:l + 'px'
		})
		}
		$('.banner').animate({
		left: l - w + 'px'
	},500)
	//点移动
	var i = (l - w) / -w;
	$('.index li').eq(i-1).addClass('a').siblings().removeClass('a');
}

//移动
function prev(){
	var l = $('.banner').position().left;
	//图移动
	if(l>=0){
		l=-6000
		$('.banner').css({
			left:l + 'px'
		})
	}
	$('.banner').animate({
		left: l + w + 'px'
	},500)
	//点移动
	var i = (l+w)/-w;
	var index = i<=0?5:i;
	$('.index li').eq(index-1).addClass('a').siblings().removeClass('a');
}

//下一张
	$('#next').on('click',function(){
		//控制点击
		if(t){
    	t = false;
    	next();//移动
	setTimeout(function(){
		t = true;
	},500)
	}	
})
	
//上一张
	$('#prev').on('click',function(){
	//控制点击
	if(t){
		t = false;
	    prev();//移动
	setTimeout(function(){
		t = true;
	},500)
	}	
})

//点换色
$('.index li').on('click',function(){
	var i = $(this).index()+1;
	$(this).addClass('a').siblings().removeClass('a');
	$('.banner').animate({
		left: -w * i + 'px'
	},500)
})

     //轮播定时器
     var timer = null;
        function autoPlay () {
            timer = setInterval(function () {
                next();//移动
            },1000);
        }
        autoPlay();
        $('.box').on('mouseover',function(){
        	clearInterval(timer); //清除定时器
        }) 
        $('.box').on('mouseout',function(){
        	autoPlay(); //定时器
        })