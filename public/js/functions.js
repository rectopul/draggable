$(document).ready(function () {

    let li_width = $('.drag-wrapper > ul > li').width(),
    calculate_width = (((li_width * 10)+150)-$('.drag-wrapper > ul').width())+5
    
    
    $(function() {
        $( ".drag-wrapper > ul" ).draggable({
            axis : 'x',
            stop: function(event, ui) {
                if(ui.position.left>0)
                {   
                //alert('Return back');
                $(".drag-wrapper > ul").animate({"left": "0px"}, 600);
                }
                else if(ui.position.left<-calculate_width)
                {
                    $(".drag-wrapper > ul").animate({"left": "-"+calculate_width}, 600);
                }  
            }
            
        })
    })

    $(function() {
        let click_next = 0
        

        

        $('.arr-next').click(function (e) { 
            e.preventDefault()
            click_next++
            let elmsize = $( '.drag-wrapper > ul > li:eq('+click_next+')' ).outerWidth()
            $(".drag-wrapper > ul").animate({"left": "-"+((elmsize*click_next)+(15*click_next))}, 600)
            console.log(click_next)
        })

        $('.arr-prev').click(function (e) { 
            e.preventDefault()
            click_next--
            let elmsize = $( '.drag-wrapper > ul > li:eq('+click_next+')' ).outerWidth()
            $(".drag-wrapper > ul").animate({"left": '-'+((elmsize*click_next)+(15*click_next))}, 600)
            console.log(click_next)
        })
    })
})