const pageNamesToPages = new Map([
	["About", "about.html"],
	["Projects and Experience", "projects_and_experience.html"],
	["Other Interests", "other_interests.html"],
	["Resume", "Fan_Summit_Resume.pdf"]
]);

function createNav(currentPageName) {
	let name = `<div id="name"><a class="link-no-color" href="index.html">Summit Fan</a></div>`;
	let pages = `<div class="nav-container">`;

	let pageNamesIter = pageNamesToPages.keys();

	let result = pageNamesIter.next();
	while (!result.done) {
		let pageName = result.value;
		if (currentPageName === pageName) {
			pages += `<div class="nav-item nav-item-selected">${pageName}</div>`;
		} else {
			pages += `<div class="nav-item"><a class="link-no-color" href=${pageNamesToPages.get(pageName)}>${pageName}</a></div>`;
		}

		result = pageNamesIter.next();
		if (!result.done) {
			pages += `<div class="nav-sep">|</div>`;
		}
	}
	pages += `</div>`;

	$("#navBar").html(`${name}${pages}`);
}
