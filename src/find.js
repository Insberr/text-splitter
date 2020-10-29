const regexs = require('./regex');

module.exports = {
	quote(input, type) {
		if (!input) throw Error('`input` was not defined');
		switch (type) {
			case 'single': case '\'': {
				return input.match(regexs.quote.single);
			}
			case 'backtick': case 'backquote': case '`': {
				return input.match(regexs.quote.back);
			}
			default: {
				return input.match(regexs.quote.all);
			}
		}
	},
	json() {
		return;
	},
	url() {
		return;
	},
	array() {
		return;
	}
};
