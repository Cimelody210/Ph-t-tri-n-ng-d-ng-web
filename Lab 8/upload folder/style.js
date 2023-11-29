// Hàm với nhiệm vụ append 1 tệp mới sau khi chọn từ máy tính / điện thoại của người dùng
function appendFile(fileId) {
    // Khởi tạo cấu trúc giao diện file
    const newFile = `
        <img width="30" height="30" src="https://findicons.com/files/icons/1579/devine/256/file.png" alt="File">
        <div class="app__file__content">
          <div class="file__content">
            <h2 class="file__title">Đang tải</h2> 
            <span class="file__percent">0%</span>
          </div>  
          <div class="file__progress" data-trigger="progress" data-progress="0">
            <span></span>
          </div>
        </div>
      `;
    
    // Bọc giao diện bởi 1 div với id = {fileId} và có class là app__file để nhận CSS được viết  
    const div = document.createElement("DIV");
    div.setAttribute("id", fileId);
    div.classList.add("app__file");
    div.innerHTML = newFile;
    
    // Bước cuối cùng, đẩy giao diện vào wrapper của nó  
    document.querySelector("#app__files").append(div);
}