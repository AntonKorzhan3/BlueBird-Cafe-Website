function game(){
    var userN;
    var computerN;
    var msg;
    var points = [0, 0];

    for(i=1; i < 4; i++){
        userN = parseInt(prompt("Enter a Number from 1-10"));
        computerN = Math.floor(Math.random()*11);

        if(userN > computerN){
            msg="You have Won!";
            points[1]++;
        }else if(userN < computerN){
            msg="You have Lost";
            points[0]++;
        }else if(userN == computerN){
            msg="It is a draw...I dont like draw's";
        }else{
            msg="Invalid Number Entered";
        }
        alert(msg);
    }
    document.getElementById("userFeedback").textContent = "Thanks for Playing, your Points are " +points[1];

}