const preview = document.getElementById('preview');
const consoleDiv = document.getElementById('console');

function logToConsole(message) {
    consoleDiv.innerHTML += `<div>${message}</div>`;
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

function addHeader() {
    const headerText = prompt("Enter header text:");
    const headerTag = prompt("Enter header tag (e.g., h1, h2):", "h1");
    if (headerText && headerTag) {
        preview.innerHTML += `<${headerTag}>${headerText}</${headerTag}>`;
        logToConsole(`Header <${headerTag}> added with text "${headerText}".`);
    }
}

function addParagraph() {
    const paragraphText = prompt("Enter paragraph text:");
    if (paragraphText) {
        preview.innerHTML += `<p>${paragraphText}</p>`;
        logToConsole(`Paragraph added with text: "${paragraphText}".`);
    }
}

function addList() {
    const listType = prompt("Enter list type (ul for unordered, ol for ordered):", "ul");
    const items = prompt("Enter list items separated by commas:");
    if (listType && items) {
        const itemsArray = items.split(',').map(item => `<li>${item.trim()}</li>`).join('');
        preview.innerHTML += `<${listType}>${itemsArray}</${listType}>`;
        logToConsole(`List added with type "${listType}" and items: ${items}.`);
    }
}

function addNav() {
    const navLinks = prompt("Enter navigation links (format: Text1,URL1;Text2,URL2):");
    if (navLinks) {
        const links = navLinks.split(';').map(link => {
            const [text, url] = link.split(',');
            return `<a href="${url.trim()}" target="_blank">${text.trim()}</a>`;
        }).join(' | ');
        preview.innerHTML += `<nav style="padding: 10px; background: #bdc3c7;">${links}</nav>`;
        logToConsole(`Navigation bar added with links: ${navLinks}.`);
    }
}

function addCustomCSS() {
    const css = prompt("Enter your CSS (e.g., h1 { color: red; }):");
    if (css) {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = css;
        document.head.appendChild(styleTag);
        logToConsole(`Custom CSS applied: ${css}`);
    }
}

function addLink() {
    const linkText = prompt("Enter link text:");
    const href = prompt("Enter URL:", "https://");
    if (linkText && href) {
        preview.innerHTML += `<a href="${href}" target="_blank">${linkText}</a>`;
        logToConsole(`Link added: <a href="${href}" target="_blank">${linkText}</a>`);
    }
}

function addCanvas() {
    const canvasId = prompt("Enter canvas ID:");
    if (canvasId) {
        preview.innerHTML += `<canvas id="${canvasId}" width="500" height="300" style="border:1px solid #000;"></canvas>`;
        logToConsole(`Canvas added with ID "${canvasId}".`);
    }
}

function uploadImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                preview.innerHTML += `<img src="${e.target.result}" alt="Uploaded Image" style="max-width:100%;"/>`;
                logToConsole(`Image uploaded: ${file.name}`);
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

function saveToLocalStorage() {
    localStorage.setItem('workspace', preview.innerHTML);
    logToConsole("Workspace saved to localStorage.");
}

function loadFromLocalStorage() {
    const savedContent = localStorage.getItem('workspace');
    if (savedContent) {
        preview.innerHTML = savedContent;
        logToConsole("Workspace loaded from localStorage.");
    } else {
        logToConsole("No saved workspace found in localStorage.");
    }
}

function clearWorkspace() {
    preview.innerHTML = '';
    logToConsole("Workspace cleared.");
}

function clearConsole() {
    consoleDiv.innerHTML = '';
    logToConsole("Console cleared.");
          }
