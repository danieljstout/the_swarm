import text from './../chapters/chapter2.js';
let body = text.chapterTwo();

const HTML = () => {
  return `
	<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>${text.title()}</title>
	<link rel="stylesheet" href="bootstrap.min.css">
</head>
<body>
	<h1 class="title">${body.title}</h1>
	<b>${body.preface.title}</b>
	<p class="preface">${body.preface.paragraph1}</p>
	<p class="preface">${body.preface.paragraph2}</p></br>
	<p class="partA">${body.partA.paragraph1}</p>
	<p class="partA">${body.partA.paragraph2}</p>
	<h4 class="MeanWhile">${body.MeanWhile}</h4>
	<p class="partB">${body.partB.paragraph1}</p>
	<p class="partB">${body.partB.paragraph2}</p>
	<p class="partB">${body.partB.paragraph3}</p>
	<p class="partC">${body.partC.paragraph1}</p>
	<p class="partD">${body.partD.paragraph1}</p>
	<p class="partD">${body.partD.paragraph2}</p>
	<p class="partE">${body.partE.paragraph1}</p>
	<p class="partF">${body.partF.paragraph1}</p>
	<p class="partF">${body.partF.paragraph2}</p>
	<b>${body.partF.paragraph3}</b>
</body>
<style>
</style>
</html>
	`;
}
export default { HTML };