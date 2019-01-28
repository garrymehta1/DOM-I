const siteContent = {
	nav: {
		"nav-item-1": "Services",
		"nav-item-2": "Product",
		"nav-item-3": "Vision",
		"nav-item-4": "Features",
		"nav-item-5": "About",
		"nav-item-6": "Contact",
		"img-src": "img/logo.png"
	},
	cta: {
		h1: "DOM Is Awesome",
		h1Alt: "DOM Is Even More Awesome",
		button: "Get Started",
		"img-src": "img/header-img.png"
	},
	"main-content": {
		"features-h4": "Features",
		"features-content":
			"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"about-h4": "About",
		"about-content":
			"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"middle-img-src": "img/mid-page-accent.jpg",
		"services-h4": "Services",
		"services-content":
			"Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"product-h4": "Product",
		"product-content":
			"Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"vision-h4": "Vision",
		"vision-content":
			"Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
	},
	contact: {
		"contact-h4": "Contact",
		address: "123 Way 456 Street Somewhere, USA",
		phone: "1 (888) 888-8888",
		email: "sales@greatidea.io"
	},
	footer: {
		copyright: "Copyright Great Idea! 2018"
	}
};

//HEADER - NAVBAR
//content

let selectedNavLinks = document.querySelectorAll("nav a");
selectedNavLinks.forEach((el, i) => {
	el.textContent = siteContent.nav[`nav-item-${i + 1}`];
	selectedNavLinks.color = "green";
});

//href change
document.querySelectorAll("nav a")[0].href = "https://www.google.com";

//append/prepend
let navItem1 = document.createElement("a");
navItem1.textContent = "Blog";
document.querySelector("nav").appendChild(navItem1);

let navItem2 = document.createElement("a");
navItem2.textContent = "Vlogs";
document.querySelector("nav").prepend(navItem2);

//style
document.querySelectorAll("nav a").forEach(el => {
	el.style.color = "green";
	el.style.fontWeight = "bold";
});

//HEADER - IMG
//content
let logo = document.getElementById("logo-img");
logo.src = siteContent.nav["img-src"];

//alt
logo.alt = "Logo in Header";

//SECTION CTA
//content
document.querySelector(".cta-text h1").textContent = siteContent.cta.h1;
document.getElementById("cta-img").src = siteContent.cta["img-src"];
document.getElementsByTagName("button")[0].textContent = siteContent.cta.button;
document.getElementsByTagName("button")[0].style.backgroundColor = "green";
document.getElementsByTagName("button")[0].style.color = "white";

//SECTION MAIN CONTENT, MIDDLE IMG, BOTTOM CONTENT
//style
document.querySelectorAll(".text-content h4").forEach(el => {
	el.style.color = "green";
});
document.querySelector(".main-content").style.borderTop = "2px solid green";
document.querySelector(".main-content").style.borderBottom = "2px solid green";

//main content
document.querySelectorAll(".main-content .text-content h4")[0].textContent = siteContent["main-content"]["features-h4"];
document.querySelectorAll(".main-content .text-content p")[0].textContent = siteContent["main-content"]["features-content"];
document.querySelectorAll(".text-content h4")[1].textContent = siteContent["main-content"]["about-h4"];
document.querySelectorAll(".text-content p")[1].textContent = siteContent["main-content"]["about-content"];

//middle img
document.getElementById("middle-img").src = siteContent["main-content"]["middle-img-src"];

//bottom content
document.querySelectorAll(".bottom-content .text-content h4")[0].textContent = siteContent["main-content"]["services-h4"];
document.querySelectorAll(".bottom-content .text-content p")[0].textContent = siteContent["main-content"]["services-content"];
document.querySelectorAll(".bottom-content .text-content h4")[1].textContent = siteContent["main-content"]["product-h4"];
document.querySelectorAll(".bottom-content .text-content p")[1].textContent = siteContent["main-content"]["product-content"];

document.querySelectorAll(".bottom-content .text-content h4")[2].textContent = siteContent["main-content"]["vision-h4"];
document.querySelectorAll(".bottom-content .text-content p")[2].textContent = siteContent["main-content"]["vision-content"];

//CONTACT
//style
document.querySelectorAll(".contact h4")[0].style.color = "green";
//text content
document.querySelectorAll(".contact h4")[0].textContent = siteContent["contact"]["contact-h4"];
document.querySelectorAll(".contact p")[0].textContent = siteContent["contact"].address;
document.querySelectorAll(".contact p")[1].textContent = siteContent["contact"].phone;
document.querySelectorAll(".contact p")[2].textContent = siteContent["contact"].email;
//FOOTER
//style
document.querySelectorAll("footer p")[0].style.backgroundColor = "green";
document.querySelectorAll("footer p")[0].style.color = "white";
document.querySelectorAll("footer p")[0].style.padding = "2%";
//content
document.querySelectorAll("footer p")[0].textContent = siteContent["footer"].copyright;

//STRETCH - ADD EVENT LISTENERS

let headding = document.querySelector(".cta-text h1");
document.getElementsByTagName("button")[0].addEventListener("click", function() {
	if (headding.textContent === siteContent.cta.h1) {
		headding.textContent = siteContent.cta.h1Alt;
	} else if (headding.textContent === siteContent.cta.h1Alt) {
		headding.textContent = siteContent.cta.h1;
	}
});
