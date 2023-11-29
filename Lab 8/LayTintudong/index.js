
// Địa chỉ URL của trang báo cần lấy tin tức
const newsUrl = 'https://vnexpress.net/';

// Lấy dữ liệu từ trang báo
fetch(newsUrl)
    .then(response => response.json())
    .then(data => {
        // Xử lý dữ liệu và hiển thị tin tức
        const newsContainer = document.getElementById('newsContainer');
        data.articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article');
            const titleElement = document.createElement('h3');
            titleElement.textContent = article.title;
            articleElement.appendChild(titleElement);
            newsContainer.appendChild(articleElement);
        });
    })
    .catch(error => {
        console.log('Đã xảy ra lỗi: ', error);
    });

