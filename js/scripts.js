$(document).ready(function() {
    $("th").resizable({
        animate: true, 
        ghost: true,
        animateDuration: "slow",
        animateEasing: "easeOutBounce",
        maxHeight: 25,
        handles: "e",
        start: function(){
            console.log("Start Risize");
        },
        stop: function(){
            console.log("Stop Risize");
        },
        resize: function(){
            console.log("Risizing");
        },
        create: function(){
            console.log("Create Risize");
        }              
    }).disableSelection();
    
    $('.defaultTable').dragtable()

    $("th").sortable({
        connectWith: "table",
        start: function(event, ui){
            console.log("Start Sorting");
        }
    });
});

$("tbody tr").selectable({
    filter: "td",
    selected: function(){
        var elemento_clicado = $(this);
        elemento_clicado.children().addClass("ui-selected");
    }
});

$("td").mousedown(function () { 
    var widget = $( ".selector" ).selectable( "widget" );
    console.log(widget);
});
