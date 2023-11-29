
function findZodiacSign() {
    var birthday = document.getElementById("birthday").value;
    var date = new Date(birthday);
    var month = date.getMonth() + 1;
    var day = date.getDate();
  
    var zodiacSign = "";
  
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
      zodiacSign = "Bảo Bình";
    }
    else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
      zodiacSign = "Song Ngư";
    }
    else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
      zodiacSign = "Bạch Dương";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
      zodiacSign = "Kim Ngưu";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
      zodiacSign = "Song Tử";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
      zodiacSign = "Cự Giải";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
      zodiacSign = "Sư Tử";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
      zodiacSign = "Xử Nữ";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
      zodiacSign = "Thiên Bình";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
      zodiacSign = "Bọ Cạp";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
      zodiacSign = "Nhân Mã";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
      zodiacSign = "Ma Kết";
    }
  
    document.getElementById("result").innerText = "Chòm sao của bạn là: " + zodiacSign;
  }
  