// /**
//  * 
//  * Manipulating the DOM exercise.
//  * Exercise programmatically builds navigation,
//  * scrolls to anchors from navigation,
//  * and highlights section in viewport upon scrolling.
//  * 
//  * Dependencies: None
//  * 
//  * JS Version: ES2015/ES6
//  * 
//  * JS Standard: ESlint
//  * 
// */

// /**
//  * Define Global Variables
//  * 
// */


// /**
//  * End Global Variables
//  * Start Helper Functions
//  * 
// */



// /**
//  * End Helper Functions
//  * Begin Main Functions
//  * 
// */

// // build the nav
let sectionsList = document.querySelectorAll('section');
let uL = document.querySelector('ul');
let fragement = document.createDocumentFragment();

sectionsList.forEach((section,idx) => {
    let listLi = document.createElement('li');//create li    
    let link = document.createElement('a');//create a
    link.setAttribute('class','menu__link');//set attribute menue__link to link
    let dataNav = section.getAttribute('data-nav');//get attribute data-nav
    let textNode = document.createTextNode(dataNav);
    link.appendChild(textNode);

    link.addEventListener('click',function Link(){
        let ele = document.querySelectorAll('section')[idx];//get the current section     
        ele.scrollIntoView({'behavior':'smooth'});//smooth scroll
    })
   
    //appendchild list of li with link
    listLi.appendChild(link);
    fragement.appendChild(listLi);
});
uL.appendChild(fragement);//use fragement

// Add class 'active' to section when near top of viewport

// //window to scroll event
window.addEventListener('scroll',function scroll(){       
        sectionsList.forEach((section,idx)=>{        

//get the current section 
        let ele = document.querySelectorAll('section')[idx];
        let links = document.querySelectorAll('a');     
//get position for each section           
        const position = section.getBoundingClientRect(); 
//check position of section to add active class           
        if(position.top >0  && position.top < 150){
                // alert(position.top);
            ele.classList.add('your-active-class'); //add active class on the active section  
            links.forEach((link)=>{//loop to add active class and remove all active from other sections
                if(link.textContent == ele.getAttribute('data-nav')){
                        link.classList.add('active');
                }
                else link.classList.remove('active');
        })     
        }
//if scroll up from the sectiom .. remove active class        
        else ele.classList.remove('your-active-class');
    })
})     

// Scroll to anchor ID using scrollTO event
// create new button
let btn = document.createElement('button');
let txt = document.createTextNode('UP');
let body = document.querySelector('body');
let footer = document.querySelector('footer');
btn.setAttribute('class','button');
btn.appendChild(txt);
body.appendChild(btn);
body.insertBefore(btn, footer);//insert it before footer
btn.addEventListener('click',()=>{//scroll to up
        window.scrollTo({'top':0, 'left':0, 'behavior': 'smooth'})
})
// /**
//  * End Main Functions
//  * Begin Events
//  * 
// */

// // Build menu 

// // Scroll to section on link click

// // Set sections as active


