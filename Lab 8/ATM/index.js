function getaction(){
  //Intialise Pin value with varible P
  var p = document.getElementById ('number').value;
  var a = 1234;
  //To check Pin entered is correct or not
  if( p == a){
    document.getElementById ("demo").innerHTML ="Please Choose transcation";
    //if pin number is correct options will Display.
    document.getElementById ('options12'). style.display = 'block';
  }
  else{
     document.getElementById ("demo").innerHTML = "Invalid pin";
  }
}
function myfunction(val){
  //function to display balance amount
  m = 10000;
  // Hiển thị số dư
  if(val==1){
    document.getElementById ('demo1' ).innerHTML ="Your amount is: "+ m;
    document.getElementById ('display' ). style.display = 'none';
    document.getElementById ('display1' ). style.display = 'none';
  }
  // Chọn để hiển thị văn bản để nhập số tiền rút
  if(val==2){
    document.getElementById ('display').style.display = 'block';
    document.getElementById ('display1').style.display = 'none';
  }
  // Hiên thị để chọn kiểu tiền mặt
  if(val==3){
    document.getElementById ('display1').style.display = 'block';
    document.getElementById ('display').style.display = 'none';
  }
}
function getamount(){
  // function To Withdraw Amount
  m = 10000;

  //Xác định giá trị văn bản trong một biến
  var a = document.getElementById ('amount1' ).value;

  // Kiểm tra xem số tiền đã nhập có > số tiền ban đầu hay không và nó phải là bội của 100
  if( a <= m && a % 100 == 0)
  //alert("" +a);
  document.getElementById ('display').innerHTML ="Your withdraw amount : "+a;
  else
  //alert("invalid cash");
  document.getElementById ('display').innerHTML ="Invalid cash";
}
function getamount1(){
  //Xác định giá trị sẽ đc thả xuống trong một biến
  var x = document.getElementById ("myselect1").value
  m = 10000;

  // Kiểm tra xem số tiền đã nhập có > số tiền ban đầu hay không và nó phải là bội của 100
  if(x <= m && x % 100 == 0)
    //alert("take your amount" +x);
    document.getElementById ('display1').innerHTML ="Please take your amount : "+x;
  else
    document.getElementById ('display1').innerHTML ="Invalid cash";
}