module.exports = Phrase;

//reverses a string
String.prototype.reverse = function () {
	return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
	return (!!this.match(/$\s+^/));
}

let reverseStr = (string) => {
	return Array.from(string).reverse().join("");
}

let palindrome = (string) => {
	return string.toLowerCase() === reverseStr(string);
}

let emailParts = (email) => {
	return email.toLowerCase().split("@");
}

function Phrase(content) {
	this.content = content;

	this.palindrome = function palindrome() {
		return this.processedContent() === this.processedContent().reverse();
	}

	this.processor = function processor(string) {
		return string.toLowerCase();
	}

	this.processedContent = function processedContent() {
		return this.processor(this.letters());
	}

	this.louder = function louder() {
		return this.content.toUpperCase();
	}

	this.letters = function letters() {
		return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
	}
}

function TranslatedPhrase(content, translation) {
	this.content = content;
	this.translation = translation;

	this.processedContent = function processedContent() {
		return this.processor(this.translation)
	}

}

TranslatedPhrase.prototype = new Phrase();