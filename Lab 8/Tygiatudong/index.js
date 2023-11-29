
window.addEventListener('DOMContentLoaded', function() {
    // Lấy tỷ giá từ website bằng XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://example.com/api/exchangerate', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            var exchangeRate = data.exchangeRate;

            // Hiển thị tỷ giá lấy được
            var exchangeRateDiv = document.getElementById('exchange-rate');
            exchangeRateDiv.innerText = 'Tỷ giá: ' + exchangeRate;
        }
    };
    xhr.send();
});
