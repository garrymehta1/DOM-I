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
document.querySelectorAll("nav a")[0].textContent =
	siteContent.nav["nav-item-1"];
document.querySelectorAll("nav a")[1].textContent =
	siteContent.nav["nav-item-2"];
document.querySelectorAll("nav a")[2].textContent =
	siteContent.nav["nav-item-3"];
document.querySelectorAll("nav a")[3].textContent =
	siteContent.nav["nav-item-4"];
document.querySelectorAll("nav a")[4].textContent =
	siteContent.nav["nav-item-5"];
document.querySelectorAll("nav a")[5].textContent =
	siteContent.nav["nav-item-6"];

document.querySelectorAll("nav a").forEach(el => {
	el.style.color = "green";
});

//HEADER - IMG
let logo = document.getElementById("logo-img");
logo.src = siteContent.nav["img-src"];

//SECTION CTA
document.querySelector(".cta-text h1").textContent = siteContent.cta.h1;
document.getElementById("cta-img").src = siteContent.cta["img-src"];
document.getElementsByTagName("button")[0].textContent = siteContent.cta.button;

//SECTION MAIN-CONTENT
document.querySelectorAll(".main-content .text-content h4")[0].textContent =
	siteContent["main-content"]["features-h4"];
document.querySelectorAll(".main-content .text-content p")[0].textContent =
	siteContent["main-content"]["features-content"];
document.querySelectorAll(".text-content h4")[1].textContent =
	siteContent["main-content"]["about-h4"];
document.querySelectorAll(".text-content p")[1].textContent =
	siteContent["main-content"]["about-content"];
//MIDDLE IMG
document.getElementById("middle-img").src =
	siteContent["main-content"]["middle-img-src"];

//SECTION BOTTOM-CONTENT
document.querySelectorAll(".bottom-content .text-content h4")[0].textContent =
	siteContent["main-content"]["services-h4"];
document.querySelectorAll(".bottom-content .text-content p")[0].textContent =
	siteContent["main-content"]["services-content"];
document.querySelectorAll(".bottom-content .text-content h4")[1].textContent =
	siteContent["main-content"]["product-h4"];
document.querySelectorAll(".bottom-content .text-content p")[1].textContent =
	siteContent["main-content"]["product-content"];

document.querySelectorAll(".bottom-content .text-content h4")[2].textContent =
	siteContent["main-content"]["vision-h4"];
document.querySelectorAll(".bottom-content .text-content p")[2].textContent =
	siteContent["main-content"]["vision-content"];
//CONTACT

document.querySelectorAll(".contact h4")[0].textContent =
	siteContent["contact"]["contact-h4"];
document.querySelectorAll(".contact p")[0].textContent =
	siteContent["contact"].address;
document.querySelectorAll(".contact p")[1].textContent =
	siteContent["contact"].phone;
document.querySelectorAll(".contact p")[2].textContent =
	siteContent["contact"].email;

document.querySelectorAll("footer p")[0].textContent =
	siteContent["footer"].copyright;
