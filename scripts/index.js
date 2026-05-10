const title = document.querySelector("title"),
	favicon = document.querySelector("[rel='shortcut icon']"),
	htmlCode = document.querySelector("code"),
	titleText = document.getElementById("title-text"),

	textbox = document.getElementById("textbox"),
	copyCode = document.querySelector("button"),
	copyNotify = document.getElementById("copy-notify"),
	addFavicon = document.getElementById("add-favicon");

function setHTMLCode(pageTitle) {
	title.textContent = pageTitle;
	titleText.textContent = pageTitle;
}

function copyHTMLCode() {
	navigator.clipboard.writeText(htmlCode.innerText);
	copyNotify.style.display = "block";
	setTimeout(() => copyNotify.style.display = "none", 1300);
}

textbox.addEventListener("keyup", event => {
	const text = textbox.value;

	switch (text) {
		case "":
			setHTMLCode("Textbox changes page title");
			break;
		default:
			setHTMLCode(text);
			break;
	}

	switch (event.key) {
		case "Enter":
			copyHTMLCode();
			break;
	}
});

copyCode.addEventListener("click", copyHTMLCode);
addFavicon.addEventListener("change", event => {
	URL.revokeObjectURL(favicon.getAttribute("href"));
	favicon.setAttribute("href", URL.createObjectURL(event.target.files[0]));
});
