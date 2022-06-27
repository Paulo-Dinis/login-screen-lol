$(document).ready(function(){
    selecionou();
    foco();
    login();
});

function selecionou(){
    $(".input").focus(function(){
        let input = $(this).siblings();
        input.addClass("span-active");
    });
};

function foco(){
   $(".input").blur(function(){
        let input = $(this).siblings();
        if($(this).val() == ""){
            input.removeClass("span-active");   
        };
    });
};

function login(){
    $(":password").keydown(function(){
        if(($(".input").length > 0) && ($(this).val().length >= 8)){$(".login_button").removeAttr("disabled")};
    });
};
    