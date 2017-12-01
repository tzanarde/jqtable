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
    }).sortable({
        connectWith: "table"
    }).disableSelection().draggable({
        snap: true,
        snapMode: "both",
        axis: "x",
        scope: "tasks"
    });

    $("tbody tr").selectable({
        filter: "td",
        selected: function(){
            var elemento_clicado = $(this);
            elemento_clicado.children().addClass("ui-selected");
        }
    });
   $("table").droppable({
       accept: "th"
   })
});

$("td").mousedown(function () { 
    var widget = $( ".selector" ).selectable( "widget" );
    console.log(widget);
});