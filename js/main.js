
//jQuery function triggers when doc finish loading

$(document).ready(function() {

    $('section#screenshots a').on('click', function() {
      //select the modal div id / source attribute -
      //- add the second refence 'this' is the click fucntion access attribute
        $('div#modal img').attr('src', $(this).attr('data-image-url') )
    });

});