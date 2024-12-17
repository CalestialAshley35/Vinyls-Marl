function executeHTMLPP() {
  const input = document.getElementById("htmlppInput").value;
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ''; // Clear output

  // Process each line of HTML++ code
  const lines = input.split('\n');
  lines.forEach(line => {
    // <header> command
    if (line.startsWith('<header>')) {
      let content = line.replace('<header>', '').replace('</header>', '');
      let header = document.createElement('div');
      header.classList.add('header');
      header.innerHTML = content;
      outputDiv.appendChild(header);
    }

    // <custombutton> command
    if (line.startsWith('<custombutton>')) {
      let content = line.replace('<custombutton>', '').replace('</custombutton>', '');
      let button = document.createElement('button');
      button.classList.add('custombutton');
      button.innerHTML = content;
      outputDiv.appendChild(button);
    }

    // <img upload> command
    if (line.startsWith('<img upload>')) {
      let inputFile = document.createElement('input');
      inputFile.type = 'file';
      inputFile.accept = 'image/*';
      inputFile.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function() {
          let img = document.createElement('img');
          img.src = reader.result;
          img.classList.add('img-preview');
          outputDiv.appendChild(img);
        };
        reader.readAsDataURL(file);
      });
      outputDiv.appendChild(inputFile);
    }

    // <input> with ensure=numbers
    if (line.startsWith('<input>') && line.includes('ensure=numbers')) {
      let content = line.replace('<input>', '').replace('</input>', '').replace('ensure=numbers', '');
      let inputElement = document.createElement('input');
      inputElement.type = 'text';
      inputElement.placeholder = content;
      inputElement.classList.add('form-input', 'numbers');
      outputDiv.appendChild(inputElement);
      inputElement.addEventListener('input', function(e) {
        // Restrict input to numbers only
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
      });
    }

    // <input> with ensure=lowercase
    if (line.startsWith('<input>') && line.includes('ensure=lowercase')) {
      let content = line.replace('<input>', '').replace('</input>', '').replace('ensure=lowercase', '');
      let inputElement = document.createElement('input');
      inputElement.type = 'text';
      inputElement.placeholder = content;
      inputElement.classList.add('form-input', 'lowercase');
      outputDiv.appendChild(inputElement);
    }

    // <input> with ensure=uppercase
    if (line.startsWith('<input>') && line.includes('ensure=uppercase')) {
      let content = line.replace('<input>', '').replace('</input>', '').replace('ensure=uppercase', '');
      let inputElement = document.createElement('input');
      inputElement.type = 'text';
      inputElement.placeholder = content;
      inputElement.classList.add('form-input', 'uppercase');
      outputDiv.appendChild(inputElement);
    }
  });
}
