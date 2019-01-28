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
document.querySelectorAll("nav a")[0].textContent = "Services";
document.querySelectorAll("nav a")[1].textContent = "Product";
document.querySelectorAll("nav a")[2].textContent = "Vision";
document.querySelectorAll("nav a")[3].textContent = "Features";
document.querySelectorAll("nav a")[4].textContent = "About";
document.querySelectorAll("nav a")[5].textContent = "Contact";

//HEADER - IMG
let logo = document.getElementById("logo-img");
logo.src = "/img/logo.png";

//SECTION CTA
document.querySelector(".cta-text h1").textContent = "DOM is Awesome";
document.getElementById("cta-img").src = "/img/header-img.png";
document.getElementsByTagName("button")[0].textContent = "Get Started";

//SECTION MAIN-CONTENT
document.querySelectorAll(".main-content .text-content h4")[0].textContent =
	"Features";
document.querySelectorAll(".main-content .text-content p")[0].textContent =
	"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

document.querySelectorAll(".text-content h4")[1].textContent = "About";
document.querySelectorAll(".text-content p")[1].textContent =
	"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//MIDDLE IMG
document.getElementById("middle-img").src = "/img/mid-page-accent.jpg";

//SECTION BOTTOM-CONTENT
document.querySelectorAll(".bottom-content .text-content h4")[0].textContent =
	"Services";
document.querySelectorAll(".bottom-content .text-content p")[0].textContent =
	"Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

document.querySelectorAll(".bottom-content .text-content h4")[1].textContent =
	"Product";
document.querySelectorAll(".bottom-content .text-content p")[1].textContent =
	"Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

document.querySelectorAll(".bottom-content .text-content h4")[2].textContent =
	"Vision";
document.querySelectorAll(".bottom-content .text-content p")[2].textContent =
	"Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//CONTACT

document.querySelectorAll(".contact h4")[0].textContent = "Contact";
let newline = "\r\n";
document.querySelectorAll(".contact p")[0].style.whiteSpace = "pre";
document.querySelectorAll(".contact p")[0].textContent =
	"123 Way 456 Street" + newline + "Somewhere, USA";

document.querySelectorAll(".contact p")[1].textContent = "1 (888) 888-8888";
document.querySelectorAll(".contact p")[2].textContent = "sales@greatidea.io";

document.querySelectorAll("footer p")[0].textContent =
	"Copyright Great Idea! 2018";
