var body = $('.container');
// var todoList = JSON.parse(localStorage.getItem(savedTodos)) || []
var times = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
var pulledTodos = JSON.parse(localStorage.getItem("saved"))|| []
var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// populateDates = function(){
//     for(i = 0; i < times.length; i++){
//         $('.container').append(`
//         <div class='row col-12'>
//             <div id="hb${times[i]}" class='col-2 hour-box'>
//             ${times[i]}
//             </div>
//             <input type="text" id='frm${times[i]}' class="form col-8 custom-input" placeholder="your text here" aria-label="Recipient's username" aria-describedby="button-addon2">
//             <button id= 'btn${times[i]}' class="col-2 btn btn-outline-secondary custom-submit" type="button" id="button-addon2">Button</button>
//         </div>
//         `)  
//     };
// };
// populateDates();
$('.custom-submit').on('click', function(){
    var todo = $(this).siblings('.custom-input').val();
    var timeStamp = $(this).siblings('.hour-box').text().trim();
    var savedTodos = {timeStamp, todo}
    var pulledTodos = JSON.parse(localStorage.getItem("saved"))|| [];
    pulledTodos.push(savedTodos)
    localStorage.setItem("saved", JSON.stringify(pulledTodos))
})

$(".hour-box").each(function(index){
    if(moment($(this).text().trim(), ["h:mm A"]).format("H") < moment().format('H')){
        $(this).css('background', "#F24E29") && $(this).siblings('button').css('background', "#F24E29").prop('disabled', 'true') && $(this).siblings("input").prop('disabled', 'true')
    }else if (moment($(this).text().trim(), ["h:mm A"]).format("H") === moment().format('H')){
        $(this).css('background', '#F2B9B3') && $(this).siblings('button').css('background', '#F2B9B3')
    }
});
var save= function(){
    $(this).siblings('input').text(winner);
};
$('.hour-box').each(function(index){
    var toGet = JSON.stringify($(this).text().trim())
    var winner = ""
    for (i = 0; i < pulledTodos.length; i++){
        if(pulledTodos[i].timeStamp=toGet){
            $(this).siblings('input').text(winner);
            return false
            // $(this).siblings('input').val(pulledTodos[i].todo);
            // console.log(pulledTodos[i].timeStamp)
        };    
    };
    // var save= function(){
    //     $(this).siblings('input').text(winner);
    // save()
});

