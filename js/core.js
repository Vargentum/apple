// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

/*
 *	CSSrefresh v1.0.1

(function(){var a={array_filter:function(a,b){var c={};for(var d in a){if(b(a[d])){c[d]=a[d]}}return c},filemtime:function(a){var b=this.get_headers(a,1);return b&&b["Last-Modified"]&&Date.parse(b["Last-Modified"])/1e3||false},get_headers:function(a,b){var c=window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest;if(!c){throw new Error("XMLHttpRequest not supported.")}var d,e,f,g,h=0;try{c.open("HEAD",a,false);c.send(null);if(c.readyState<3){return false}d=c.getAllResponseHeaders();d=d.split("\n");d=this.array_filter(d,function(a){return a.toString().substring(1)!==""});e=b?{}:[];for(g in d){if(b){f=d[g].toString().split(":");e[f.splice(0,1)]=f.join(":").substring(1)}else{e[h++]=d[g]}}return e}catch(i){return false}}};var b=function(){this.reloadFile=function(b){for(var c=0,d=b.length;c<d;c++){var e=b[c],f=a.filemtime(this.getRandom(e.href));if(e.last){if(e.last!=f){e.elem.setAttribute("href",this.getRandom(this.getHref(e.elem)))}}e.last=f}setTimeout(function(){this.reloadFile(b)},1e3)};this.getHref=function(a){return a.getAttribute("href").split("?")[0]};this.getRandom=function(a){return a+"?x="+Math.random()};var b=document.getElementsByTagName("link"),c=[];for(var d=0,e=b.length;d<e;d++){var f=b[d],g=f.rel;if(typeof g!="string"||g.length==0||g=="stylesheet"){c.push({elem:f,href:this.getHref(f),last:false})}}this.reloadFile(c)};b()})()
 */
$(function(){
    /*emulate css-multicolumns for old browsers*/
  if( !(Modernizr.csscolumns) ){
    $('.h-columinze-2').columnize({
      columns: 2
    });
    $('.h-columinze-3').columnize({
      columns: 3
    });
  }

});

/*input functionality on service page*/
/*$(function(){
    var $primaryInput = $(this).find('.js-checkNotebook-input-primary');
    var $secondaryInput = $(this).find('.js-checkNotebook-input-secondary');

    $primaryInput.change(function(){
        if ($primaryInput.val()){
            $secondaryInput.removeAttr('disabled');
            $secondaryInput.selectBox({disable: true});
        }
        else{
            $secondaryInput.attr('disabled', 'disabled');
            $secondaryInput.selectBox({enable: true});
        }
    });
});*/
/*feedbacks functionality*/
$(function(){
    $('.b-feedback__createAnswer').click(function(){
        var $form = $('body').children('.b-feedbacksPage__unit__form').clone(true).removeClass('is-hidden');
        var $parent = $(this).parents('.b-feedbacksPage__unit');
        $form.appendTo($parent);
        $parent.addClass('active');
//        $(window).animate({
//            scrollTop: $parent.offset().top
//        }, 1000);
        $(window).scrollTop($parent.offset().top);
        $(this).hide();
        event.preventDefault();
    });
    $('.b-feedback__deleteAnswer').click(function(){
        var $parent = $(this).parents('.b-feedbacksPage__unit');
        var $form = $(this).parents('.b-feedbacksPage__unit__form');
        $parent.removeClass('active');
        $parent.find('.b-feedback__createAnswer').show();
        $form.remove();
        event.preventDefault();
    });
});

/*tabs*/
$(function(){
    $('.b-tabs__nav').tabs('.b-tabs .b-tabs__unit');
    $('.b-tabs__nav__unit').click(function(e){
        e.preventDefault();
    });
});
/*custom selectbox*/
$(function(){
    $('select').selectBox();
});
/*audio player*/
$(function(){
    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
                oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
            });
        },
        swfPath: "/js/plugins/j-player",
        supplied: "m4a, oga",
        cssSelectorAncestor: '#jp_container_1'
    });
    $("#jquery_jplayer_2").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
                oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
            });
        },
        swfPath: "/js/plugins/j-player",
        supplied: "m4a, oga",
        cssSelectorAncestor: '#jp_container_2'
    });
});