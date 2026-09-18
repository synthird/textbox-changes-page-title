const title = document.querySelector("title"),
	favicon = document.querySelector("[rel='shortcut icon']"),
	htmlCode = document.querySelector("code"),
	titleText = document.getElementById("title-text"),

	textbox = document.getElementById("textbox"),
	copyButton = document.getElementById("copy-button"),
	copyNotify = document.getElementById("copy-notify"),
	setFavicon = document.getElementById("set-favicon"),

	clipboard = navigator.clipboard;

function setHTMLCode(pageTitle) {
	title.textContent = pageTitle;
	titleText.textContent = pageTitle;
}

function copyHTMLCode() {
	clipboard.writeText(htmlCode.innerText);
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

copyButton.addEventListener("click", copyHTMLCode);
setFavicon.addEventListener("change", event => {
	URL.revokeObjectURL(favicon.href);
	favicon.href = URL.createObjectURL(event.target.files[0]);
});
