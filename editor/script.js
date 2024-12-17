document.addEventListener('DOMContentLoaded', function () {
  // Get DOM elements
  const htmlTab = document.querySelector('[data-tab="html"]');
  const cssTab = document.querySelector('[data-tab="css"]');
  const jsTab = document.querySelector('[data-tab="js"]');
  
  const htmlCode = document.getElementById('html-code');
  const cssCode = document.getElementById('css-code');
  const jsCode = document.getElementById('js-code');
  
  const uploadBtn = document.getElementById('upload-btn');
  const networkBtn = document.getElementById('network-btn');
  const downloadBtn = document.getElementById('download-btn');
  
  const fileInput = document.getElementById('file-input');
  const livePreview = document.getElementById('live-preview');
  
  const platformSelect = document.getElementById('platform-select');  // Dropdown for platform selection
  
  // Event listener for tab switching
  function switchTab(tab) {
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(t => t.classList.remove('active'));
    
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    
    htmlCode.style.display = (tab === 'html') ? 'block' : 'none';
    cssCode.style.display = (tab === 'css') ? 'block' : 'none';
    jsCode.style.display = (tab === 'js') ? 'block' : 'none';
    
    updatePreview();
  }
  
  htmlTab.addEventListener('click', () => switchTab('html'));
  cssTab.addEventListener('click', () => switchTab('css'));
  jsTab.addEventListener('click', () => switchTab('js'));
  
  // Real-time preview
  function updatePreview() {
    const htmlContent = htmlCode.value;
    const cssContent = cssCode.value;
    const jsContent = jsCode.value;
    
    const iframeDoc = livePreview.contentDocument || livePreview.contentWindow.document;
    
    iframeDoc.open();
    iframeDoc.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${cssContent}</style>
      </head>
      <body>
        ${htmlContent}
        <script>${jsContent}</script>
      </body>
      </html>
    `);
    iframeDoc.close();
  }
  
  htmlCode.addEventListener('input', updatePreview);
  cssCode.addEventListener('input', updatePreview);
  jsCode.addEventListener('input', updatePreview);
  
  // Handle platform link generation
  function generatePlatformLink() {
    const htmlContent = htmlCode.value;
    const cssContent = cssCode.value;
    const jsContent = jsCode.value;

    const selectedPlatform = platformSelect.value; // Get selected platform

    if (selectedPlatform === 'codepen') {
      return generateCodePenLink(htmlContent, cssContent, jsContent);
    } else if (selectedPlatform === 'jsfiddle') {
      return generateJSFiddleLink(htmlContent, cssContent, jsContent);
    } else {
      return generateDataUri(htmlContent, cssContent, jsContent); // Fallback to Data URI
    }
  }

  // Generate a CodePen URL
  function generateCodePenLink(html, css, js) {
    const codePenHtml = encodeURIComponent(html);
    const codePenCss = encodeURIComponent(css);
    const codePenJs = encodeURIComponent(js);
    const codePenUrl = `https://codepen.io/pen?template=YzRvmZz&editors=1000&html=${codePenHtml}&css=${codePenCss}&js=${codePenJs}`;
    return codePenUrl;
  }

  // Generate a JSFiddle URL
  function generateJSFiddleLink(html, css, js) {
    const jsFiddleUrl = `https://jsfiddle.net/pen/?html=${encodeURIComponent(html)}&css=${encodeURIComponent(css)}&js=${encodeURIComponent(js)}`;
    return jsFiddleUrl;
  }

  // Generate a Data URI
  function generateDataUri(html, css, js) {
    const content = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
      </html>
    `;
    return 'data:text/html;charset=utf-8,' + encodeURIComponent(content);
  }

  // Upload asset functionality
  uploadBtn.addEventListener('click', () => {
    fileInput.click();
  });
  
  fileInput.addEventListener('change', function () {
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        const fileUrl = reader.result;
        alert(`File uploaded successfully! URL: ${fileUrl}`);
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Live preview button (Open the code in a new window)
  networkBtn.addEventListener('click', function () {
    const htmlContent = htmlCode.value;
    const cssContent = cssCode.value;
    const jsContent = jsCode.value;
    
    const newWindow = window.open('about:blank', '_blank');
    newWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${cssContent}</style>
      </head>
      <body>
        ${htmlContent}
        <script>${jsContent}</script>
      </body>
      </html>
    `);
  });

  // Download HTML button functionality
  downloadBtn.addEventListener('click', function () {
    const htmlContent = htmlCode.value;
    const cssContent = cssCode.value;
    const jsContent = jsCode.value;
    
    const blob = new Blob([`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${cssContent}</style>
      </head>
      <body>
        ${htmlContent}
        <script>${jsContent}</script>
      </body>
      </html>
    `], { type: 'text/html' });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
  
  // Dropdown for platform selection
  platformSelect.addEventListener('change', function () {
    const platformLink = generatePlatformLink();
    alert(`Platform URL: ${platformLink}`);
  });
});
