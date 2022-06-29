function clock(){
    setInterval(function(){
        console.log('function works!')
        var time = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
        $("#time").text(time);
    },1000)
}
clock();
