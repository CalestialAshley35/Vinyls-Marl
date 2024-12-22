# Vinyl's Marl

Vinyl's Marl is a powerful and free Integrated Development Environment (IDE) created by **Calestial Ashley**. It supports writing code in **HTML**, **CSS**, and **JavaScript**, and offers unique features like **HTML++**, asset uploading, custom tag creation, and more. Vinyl's Marl is designed for both novice and advanced developers who want a flexible, all-in-one environment for web development.

## Key Features

### 1. **HTML, CSS, and JS Support**
Vinyl's Marl fully supports writing and testing code in **HTML**, **CSS**, and **JavaScript**. You can create dynamic web pages with live previews, and download your work as an HTML file.

### 2. **HTML++ Extension**
HTML++ is an extended version of HTML that introduces custom tags for enhanced functionality:
- **<videoEmbed>**: Embeds video content.
- **<fontStyle>**: Applies custom font styles to text.
- **<textStyle>**: Offers text styling like bold, italic, and color.
- **<tableCreate>**: Easily creates tables with specified rows, columns, and borders.
- **<markdown>**: Converts markdown content to HTML.
- **<styleInject>**: Injects custom CSS into your document.
- **<embedContent>**: Embeds external content like YouTube videos or other media.
- **<codeBlock>**: Displays code with syntax highlighting.
- **<formElement>**: Creates form elements like text inputs.
- 
### 3. **Asset Uploading**
Easily upload assets such as images, CSS files, or JavaScript files. Vinyl's Marl supports automatic embedding of assets (e.g., `<img>` tags for images).

### 4. **Font Awesome Icons**
Vinyl's Marl comes with built-in support for **Font Awesome icons**. Users can quickly access a few popular icons, but the platform supports **all Font Awesome icons**. Clicking an icon will copy it for easy use.

### 5. **ProjectLabs**
The **ProjectLabs** section shows a variety of projects and allows users to interact with them. You can try out different project templates or create your own.

### 6. **Package Manager (esh)**
Vinyl's Marl comes with a package manager called **esh** (Extensibility Increases HTML). With esh, you can:
- Create reusable code modules.
- Install and manage modules with commands like:
  - `esh create <module_name> html:<html code>`
  - `esh install <module_name>`

### 7. **Custom Tag Creation**
Create custom HTML tags using the `<create>` tag:
```html
<create>name="<tagname>" js:<real HTML></create>

Once created, you can import your custom tag into your project using:

<import><tag name></import>

8. Code Download and Live Preview

You can download your work as an HTML file and preview it live in the about:blank tab.
```

### 8. **Vinyl's DaFront**
Build HTML5 Applications with buttons like Adding Header and Paragraph 
You need to upload Image and you can add Headers, Paragraph, Add Links, Lists, Canvas, Navs

---

How to Use

1. Open Vinyl's Marl Editor

Click on the Editor button to start writing your code in HTML, CSS, and JavaScript. You'll be able to see live previews and download your code as an HTML file.

2. Try Font Awesome Icons

Click on the Font Awesome Icons button to access and copy popular icons. Vinyl's Marl supports all Font Awesome icons, and you can easily copy any icon to your clipboard.

3. Explore ProjectLabs

Click on ProjectLabs to explore different projects. Try out the HTML++ extension, which introduces custom tags like <videoEmbed>, <fontStyle>, <textStyle>, and more. and Try out Vinyl's DaFront 

4. Create Custom Tags with HTML++

Use the HTML++ extension to extend HTML with new functionality:

<videoEmbed src="video-url" controls></videoEmbed>
<fontStyle font="Arial" color="blue" size="16px">Styled Text</fontStyle>
<tableCreate rows="3" cols="3" border="1"></tableCreate>
<markdown content="**Bold** and *Italic* Text"></markdown>
<styleInject>body { background-color: #f0f0f0; }</styleInject>
<embedContent type="youtube" url="video-url"></embedContent>
<codeBlock language="html" content="<div>Code</div>"></codeBlock>
<formElement type="text" name="username" placeholder="Enter Username"></formElement>

5. Use the esh Package Manager

Create and install modules using esh commands:

# Create a module
```
esh create myCard html:<div class="card"><h2>Title</h2><p>Description goes here...</p></div>

# Install a module
esh install myCard

6. Creating Custom Tags

To create your own custom tag:

<create>name="myTag" js:<div>Custom Tag</div></create>

Then, import it into your project:

<import><myTag></import>
```
---

## Installation

Vinyl's Marl is a free platform, and you don’t need to install anything to start using it. Simply visit the website and start coding.


---

## Conclusion

Vinyl's Marl is a powerful and flexible web development IDE with unique features like HTML++, asset uploading, and custom tag creation. Whether you're a beginner or an advanced developer, Vinyl's Marl offers everything you need to experiment, code, and create sophisticated web projects.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to copy and paste this into your **README.md** file! It covers the key features, usage instructions, and examples of how to work with **Vinyl's Marl**.
