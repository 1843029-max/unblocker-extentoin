const form = document.getElementById('unblock-form');
const urlInput = document.getElementById('target-url');
const statusMessage = document.getElementById('status-message');
const previewOutput = document.getElementById('preview-output');
const sourceLink = document.getElementById('source-link');
const submitBtn = document.getElementById('submit-btn');
const quickLinks = document.querySelectorAll('.quick-link');

const normalizeUrl = (value) => {
  const trimmed = value.trim();
  if (!trimmed) return '';
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
};

const setStatus = (message, tone = 'default') => {
  statusMessage.textContent = message;
  statusMessage.style.color = tone === 'error' ? '#fca5a5' : tone === 'success' ? '#86efac' : '#9ca3af';
};

const renderHtml = (html, targetUrl) => {
  const iframe = document.createElement('iframe');
  iframe.title = 'Proxy preview';
  iframe.sandbox = 'allow-scripts allow-same-origin';
  previewOutput.innerHTML = '';
  previewOutput.appendChild(iframe);

  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();
  doc.write(html);
  doc.close();

  sourceLink.href = targetUrl;
  sourceLink.textContent = 'Open original';
};

const fetchProxy = async (targetUrl) => {
  const response = await fetch(`/api/proxy?url=${encodeURIComponent(targetUrl)}`);
  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.error || 'Request failed');
  }

  return data.content;
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const targetUrl = normalizeUrl(urlInput.value);
  if (!targetUrl) {
    setStatus('Please enter a valid URL.', 'error');
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Loading...';
  setStatus('Fetching website preview...');
  previewOutput.innerHTML = '<p class="placeholder">Loading preview…</p>';

  try {
    const html = await fetchProxy(targetUrl);
    renderHtml(html, targetUrl);
    setStatus(`Loaded: ${targetUrl}`, 'success');
  } catch (error) {
    console.error(error);
    previewOutput.innerHTML = '<p class="placeholder">The site could not be loaded through the proxy.</p>';
    setStatus('Unable to load the site.', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Unblock';
  }
});

quickLinks.forEach((button) => {
  button.addEventListener('click', () => {
    urlInput.value = button.dataset.url;
    form.requestSubmit();
  });
});
