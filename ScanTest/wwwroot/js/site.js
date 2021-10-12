// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
async function SetupScanner() { //button, preview, textbox) {
	const resultInput = document.getElementById("textScanResult");
	const messageElem = document.getElementById("messageArea");

	const previewElem = document.getElementById("scanPreviewArea");

	const codeReader = new BrowserQRCodeReader();
	const videoInputDevices = await ZXingBrowser.BrowserCodeReader.listVideoInputDevices();
	// choose your media device (webcam, frontal camera, back camera, etc.)
	const selectedDeviceId = videoInputDevices[0].deviceId;

	// override onclick
	function handleScan(result) {
		console.log("Scan Decoded");
		console.log(result)
		resultInput.value = result.text;
		//document.getElementById('result').textContent = result.text
	}
	function handleScanError(err) {
		console.error(err)
		//document.getElementById('result').textContent = err
		if (messageElem) {
			messageElem.textContent = err;
			// mark visible if needed
		}
	}
	function scanBttnClick() {
		codeReader.decodeOnceFromVideoDevice(selectedDeviceId, previewElem) //, 'video')
			.then(handleScan)
			.catch(handleScanError);
		console.log(`Started continous decode from camera with id ${selectedDeviceId}`)
	}

	const scanBttn = document.getElementById("startScanButton");
	if (scanBttn) {
		scanBttn.addEventListener('click', scanBttnClick);
	}
} // END Scanner
/*
window.addEventListener('load', function iniateScanner() {
	const codeReader = new BrowserQRCodeReader();

	const videoInputDevices = await ZXingBrowser.BrowserCodeReader.listVideoInputDevices();

	// choose your media device (webcam, frontal camera, back camera, etc.)
	const selectedDeviceId = videoInputDevices[0].deviceId;
	console.log(`Started decode from camera with id ${selectedDeviceId}`);

	const previewElem = document.querySelector('#test-area-qr-code-webcam > video');

	// you can use the controls to stop() the scan or switchTorch() if available
	const controls = await codeReader.decodeFromVideoDevice(selectedDeviceId, previewElem, (result, error, controls) => {
		// use the result and error values to choose your actions
		// you can also use controls API in this scope like the controls
		// returned from the method.
	});

	// stops scanning after 20 seconds
	setTimeout(() => controls.stop(), 20000);
});
*/
