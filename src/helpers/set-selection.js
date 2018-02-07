'use strict';

module.exports = function(elemArr) {
	var element = elemArr[0];
	var nextChar = element.selectionStart + 1;
	var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
	var defer = typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame : setTimeout;

	if (!element) {
		return 0;
	}
	if (element.setSelectionRange && isAndroid) {
		defer(function () { element.setSelectionRange(nextChar, nextChar, 'none') }, 0);
	}
}
