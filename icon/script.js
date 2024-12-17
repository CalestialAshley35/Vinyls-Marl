function copyCode(iconCode) {
    // Create a temporary textarea element to hold the icon code
    const textarea = document.createElement("textarea");
    textarea.value = iconCode;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    // Show a notification
    const notification = document.getElementById("notification");
    notification.style.display = "block";
    setTimeout(() => {
        notification.style.display = "none";
    }, 2000);
}
