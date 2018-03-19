$(document).ready(function(){ // when the doc is ready
    
    
    const sections = $('section'); // find all sections
    
    sections.addClass('invisible'); // hide 'em all
    sections.first().removeClass('invisible'); // show the first one
    

    $(document).on('click', 'a[href^="#"]', function (event) { // when you click a # link
        
        event.preventDefault(); // prevent the link

        sections.addClass('invisible'); // hide all sections
        $($.attr(this, 'href')).removeClass('invisible'); // show the target one
    });
    
    
});
