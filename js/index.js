(function(){
	var index = {
		//初始化
		init: function () {
			index.dropmenu('.peploe_view','.dropinfo');
		},

		//绑定事件
		bindEvents : function () {
			
        	//
		},

		//渲染
		render: function () {

		},

		//请求时间
		query : function () {

		},

		// 会员下拉菜单
			// alert("aa");
		dropmenu : function(elm,showelm){
			// 会员下拉菜单
			var t1,t2;
			$(elm).on('mouseenter',function(){
				//清除t2计时器
				clearTimeout(t2);
				// 定义t1计时器
				t1 = setTimeout(function(){
					$('#navDropBg').slideDown();
					$(showelm).slideDown();
				},300)
			}).on('mouseleave',function(){
				//清除t1计时器
				clearTimeout(t1);
				// 定义t2计时器
				t2 = setTimeout(function(){
					$('#navDropBg').slideUp();
					$(showelm).slideUp();
				},300)
			});
		}
	};
	index.init();
})();