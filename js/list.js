$(function(){
	bindEvent();
});
function bindEvent(){
	//更多事件绑定
	$(".category_opr_btn.more").click(function(){
		var parent = $(this).parents(".category_item").first();
		var ul_sc = parent.find(".category_item_list").first();
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).text("更多");
			ul_sc.removeClass("m_h_160");
		}else{
			$(this).addClass("active");
			$(this).text("收起");
			ul_sc.addClass("m_h_160");
		}
		if(parent.hasClass("show_all")){
			parent.removeClass("show_all");
		}else{
			parent.addClass("show_all");
		}
	});
	//多选事件绑定
	$(".category_opr_btn.mul_sel").click(function(){
		var parent= $(this).parents(".category_item");
		var ul_sc = parent.find(".category_item_list").first();
		if(!parent.hasClass("show_all")){
			parent.addClass("show_all");
		}
		ul_sc.addClass("m_h_160");
		parent.find(".category_item_list").addClass("multi_check");
		parent.find(".category_opr").addClass("none");
		parent.find(".multi_check_info").removeClass("none");
	});
	//更多选项展开折叠
	$("#categoryMore .cm_wrap").click(function(){
		if($(this).hasClass("opened")){
			$(this).removeClass("opened");
			$(".cate_in .category_item:gt(3)").addClass("none");
			$(this).html("更多选项（"+ $(this).attr("data-more") +"）<i></i>");
		}else{
			$(this).addClass("opened");
			$(".cate_in .category_item").removeClass("none");
			$(this).html("收起<i></i>");
		}
	});
	//综合、销量、新品、评论事件绑定
	$(".gm_tools.gm_select").click(function(){
		if(!$(this).hasClass("active")){
			$(this).addClass("active").siblings(".gm_tools.gm_select").removeClass("active");
			$(".gm_tools.price").removeClass("active").removeClass("down").removeClass("up");
		}
	});
	//价格排序
	$(".gm_tools.price").click(function(){
		if(!$(this).hasClass("active")){
			$(this).addClass("active").removeClass("down").addClass("up");
			$(this).siblings(".gm_tools.gm_select").removeClass("active")
		}else{
			if($(this).hasClass("up")){
				$(this).addClass("down").removeClass("up");
			}else{
				$(this).removeClass("down").addClass("up");
			}
		}
	});
	//翻页事件
	$(".page_info .next,.page_info .pre").click(function(){
		if($(this).hasClass("disable")){
			return false;
		}else{
			alert("翻页");
		}
	});
	//仅显示有货和商家包邮多选按钮
	$(".free_post,.in_storage").click(function(){
		if($(this).hasClass("gm_selected")){
			$(this).removeClass("gm_selected");
		}else{
			$(this).addClass("gm_selected");
		}
	});
	//清空按钮
	$(".price_arrange .clear").click(function(){
		$(this).parents(".pc_content").find(".pc_content_top input[type='text']").val("");
	});
	
	//底部翻页
	$(".pagination_content_div a.page_num").click(function(){
		if(!$(this).hasClass("cur_page")){
			$(this).addClass("cur_page").siblings(".pagination_content_div a.page_num").removeClass("cur_page");
		}
	});
}
//链接跳转
function mutilCheckClick(obj){
	var $this = $(obj);
	if(!$this.parents(".category_item_list").hasClass("multi_check")){
		alert("请在mutilCheckClick中写对应的搜索逻辑");
		return false;
	}
	if($this.hasClass("checked")){
		$this.removeClass("checked");
	}else{
		$this.addClass("checked");
	}
	var siblings = $this.parents(".category_item_list").find("ul li a.checked");
	var parent = $this.parents(".category_item").find(".multi_btn_confirm");
	if(siblings.length > 0){
		parent.removeClass("none");
	}else{
		parent.addClass("none");
	}
	return false;
}
function cancelMutilCheck(obj){
	var parent= $(obj).parents(".category_item").first();
	var ul_sc = parent.find(".category_item_list").first();
	if(parent.hasClass("show_all")){
		parent.removeClass("show_all");
	}
	ul_sc.removeClass("m_h_160");
	parent.find(".category_item_list").removeClass("multi_check");
	parent.find(".category_opr").removeClass("none");
	parent.find(".multi_check_info").addClass("none");
}
