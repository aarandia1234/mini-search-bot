function search() {
    const query = document.getElementById('searchBox').value;
    if (!query.trim()) {
        result.innerHTML = "<p>Please enter a search query.</p>";
        return;
    }

    let embeddedPages = document.getElementById('embedded_pages');
    embeddedPages.style.display = 'flex';

    let googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}&igu=1`;
    let bingUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
    let wikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(query)}`;

    let googleFrame = document.getElementById('googleFrame');
    let bingFrame = document.getElementById('bingFrame');
    let wikiFrame = document.getElementById('wikiFrame');

    googleFrame.src = googleUrl;
    bingFrame.src = bingUrl;
    wikiFrame.src = wikiUrl;

    let googleButton = document.getElementById('google_button');
    let bingButton = document.getElementById('bing_button');
    let wikiButton = document.getElementById('wiki_button');

    function open_url(url) {
        window.open(url, '_blank');
    }

    googleButton.onclick = function() {
        open_url(googleUrl);
    };
    bingButton.onclick = function() {
        open_url(bingUrl);
    };
    wikiButton.onclick = function() {
        open_url(wikiUrl);
    };
}
