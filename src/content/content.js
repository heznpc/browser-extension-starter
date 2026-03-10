(() => {
  chrome.runtime.sendMessage({ type: 'PING' }, (response) => {
    if (response?.status === 'ok') {
      console.log('Extension is active on this page');
    }
  });
})();
