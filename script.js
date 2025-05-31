// Configuration - Replace with your Notion page URL
const NOTION_PAGE_URL = 'https://fossil-gruyere-1bd.notion.site/Hi-I-m-Likhith-1fe690caeff2808c9ec4ea6d73110b5f';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('notion-iframe');
    const container = document.querySelector('.iframe-container');
    
    // Show loading state
    showLoading();
    
    // Set the Notion page URL
    if (NOTION_PAGE_URL && NOTION_PAGE_URL !== 'https://your-notion-page-url-here.com') {
        iframe.src = NOTION_PAGE_URL;
    } else {
        showError('Please configure your Notion page URL in script.js');
        return;
    }
    
    // Handle iframe load events
    iframe.addEventListener('load', function() {
        hideLoading();
        iframe.style.opacity = '1';
    });
    
    iframe.addEventListener('error', function() {
        hideLoading();
        showError('Failed to load Notion page. Please check the URL and try again.');
    });
    
    // Fallback timeout
    setTimeout(function() {
        if (iframe.style.opacity !== '1') {
            hideLoading();
            showError('Loading timeout. Please check your internet connection and try again.');
        }
    }, 10000);
});

function showLoading() {
    const container = document.querySelector('.iframe-container');
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading';
    loadingDiv.textContent = 'Loading Notion page...';
    loadingDiv.id = 'loading-indicator';
    container.appendChild(loadingDiv);
}

function hideLoading() {
    const loadingDiv = document.getElementById('loading-indicator');
    if (loadingDiv) {
        loadingDiv.remove();
    }
}

function showError(message) {
    const container = document.querySelector('.iframe-container');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.innerHTML = `
        <h3>Error</h3>
        <p>${message}</p>
        <br>
        <small>Make sure your Notion page is publicly accessible</small>
    `;
    errorDiv.id = 'error-indicator';
    container.appendChild(errorDiv);
}

// Function to update the Notion URL dynamically
function updateNotionUrl(newUrl) {
    const iframe = document.getElementById('notion-iframe');
    iframe.src = newUrl;
    showLoading();
}

// Export for potential use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { updateNotionUrl };
}
