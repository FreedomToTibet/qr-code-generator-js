window.addEventListener('DOMContentLoaded', function () {

  const form = document.querySelector('#id-generator');
  const qr = document.querySelector('#qrcode');

	const showSpinner = () => {
		this.document.querySelector('#spinner').style.display = 'block';
	}
	const hideSpinner = () => {
		this.document.querySelector('#spinner').style.display = 'none';
	}

	// Generating qr code
	const generateQRCode = (url, size) => {
		const qrcode = new QRCode('qrcode', {
			text: url,
			width: size,
			height: size,
		});
	};

	// Cleaning the qr code's image on the website
	const clearUI = () => {
		qr.innerHTML = '';
		const saveBtn = document.querySelector('#save-link');
		if (saveBtn) {
			saveBtn.remove();
		}
	};

	// save-button for a qr code dowloading
	const createSaveBtn = (saveUrl) => {
		const link = document.createElement('a');
		link.id = 'save-link';
		link.classList =
			'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
		link.href = saveUrl;
		link.download = 'qrcode';
		link.innerHTML = 'Save Image';
		document.querySelector('#generated').appendChild(link);
	};

	const onGenerateSubmit = (e) => {
		e.preventDefault();

		clearUI();

		const url = document.querySelector('#url').value;
		const size = document.querySelector('#size').value;

		showSpinner();
		this.setTimeout(() => {
			hideSpinner();
			generateQRCode(url, size);

			setTimeout(() => {
        // Get save url
        const saveUrl = qr.querySelector('img').src;
        // Create save button
        createSaveBtn(saveUrl);
      }, 50);

		}, 1000);
	}

	hideSpinner();

	form.addEventListener('submit', onGenerateSubmit);
})