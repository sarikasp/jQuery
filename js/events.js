// Form Events:

// $(document).ready(function(){

//     // // focus on inputbox,etc then event is trigger
//     // $('#sname, #sclass, #scountry').focus(function(){
//     //     $(this).css("background-color", "#ff0066");
//     // });


//     // // blur hide the focus on inputbox dropdounlist the it's color change
//     // $('#sname, #sclass, #scountry').blur(function(){
//     //     $(this).css("background-color", "");
//     // });

//     // // change is only working on select box, we have to change any value the event is trigger
//     // $('#scountry').change(function(){
//     //    // $(this).css("background-color", "#cc0052");
//     //     var a = $(this).val();
//     //     $('#test').html(a);
//     // });


//     // // // select the value of inputbaox the it's color will be change
//     // $('#sname, #sclass').select(function(){
//     //     $(this).css("background-color", "yellow")
//     // });


//     // submit: when you click submit button event is trigger
//     $('#sform').submit(function(){
//         alert('Form Submitted....!!!!');
//     });


// });


// Window Events:

$(document).ready(function(){
    $(window).scroll(function(){
        console.log("you are scrolling");
    });

    $('#box').scroll(function(){
        console.log("you are scrolling");
    });


    $(window).resize(function(){
        console.log("you are Resizing Window");
    });

});