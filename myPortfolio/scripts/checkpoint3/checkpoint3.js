var count = 0; //click count
  
$("#imageContainer").rotate({bind:{ //jq plugin for image rotate
        click: function(){ //click function
            $('.top01').rotate({
                duration:0.1, //animate time
                angle: 30,  //rotate image
                animateTo:30, //move image down
                animateTo:0, //move image up
            });
            $(".top02").show(); //show image
            setTimeout(function() { $(".top02").hide(); }, .1); // hide image

            count +=1; //add 1 to click count

            $('#clickCount').attr('value', 'Strike Count: '+count)  //add click count to input
        }     
    }
    
});




