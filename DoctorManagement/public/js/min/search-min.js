$script.ready(["jQuery","Bootstrap"],function(){$(function(){var a=$("#base_url").text(),e=$("#search_input").val(),o=$("#location").val(),n=$("#sort_by").val(),t="type="+n+"&procedure="+e+"&location="+o+"&edu=&page=0&hosp=";$("#load_box").load(a+"search/Backend",t,function(){$(".ajax-loader").fadeOut(),$("[data-toggle='tooltip']").tooltip()}),$("input[name=schools], input[name=hospitals], #ex1").click(function(){var e=[],o=$("input[name=schools]");$.each(o,function(a,o){$(o).is(":checked")&&e.push($(o).val())});var n=[],o=$("input[name=hospitals]");$.each(o,function(a,e){$(e).is(":checked")&&n.push($(e).val())});var t=e.join(", "),c=n.join(", "),s=$("#sort_by").val(),l=$("#search_input").val(),i=$("#location").val(),r="";if(console.log(r),""==i||","==i)var i="all";$("#search-reveal").hasClass("in")&&$("#search-reveal").offcanvas("hide"),$("#search-reveal").offcanvas("hide"),$("#load_box").html('<div class="ajax-loader"><i class="fa fa-circle-o-notch fa-3x fa-spin"></i></div>');var d="type="+s+"&procedure="+l+"&location="+i+"&page=0&edu="+t+"&hosp="+c;$("#load_box").load(a+"search/Backend",encodeURI(d),function(){$(".ajax-loader").fadeOut(),$("body").css("overflow","visible")})}),$("#sort_by").change(function(){var e=$(this).val(),o=$("#search_input").val(),n=$("#location").val();if(""==n||","==n)var n="all";var t="type="+e+"&procedure="+o+"&location="+n+"&page=0&edu=&hosp=";$("#load_box").load(a+"search/Backend",t,function(){$(".ajax-loader").fadeOut()})}),$("form").submit(function(e){e.preventDefault();var o=$("#procedure_text").text(),n=$("#location_text").text();if(""==n)var n="all";window.location=a+"search/"+o+"/"+n+"/distance-desc"})})}),$script.ready("global",function(){var a=document.getElementsByTagName("html")[0],e=$("#fixed_bar"),o=$("#fixed_bar_shim"),n=$("#search-reveal"),t=function(t,c){-1!==["xxs","xs"].indexOf(c)&&o.has(e).length?(o.hide(),e.appendTo(n)):-1===["xxs","xs"].indexOf(c)&&n.has(e).length&&(e.appendTo(o),o.show(),n.hasClass("in")&&$("#search-reveal-toggle").trigger("click")),e.removeClass("hidden-xs"),n.off(".offcanvas").on("show.bs.offcanvas",function(){$(a).addClass("offcanvas-active")}).on("hidden.bs.offcanvas",function(){$(a).removeClass("offcanvas-active")})};$(document).data("mqCurrent")&&t(null,$(document).data("mqCurrent")),$(document).on("mqMatch",t),$("#search-results-canvas").find(".modal").appendTo(document.body)});