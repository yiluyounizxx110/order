$(function(){
	bindEvent();
});
function bindEvent(){
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
}
//链接跳转
function mutilCheckClick(obj,event){
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
	ul_sc.addClass("m_h_160");
	parent.find(".category_item_list").removeClass("multi_check");
	parent.find(".category_opr").removeClass("none");
	parent.find(".multi_check_info").addClass("none");
}
