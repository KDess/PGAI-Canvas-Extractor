$( document ).ready(function() {

    $( "#extractButton" ).click ( function() {
        $("#exportedArea").html("");
        var objPrompts = jQuery.parseJSON( $("#jsonInput").val() );
        var index = 0;
        imgObj = objPrompts["pai-canvas-image-assets"];

        $.each(objPrompts["pai-canvas-state"].shapes, function(key, parsedValue){
            
            if(parsedValue.generationInfo != null) {

                jQuery.each( imgObj, function( i, val ) {
                    if(i == parsedValue.assetId ) {
                        var appendColumnImage = $("<div class='col'><a href='"+val.src+"' class='imgPreview' target='_blank'><img src='"+ val.src + "' width=250></img></a><div class='smallText text-pg-300'>"+ parsedValue.generationInfo.prompt+"</div></div>");
                        $("#exportedArea").append(appendColumnImage);
                    }
                });
            }

            index++;
            
        });
    });

    $("#clearButton").click ( function() {
        $("#exportedArea").html("");
        $("#jsonInput").val("");

    });

});
