var body = $('.container');
var times = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
var pulledTodos = JSON.parse(localStorage.getItem("saved"))|| []
var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
$('.custom-submit').on('click', function(){
    var todo = $(this).siblings('.custom-input').val();
    var timeStamp = $(this).siblings('.hour-box').text().trim();
    var savedTodos = {timeStamp, todo}
    var pulledTodos = JSON.parse(localStorage.getItem("saved"))|| [];
    pulledTodos.push(savedTodos)
    localStorage.setItem("saved", JSON.stringify(pulledTodos))
});

$(".hour-box").each(function(index){
    if(parseInt(moment($(this).text().trim(), ["h:mm A"]).format("H")) < moment().format('H')){
        $(this).css('background', "#F24E29").siblings('button').css('background', "#F24E29").prop('disabled', 'true').siblings("input").prop('disabled', 'true')
    }else if (moment($(this).text().trim(), ["h:mm A"]).format("H") === moment().format('H')){
        $(this).css('background', '#F2B9B3').siblings('button').css('background', '#F2B9B3')
    }
});
var save= function(){
    $(this).siblings('input').text(winner);
};
$('.hour-box').each(function(index){
    var toGet = JSON.stringify($(this).text().trim())
    for (i = 0; i < pulledTodos.length; i++){
        console.log(pulledTodos[i].timeStamp)
        if(JSON.stringify(pulledTodos[i].timeStamp)===toGet){
            $(this).siblings('input').val(pulledTodos[i].todo);
        };    
    };
});
