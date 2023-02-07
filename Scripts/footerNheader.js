function header() 
{
    $("header").append
    (
        `<span id='Menu'> 
            <button id='MenuLogo'><a href='index.html'><span id='logo'>pro</span><i><b>flex</b></i></a></button>
            <div id='MenuButtons'>
                <button class='MenuButton' '><a href='Specialities/Specialities.html '>Specialities</a></button > 
                <button class='MenuButton '><a href=' '>Just English</a></button> 
                <button class='MenuButton '><a href=' '>Proflex+</a></button> 
                <button class='GradientButton LogInColor '>Log in</button> 
            </div> 
        </span> 
        <hr>
        <nav class="LineOfOpenPages"></nav>`
    );
}
function footer() 
{
    $("footer").append
    (
        `<div class='BigFoot'>
        <div id='FootLogo'> <a href='index.html'><span id='logo'>pro</span>flex</a> </div>
        <div id='contactsNthemesColumn'>
            <div class='FooterColumn' id='FirstColumn'>
                <div id='Contacts'>
                    <div id='ContactsHeading'> Contact (Polytech) </div>
                    <div>Республика Беларусь<br>г. Гродно, ул. Советских <br>пограничников 2</div>
                </div>
                <div id='emailNwebsite'>
                    <a href='mailto:polyteh@mail.grodno.by'>
                        <div class='footerRealBtn'>E-mail </div>
                    </a>
                    <a href='http://ggpk.by/'>
                        <div class='footerRealBtn'>Website</div>
                    </a>
                </div>
                <div id='IconsMob'>
                    <a href='https://vk.com/club107460874'>
                        <div class='vk'></div>
                    </a>
                    <a href=' https://www.instagram.com/polytech_grodno/'>
                        <div class='inst'></div>
                    </a>
                    <a href='tel:+375152393602'>
                        <div class='telef'></div>
                    </a>
                </div>
            </div> <span id='ThemeColumns'> <div class='FooterColumn' id='Stolb1'> <a href='Specialities/Specialities.html'> <div class='ColumnName'>Specialities</div></a> <div class='ColumnBtn'>Programmers</div> <div class='ColumnBtn'>Architects</div> <div class='ColumnBtn'>Mechanics</div> <div class='ColumnBtn'>Builders</div> <div class='ColumnBtn'>Electricians</div> <div class='ColumnBtn'>Economists</div> </div> <div class='FooterColumn ColumnButtons'> <a href=''><div class='ColumnName'>Just English</div></a> <div class='ColumnBtn'>Topic one</div> <div class='ColumnBtn'>Topic two</div> <div class='ColumnBtn'>Topic three</div> <div class='ColumnBtn'>Topic four</div> <div class='ColumnBtn'>Topic five</div> <div class='ColumnBtn'>Topic six</div> </div> <div class='FooterColumn ColumnButtons'> <div class='ColumnName'>Proflex+</div> <div class='ColumnBtn'>How to use it</div> <div class='ColumnBtn'>About the site</div> <div class='ColumnBtn'>Our teachers</div> <div class='ColumnBtn'>Feedback</div> </div> </span> </div>
            <div style='margin-top:2em'>
                <div id='AllRightsReserved'> © 2022 All Rights Reserved </div>
                <div id='Author'> Made with love by <a id='footerlinks' href='https://vk.com/nanananana_come_on'>Polina</a> </div>
            </div>
        </div>`
    ) 
}
function head(){
    $('head').append
    (
        `<title></title>
        <meta charset="utf-8">
        <meta name="google" value="notranslate" >
        <meta name="google" content="notranslate">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords" content="English, Professional vocabulary, Learning English language, Students, College, Polytech">
        <meta name="description" content="A website dedicated to the study of professional vocabulary for specialists of the Grodno Polytechnic College and not only" >
        <meta name="copyright" content="Polina Kuzmenok">
        <meta name="author" content="Polina Kuzmenok">
        <meta http-equiv="Content-language" CONTENT="en-GB">
        <link rel="icon" type="image/x-icon" href="Pictures/icon.png">
        <link rel="stylesheet" type="text/css" href="Styles/Fonts.css">
        <noscript>
		    <style>.body_hide{opacity: 1 !important;}</style>
	    </noscript>`   
    )

    document.getElementsByTagName('body')[0].classList.add('notranslate');
}
setTimeout(function()
{
    $('body').addClass('body_visible');
}, 10);
function stickyfooter () 
{
    var a=document.getElementsByTagName('footer')[0].offsetHeight;
    document.getElementById('GlobalMargins').style.marginBottom='calc('+a+'px + 1.5rem)';
}

header();
footer();
$(window).on('load',head);
$(window).on('load', stickyfooter);
$(window).on('resize', function() 
{
    stickyfooter();
});