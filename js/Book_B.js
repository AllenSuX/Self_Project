var month_olympic = [31,29,31,30,31,30,31,31,30,31,30,31];
var month_normal = [31,28,31,30,31,30,31,31,30,31,30,31];
var month_name = ["January","Febrary","March","April","May","June","July","Auguest","September","October","November","December"];
var holder = document.getElementById("days");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var ctitle = document.getElementById("calendar-title");
var cyear = document.getElementById("calendar-year");
var my_date = new Date();
var my_year = my_date.getFullYear();
var my_month = my_date.getMonth();
var my_day = my_date.getDate();
function dayStart(month, year) {
	var tmpDate = new Date(year, month, 1);
	return (tmpDate.getDay());
}
function daysMonth(month, year) {
	var tmp = year % 4;
	if (tmp == 0) {
		return (month_olympic[month]);
	} else {
		return (month_normal[month]);
	}
}
function refreshDate(){
	var str = "";
	var totalDay = daysMonth(my_month, my_year); 
	var firstDay = dayStart(my_month, my_year); 
	var myclass;
	for(var i=1; i<firstDay; i++){ 
		str += "<li></li>";
	}
	for(var i=1; i<=totalDay; i++){
		if((i<my_day && my_year==my_date.getFullYear() && my_month==my_date.getMonth()) || my_year<my_date.getFullYear() || ( my_year==my_date.getFullYear() && my_month<my_date.getMonth())){ 
			myclass = " class='lightgrey dateli'"; 
		}else if (i==my_day && my_year==my_date.getFullYear() && my_month==my_date.getMonth()){
			myclass = " class='green greenbox dateli'";
		}else{
			myclass = " class='darkgrey dateli'";
		}
		str += "<li"+myclass+">"+i+"<div clss="+i+"><img src='./images/red.svg'><img src='./images/red.svg'><img src='./images/green.svg'></div></li>";
    }

	holder.innerHTML = str; 
	ctitle.innerHTML = month_name[my_month]; 
	cyear.innerHTML = my_year; 
}
refreshDate(); 
prev.onclick = function(e){
	e.preventDefault();
	my_month--;
	if(my_month<0){
		my_year--;
		my_month = 11;
	}
	refreshDate();
}
next.onclick = function(e){
	e.preventDefault();
	my_month++;
	if(my_month>11){
		my_year++;
		my_month = 0;
	}
	refreshDate();
}
newUU ='<div><img src="./images/red.svg"><img src="./images/red.svg"><img src="./images/green.svg"></div>';
 $(document).on("click", "li.darkgrey", function(){
    $(".dateli").removeAttr('style');
    $(".dateli div").removeAttr('style');
    $(".dateli div").html(newUU);
    newstr="";
    
    $(this).css({
        backgroundColor:'#e9f8df',
        position:'relative'
        
    });
    
    $(this.children).css({
        backgroundColor:'lightgray',
        borderRadius:'20px',
        position:'absolute',
        width:'120px',
        left:'50%',
        transform: 'translateX(-50%)'
    });
	console.log("123");
    newstr+="<div><p class='tt1'>上</p><img src='./images/red.svg'><p class='tt1'>中</p><img src='./images/red.svg'><p class='tt1'>下</p><img src='./images/green.svg'></div>"
    $(this.children).html(newstr);
});


