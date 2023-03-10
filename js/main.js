const nav = document.querySelector(".navbar");
const navbarItems = document.querySelectorAll('.navbar-item');
const navBtn = document.querySelector('.burger-menu');
const navBtnImg = document.querySelector('.burger-menu-img');
const loginButton = document.querySelector(".log-in");
const requestButton = document.querySelector(".request");
const modalBackground = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close");
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

// Menu burger
navBtn.onclick = () => {
    nav.classList.toggle('open');
    navBtnImg.src="./assets/menu-close.svg"
    console.log('ji')
}

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src="./assets/menu-close.svg"
    } else {
        navBtnImg.src="./assets/menu-open.svg"
    }
}

navbarItems.forEach(item => {
    item.addEventListener('click', () => {
      nav.classList.remove('open');
      navBtnImg.src="./assets/menu-open.svg"
    });
  });
 
// Modals

  loginButton.addEventListener("click", function() {
    modalBackground.style.display = "flex";
  });

  requestButton.addEventListener("click", function() {
    modalBackground.style.display = "flex";
  });
  
  closeButton.addEventListener("click", function() {
    modalBackground.style.display = "none";
  });
  
  window.addEventListener("click", function(event) {
    if (event.target === modalBackground) {
      modalBackground.style.display = "none";
    }
  });

// Tabs

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

// Accordions 

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

  accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
    
     accordionItemHeader.classList.toggle("active");
     const accordionItemBody = accordionItemHeader.nextElementSibling;
     if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
     }
     else {
       accordionItemBody.style.maxHeight = 0;
     }
    
   });
});