$(document).ready(function() {
    $("#record").click(function() {
        $("#boba-full").hide();
        $("#laptop-off").hide();
        $(".return").show();
        $("#record-word").show();
    })

    $(".return").click(function() {
        $(".return").hide();
        $("#record-word").hide();
        $("#boba-word").hide();
        $("#laptop-word").hide();
        $("#boba-full").show();
        $("#laptop-off").show();
        $("#record").show(); 
    })

    $("#boba-full").click(function() {
        $("#record").hide();
        $("#laptop-off").hide();
        $(".return").show();
        $("#boba-word").show();
    })

    $("#laptop-off").click(function() {
        $("#record").hide();
        $("#boba-full").hide();
        $(".return").show();
        $("#laptop-word").show();
    })

});