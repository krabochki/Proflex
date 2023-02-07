  
var nav=document.getElementsByTagName('nav')[0];
var sum=document.getElementsByTagName('summary');
var h1=document.getElementsByTagName('h1')[0];
var det=document.getElementsByClassName('DetailsContent');
var arrow=document.createElement('div'); arrow.classList='Arrow'; arrow.textContent='>';

$(window).on('load',title);

function title () { 
document.getElementsByTagName('title')[0].innerHTML= document.getElementsByTagName('h1')[0].textContent;}


function corrlink (x) 
{
    return x.textContent.split(' ').join('-');
}

class Accordion {
    constructor(el) {
      // Store the <details> element
      this.el = el;
      // Store the <summary> element
      this.summary = el.querySelector('summary');
      // Store the <div class="content"> element
      this.content = el.querySelector('.content');
  
      // Store the animation object (so we can cancel it if needed)
      this.animation = null;
      // Store if the element is closing
      this.isClosing = false;
      // Store if the element is expanding
      this.isExpanding = false;
      // Detect user clicks on the summary element
      this.summary.addEventListener('click', (e) => this.onClick(e));
    }
  
    onClick(e) {
      // Stop default behaviour from the browser
      e.preventDefault();
      // Add an overflow on the <details> to avoid content overflowing
      this.el.style.overflow = 'hidden';
      // Check if the element is being closed or is already closed
      if (this.isClosing || !this.el.open) {
        this.open();
      // Check if the element is being openned or is already open
      } else if (this.isExpanding || this.el.open) {
        this.shrink();
      }
    }
  
    shrink() {
      // Set the element as "being closed"
      this.isClosing = true;
      
      // Store the current height of the element
      const startHeight = `${this.el.offsetHeight}px`;
      // Calculate the height of the summary
      const endHeight = `${this.summary.offsetHeight}px`;
      
      // If there is already an animation running
      if (this.animation) {
        // Cancel the current animation
        this.animation.cancel();
      }
      
      // Start a WAAPI animation
      this.animation = this.el.animate({
        // Set the keyframes from the startHeight to endHeight
        height: [startHeight, endHeight]
      }, {
        duration: 2000,
        easing: 'ease-out'
      });
      
      // When the animation is complete, call onAnimationFinish()
      this.animation.onfinish = () => this.onAnimationFinish(false);
      // If the animation is cancelled, isClosing variable is set to false
      this.animation.oncancel = () => this.isClosing = false;
    }
  
    open() {
      // Apply a fixed height on the element
      this.el.style.height = `${this.el.offsetHeight}px`;
      // Force the [open] attribute on the details element
      this.el.open = true;
      // Wait for the next frame to call the expand function
      window.requestAnimationFrame(() => this.expand());
    }
  
    expand() {
      // Set the element as "being expanding"
      this.isExpanding = true;
      // Get the current fixed height of the element
      const startHeight = `${this.el.offsetHeight}px`;
      // Calculate the open height of the element (summary height + content height)
      const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;
      
      // If there is already an animation running
      if (this.animation) {
        // Cancel the current animation
        this.animation.cancel();
      }
      
      // Start a WAAPI animation
      this.animation = this.el.animate({
        // Set the keyframes from the startHeight to endHeight
        height: [startHeight, endHeight]
      }, {
        duration: 2000,
        easing: 'ease-out'
      });
      // When the animation is complete, call onAnimationFinish()
      this.animation.onfinish = () => this.onAnimationFinish(true);
      // If the animation is cancelled, isExpanding variable is set to false
      this.animation.oncancel = () => this.isExpanding = false;
    }
  
    onAnimationFinish(open) {
      // Set the open attribute based on the parameter
      this.el.open = open;
      // Clear the stored animation
      this.animation = null;
      // Reset isClosing & isExpanding
      this.isClosing = false;
      this.isExpanding = false;
      // Remove the overflow hidden and the fixed height
      this.el.style.height = this.el.style.overflow = '';
    }
  }
  document.querySelectorAll('details').forEach((el) => {
    new Accordion(el);
  });



let chapter = document.getElementById("CurrentChapter");
if (chapter.textContent==h1.textContent) 
{
    chapter.classList.add('CurrentThemeRelatedTopic');
    var chapmain=true;
}

