const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// nav

let navBar = document.querySelectorAll('.container a');
navBar[0].innerHTML = siteContent["nav"]["nav-item-1"];
navBar[1].innerHTML = siteContent["nav"]["nav-item-2"];
navBar[2].innerHTML = siteContent["nav"]["nav-item-3"];
navBar[3].innerHTML = siteContent["nav"]["nav-item-4"];
navBar[4].innerHTML = siteContent["nav"]["nav-item-5"];
navBar[5].innerHTML = siteContent["nav"]["nav-item-6"];

navBar.forEach( (el) => el.style.color = 'green');

// let newNav = document.createElement('nav a');
// newNav.textContent = 'BackNav';

// navBar.appendChild(newNav);

// Array.from(navBar).map( (el) => el)

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// cta

let mainTitle = document.querySelector(".cta-text h1");
mainTitle.textContent = siteContent["cta"]["h1"];

let startButton = document.querySelector(".cta-text button");
startButton.innerHTML = siteContent["cta"]["button"];

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

//main-content
//top-content

let featAbout = document.querySelectorAll('.top-content h4');
featAbout[0].innerHTML = siteContent["main-content"]["features-h4"];
featAbout[1].innerHTML = siteContent["main-content"]["about-h4"];

let featAboutContent = document.querySelectorAll('.top-content p');
featAboutContent[0].innerHTML = siteContent["main-content"]["features-content"];
featAboutContent[1].innerHTML = siteContent["main-content"]["about-content"];

//middle-image

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//bottom-content

let bottomH4 = document.querySelectorAll('.bottom-content h4');
bottomH4[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomH4[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomH4[2].innerHTML = siteContent["main-content"]["vision-h4"];

let bottomContent = document.querySelectorAll('.bottom-content p');
bottomContent[0].textContent = siteContent["main-content"]["services-content"];
bottomContent[1].textContent = siteContent["main-content"]["product-content"];
bottomContent[2].textContent = siteContent["main-content"]["vision-content"];

//contact

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactStuff = document.querySelectorAll('.contact p');
contactStuff[0].innerHTML = '123 Way 456 Street </br> Somewhere, USA';
contactStuff[1].textContent = siteContent["contact"]["phone"];
contactStuff[2].textContent = siteContent["contact"]["email"];

//footer

let footerCopyright = document.querySelector('footer p');
footerCopyright.textContent = siteContent['footer']['copyright'];