document.addEventListener('DOMContentLoaded', () => {
	/* Bikeshed: DOM: Editor
	/* ====================================================================== */

	const $editor = document.createElement('textarea');

	$editor.className = 'bikeshed-editor';

	$editor.append(`<pre class='metadata'>
Title: my spec
Shortname: my-spec
Level: 1
Status: DREAM
URL: https://github.com/YOUR_GITHUB/my-spec
Editor: Your Name, your@email.com
Abstract: The goal of this document is to DO SOMETHING.
</pre>`);

	/* Bikeshed: DOM: Preview
	/* ====================================================================== */

	const $preview = document.createElement('iframe');

	$preview.className = 'bikeshed-preview';

	/* Bikeshed: DOM
	/* ====================================================================== */

	document.body.append($editor, $preview);

	$editor.focus();

	/* Bikeshed: Preview
	/* ====================================================================== */

	$editor.addEventListener('input', debounceBikeshed);

	const previews = {};

	let previewTimeout;

	debounceBikeshed();

	function debounceBikeshed() {
		previewTimeout = clearTimeout(previewTimeout);

		if (!previews[$editor.value]) {
			previewTimeout = setTimeout(
				() => {
					previewTimeout = clearTimeout(previewTimeout);

					previews[$editor.value] = getBikeshed($editor.value);

					debounceBikeshed();
				},
				400
			);

			return previewTimeout;
		}

		previews[$editor.value].then(
			(html) => {
				const idocument = $preview.contentWindow.document;

				idocument.open();
				idocument.write(html);
				idocument.close();
			}
		);

		return previewTimeout;
	}

	/* Bikeshed: Promise
	/* ====================================================================== */

	function getBikeshed(value) {
		const formData = new FormData();

		formData.append('file', new Blob([ value ], { type : 'text/plain' }), 'spec.bs');

		return fetch('https://api.csswg.org/bikeshed/', {
			method: 'POST',
			body: formData
		}).then(
			(response) => response.text()
		);
	}
});
