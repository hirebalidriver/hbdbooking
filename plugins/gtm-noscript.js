// plugins/gtm-noscript.js
export default ({ app }) => {
    if (process.client) {
      const noScript = document.createElement('noscript');
      noScript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MPMW5ZWF"
                              height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.insertAdjacentElement('afterbegin', noScript);
    }
  };
  