function attachEventListeners() {
    document.querySelectorAll('.folder').forEach(folder => {
        folder.onclick = function() {
            const path = this.getAttribute('data-path');
            updateFileList(path);
        };
    });
}

// Initially bind event listeners when the page loads
document.addEventListener('DOMContentLoaded', function() {
    attachEventListeners();
});