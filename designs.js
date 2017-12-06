var color = $('#colorPicker').val();
$('#colorPicker').on('input', function (){
    color = $('#colorPicker').val();
    console.log(color);
});


function makeGrid() {
    var canvas = $('#pixel_canvas');
    var gridHeigth = $('#input_height').val();
    var gridWidth = $('#input_width').val();

    canvas.empty();

    for(var row = gridHeigth; row > 0; row--){
        canvas.append('<tr></tr>');
        for(var col = gridWidth; col > 0; col--)
            canvas.children('tr').last().append('<td></td>');
        
    }
}

$("#sizePicker").submit(function(event){
    event.preventDefault();
    makeGrid();

    $('#pixel_canvas').on("mousedown mouseenter mousemove", "td", function(event) {
            event.preventDefault();
            if(event.which === 1){
                $(this).css("background-color",color); 
            }
            
            if(event.shiftKey){
                $(this).css("background-color", "white");
            }
    });

    $('#reset_button').click(function(){
        $('td').css("background", "none");
    });

    $('#fill_button').click(function(){
        $('td').css("background", color);
    });
});