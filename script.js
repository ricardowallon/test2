function showPage(pageId) {
    var pages = document.querySelectorAll('[id^="page"]');
    pages.forEach(function(page) {
        page.style.display = 'none';
    });
    
    var nextPage = document.getElementById(pageId);
    nextPage.style.display = 'block';
}
