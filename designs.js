// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
 
var color = $('#colorPicker').val();
$('#colorPicker').on('input', function (){
    color = $('#colorPicker').val();
    console.log(color);
});

$("#sizePicker").submit(function(event){
    event.preventDefault();
    makeGrid();

    $('td').on("mousedown mouseover", function(event) {
        switch (event.which) {
            case 1:
                $(this).css("background-color",color);
                console.log("sadasd");
                break;
            case 3:
                event.preventDefault();
                $(this).css("background-color", "white");
                break;
        }
    });

    $('#reset_button').click(function(){
        $('td').css("background", "none");
    });

    $('#fill_button').click(function(){
        $('td').css("background", color);
    });
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


