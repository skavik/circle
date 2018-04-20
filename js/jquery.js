$(document).on('mousemove', function (e) {
    $('#bg').css({
        left: -e.pageX / 100,
        top: -e.pageY / 100
    });

});

$( function() {
				
    $( '#cd-dropdown' ).dropdown( {
        gutter : 4,
        stack : true,
        slidingIn : 1,
  
    } );

});