if (chapter.textContent!='Specialities') 
{
    var mainlink=document.createElement('a'); mainlink.textContent='Specialities'; mainlink.href='Specialities/Specialities.html'; nav.appendChild(mainlink);
    nav.appendChild(arrow.cloneNode(true));
    var chaplink=document.createElement('a'); chaplink.textContent=chapter.textContent; chaplink.href=corrlink(mainlink)+'/'+corrlink(chapter)+'/'+corrlink(chapter)+'.html'; nav.appendChild(chaplink);

}
else
{
    var chaplink=document.createElement('a'); chaplink.textContent=chapter.textContent; chaplink.href=corrlink(chapter)+'/'+corrlink(chapter)+'.html'; nav.appendChild(chaplink);
    
}







var rem=window.getComputedStyle($('html')[0], null).getPropertyValue('font-size');
rem=parseFloat(rem);
$(window).on('resize',function()
{
  rem=window.getComputedStyle($('html')[0], null).getPropertyValue('font-size');
  rem=parseFloat(rem)
  for (let i=0; i<=table.length-1;i++)
  {
    table[i].style.fontSize = 0.8*rem+'px';
  }
  for (let i=0; i<=plus.length-1;i++)
  {
    plus[i].disabled=false;
    minus[i].disabled=false;
  }
})
var tablefont=0.8*rem;
var plus=document.getElementsByClassName('plus');
var minus=document.getElementsByClassName('minus');
var table=document.getElementsByTagName('table');
var plusminuslen=plus.length;
for (let i=0;i<=plusminuslen-1;i++)
{
  var stylefirst = window.getComputedStyle(table[i], null).getPropertyValue('font-size');
  stylefirst = parseFloat(stylefirst);
  plus[i].addEventListener('click',function()
  {
    minus[i].disabled=false;
    style = window.getComputedStyle(table[i], null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    table[i].style.fontSize = (currentSize + 1) + 'px';
    if   (currentSize>=rem*0.85) 
    {
      plus[i].disabled=true;
    }
  })
  minus[i].addEventListener('click',function()
  {
    plus[i].disabled=false;
    style = window.getComputedStyle(table[i], null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    table[i].style.fontSize = (currentSize - 1) + 'px';
    if   (currentSize<=rem*0.75) 
    {
      minus[i].disabled=true;
    }
  })
}


 

for (let i=0; i<=document.getElementsByTagName('details').length-1; i++) 
{
    if (sum[i].textContent == h1.textContent) 
    {
        sum[i].classList.add('CurrentThemeRelatedTopic')
        document.getElementsByTagName('details')[i].open=true;
    }
    var themes = det[i].getElementsByTagName('li');
    for (let j=0; j<=themes.length-1; j++) 
    {
        if (themes[j].textContent == h1.textContent) 
        {
            themes[j].classList.add('CurrentThemeRelatedTopic');
            document.getElementsByTagName('details')[i].open=true;
        }
        if (document.getElementsByTagName('details')[i].open==true) 
        {
            nav.appendChild(arrow.cloneNode(true));
            var sectionlink=document.createElement('a');
            sectionlink.textContent=sum[i].textContent;
            if (chapter.textContent !='Specialities') 
            {
            sectionlink.href=corrlink(mainlink)+'/'+corrlink(chapter)+'/'+corrlink(sectionlink)+'/'+corrlink(sectionlink)+'.html';
            }
            else 
            {
            sectionlink.href=corrlink(chapter)+'/'+corrlink(sectionlink)+'/'+corrlink(sectionlink)+'.html';
            }
            nav.appendChild(sectionlink);
        }
        if (themes[j].classList=='CurrentThemeRelatedTopic') 
        {
            nav.appendChild(arrow.cloneNode(true));
            var themelink=document.createElement('a');
            themelink.textContent=themes[j].textContent;
            if (chapter.textContent !='Specialities'){
                themelink.href=corrlink(mainlink)+'/'+corrlink(chapter)+'/'+corrlink(sum[i])+'/'+corrlink(themes[j])+'/'+corrlink(themes[j]) +'.html';
            }
            else
            {
                themelink.href=corrlink(chapter)+'/'+corrlink(sum[i])+'/'+corrlink(themes[j])+'/'+corrlink(themes[j]) +'.html';
            }
            nav.appendChild(themelink);
        }
    }
}




$.fn.animate_Text = function() {
    var string = this.text();
    return this.each(function(){
     var $this = $(this);
     $this.html(string.replace(/./g, '<span class="new">$&</span>'));
     $this.find('span.new').each(function(i, el){
      setTimeout(function(){ $(el).addClass('div_opacity'); }, 400 * i);
     });
    });
   };
   $('#example').show();
   $('#example').animate_Text();


let InThisArticle = document.getElementById("InThisArticle");
let NameOfNav = document.createElement("li");
NameOfNav.textContent='In this article'
NameOfNav.className='NameOfNav';
InThisArticle.appendChild(NameOfNav);
let MainUl = document.createElement("ul");
for (let i=0; i<=document.getElementsByTagName('h2').length-1;i++){
	var InThisArticleItem = document.createElement("li");
    InThisArticleItem.className='InThisArticleItems';
    InThisArticleItem.textContent=document.getElementsByTagName('h2')[i].textContent;
    MainUl.appendChild(InThisArticleItem);
}
InThisArticle.appendChild(MainUl);
for (let i=1; i<=document.getElementsByTagName('section').length-1; i++) {
    document.getElementsByTagName('section')[i].id=i;
}
for (let i=0; i<=document.getElementsByClassName('InThisArticleItems').length-1; i++) {
    document.getElementsByClassName('InThisArticleItems')[i].id='h'+ (i+1);
    document.getElementsByClassName('InThisArticleItems')[i].addEventListener('click',function(){DoesItCurrent(this.id)});
}




$(document).scroll(function(e)
{
    var headerHeight = document.getElementsByTagName('header')[0].offsetHeight + Number((window.getComputedStyle(document.getElementById('MainText'),null).getPropertyValue("padding-top")).replace('px',''));

    id='h1';
    for (let i = 1; i <= 10; i++) 
    {
        var current_top = $(this).scrollTop() + headerHeight + 1;
        $(document.getElementById(i)).each(function()
        {
            if
            ( 
                $(this).position().top  <= current_top && $(this).position().top + $(this).outerHeight() >= current_top
            )   
                {
                    document.getElementById(id).classList.add("current-theme");
                }
            else
            {
                document.getElementById(id).classList.remove("current-theme");
            }
        });
        id = id.replace('h','');
        id++;
        id='h'+id;
    }    
});
    


function DoesItCurrent(paramId) {
    var headerHeight = document.getElementsByTagName('header')[0].offsetHeight + Number((window.getComputedStyle(document.getElementById('MainText'),null).getPropertyValue("padding-top")).replace('px',''));
    var id=paramId;
    id = id.replace('h','');
    const pNum = id;
    const scrollTarget = document.getElementById(pNum);
    const topOffset = headerHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
        top: offsetPosition,
        behavior: "smooth"
    });
}



  
var containers;
function initDrawers() {
	// Get the containing elements
	containers = document.querySelectorAll(".container");
	setHeights();
	wireUpTriggers();
	window.addEventListener("resize", setHeights);
}

window.addEventListener("load", initDrawers);

function setHeights() {
	containers.forEach(container => {
		// Get content
		let content = container.querySelector(".content");
		// Needed if this is being fired after a resize
		content.removeAttribute("aria-hidden");
		// Height of content to show/hide
		let heightOfContent = content.getBoundingClientRect().height;
		// Set a CSS custom property with the height of content
		container.style.setProperty("--containerHeight", `${heightOfContent}px`);
		// Once height is read and set
		setTimeout(e => {
			container.classList.add("height-is-set");
			content.setAttribute("aria-hidden", "true");
		}, 0);
	});
}

function wireUpTriggers() {
	containers.forEach(container => {
		// Get each trigger element
		let btn = container.querySelector(".trigger");
		// Get content
		let content = container.querySelector(".content");
		btn.addEventListener("click", () => {
			container.setAttribute(
				"data-drawer-showing",
				container.getAttribute("data-drawer-showing") === "true" ? "false" : "true"
			);
			content.setAttribute(
				"aria-hidden",
				content.getAttribute("aria-hidden") === "true" ? "false" : "true"
			);
		});
	});
}

