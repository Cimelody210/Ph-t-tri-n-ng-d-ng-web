document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var to = document.getElementById("to").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    var mailtoLink = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);
    
    window.location.href = mailtoLink;
    
    document.getElementById("response").innerHTML = "Email đã được gửi!";
});

