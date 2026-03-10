document.addEventListener('DOMContentLoaded', () => {
  const status = document.getElementById('status');
  chrome.storage.local.get(['enabled'], (result) => {
    status.textContent = result.enabled !== false ? 'Active' : 'Inactive';
  });
});
