const pipes = {
	trustAsHtml: function($sce) {
		return html => $sce.trustAsHtml(html);
	},
	toBold: function ($sce) {
		return text => $sce.trustAsHtml(`<b>${text}</b>`);
	},
	toItalic: function ($sce) {
		return text => $sce.trustAsHtml(`<i>${text}</i>`);
	},
	toUnderline: function ($sce) {
		return text => $sce.trustAsHtml(`<u>${text}</u>`);
	}
};