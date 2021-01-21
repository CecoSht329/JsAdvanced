function createArticle() {
	let titleFromInput = document.getElementById('createTitle');
	let contentFromInput = document.getElementById('createContent');

	
	if (titleFromInput.value != '' && contentFromInput.value != '') {
		let title = document.createElement('h3');
		title.innerText = titleFromInput.value;
		let content = document.createElement('p');
		content.innerText = contentFromInput.value;
		
		let article = document.createElement('article')
		article.appendChild(title);
		article.appendChild(content);

		let articleSection = document.getElementById('articles');
		articleSection.appendChild(article);
	}


	titleFromInput.value = '';
	contentFromInput.value = '';
}