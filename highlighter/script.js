<script type="text/javascript">
 
var colorpickertf = false;
var colorpickerpointX = 0;
var colorpickerpointY = 0;
var colorpickeroffsetX = 0;
var colorpickeroffsetY = 0;
jQuery("#colorpicker .cpright").mousedown(function(event){
  colorpickertf = true;
  jQuery("#cpright_selector").css("left", (event.offsetX-5)+"px");
  jQuery("#cpright_selector").css("top", (event.offsetY-5)+"px");
   
  colorpickeroffsetX = event.offsetX-5;
  colorpickeroffsetY = event.offsetY-5;
  colorpickerpointX = event.pageX;
  colorpickerpointY = event.pageY;
});
 
jQuery("#cpright_selector").mousedown(function(event){
  colorpickertf = true;
  var ps = jQuery("#cpright_selector").position();
  jQuery("#cpright_selector").css("left", (ps.left+event.offsetX-5)+"px");
  jQuery("#cpright_selector").css("top", (ps.top+event.offsetY-5)+"px");
   
  colorpickeroffsetX = ps.left+event.offsetX-5;
  colorpickeroffsetY = ps.top+event.offsetY-5;
  colorpickerpointX = event.pageX;
  colorpickerpointY = event.pageY;
});
jQuery("#cpright_selector").mousemove(function(event){
  if(colorpickertf){
    var ps = jQuery("#cpright_selector").position();
    var csleft = event.pageX - colorpickerpointX + colorpickeroffsetX;
    var cstop = event.pageY - colorpickerpointY + colorpickeroffsetY;
     
    if(csleft>=123) csleft = 123;
    if(csleft<=-5) csleft = -5;
    if(cstop>=123) cstop = 123;
    if(cstop<=-5) cstop = -5;
 
    jQuery("#cpright_selector").css("left", csleft+"px");
    jQuery("#cpright_selector").css("top", cstop+"px");
  }
});
 
jQuery(window).mousemove(function(event){
  if(colorpickertf){
    var ps = jQuery("#cpright_selector").position();
    var csleft = event.pageX - colorpickerpointX + colorpickeroffsetX;
    var cstop = event.pageY - colorpickerpointY + colorpickeroffsetY;
     
    if(csleft>=123) csleft = 123;
    if(csleft<=-5) csleft = -5;
    if(cstop>=123) cstop = 123;
    if(cstop<=-5) cstop = -5;
 
    jQuery("#cpright_selector").css("left", csleft+"px");
    jQuery("#cpright_selector").css("top", cstop+"px");
  }
});
 
jQuery(window).mouseup(function(event){
  colorpickertf = false;
});
</script>