		function fa(a,b,c){
			//滑块移动
			function move(e){
			a.style.left = e.offsetX - yw/2 + 'px';
			b.style.width = e.offsetX + 'px';
		}
			
			//绑定层按下事件
		c.onmousedown = function(e){
			//按下滑块移动
			move(e);
			
			//按下改变rgb的数据
			var dw = parseFloat(b.style.width);
				var shu = dw/zw*255;
				b==jdt?red=shu:'';
				b==jdt1?greed=shu:'';
				b==jdt2?blue=shu:'';	
				bg.style.backgroundColor='rgb('+red+','+greed+','+blue+')';
				
				//绑定层按下移动事件
			c.onmousemove = function(e){
				e.preventDefault();
				
				//按下移动滑块
				move(e);
				
				//按下移动改变rgb的数据
				var dw = parseFloat(b.style.width);
				var shu = dw/zw*255;
				b==jdt?red=shu:'';
				b==jdt1?greed=shu:'';
				b==jdt2?blue=shu:'';
			   bg.style.backgroundColor='rgb('+red+','+greed+','+blue+')';   
			}
		}
		
		//离开绑定层去除移动事件
		c.onmouseleave = function(){
			this.onmousemove = null;
		}
		
		//松开绑定层去除移动事件
		c.onmouseup = function(){
			this.onmousemove = null;
		}
	}
		

