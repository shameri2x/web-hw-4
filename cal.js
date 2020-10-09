function submit() { 
    let quiz = document.getElementById("Quizes").value ;
    let Midterm = document.getElementById("Midterm").value ;
    let FinalTest = document.getElementById("FinalTest").value ;
    let result = Number(quiz) + Number(Midterm) + Number(FinalTest) ;

    document.getElementById("total_grades").innerHTML = result;

    if ( result <0) {
        document.getElementById('final_grade').innerHTML = "  تأكد من الأرقااام يالحبييب <br> <img src='imgs/error.gif' alt='' width:100px;> ";
    } else if ( result >= 0 && result < 60) {
        document.getElementById('final_grade').innerHTML = " F  <br> <img src='imgs/cry.gif' alt='' width:100px;>";
    } else if (result >= 60 && result <70){
        document.getElementById('final_grade').innerHTML = " D <br> <img src='imgs/workhard.gif' alt='' width:100px;> ";
    } else if (result >= 70 && result <80){
        document.getElementById('final_grade').innerHTML = "C <br> <img src='imgs/effort.gif' alt='' width:100px;>  ";
    } else if (result >=80 && result < 90){
        document.getElementById('final_grade').innerHTML = " B <br> <img src='imgs/good.gif' alt='' width:100px;> ";
    } else if (result >= 90 && result <= 100){
        document.getElementById('final_grade').innerHTML = " A <br> <img src='imgs/exellent.gif' alt='' width:100px;>  ";
    } else if (result > 100) {
        document.getElementById('final_grade').innerHTML = "  اهدى اينشتاين حبيبي جيك عالارقام <br> <img src='imgs/what.jpg' alt='' width:100px;> ";
    }
}

function submit2(){
   
    let numbers = document.getElementById('numbers').value.split(",");
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (isNaN(numbers[i])) {
            break;
        }
        result += Number(numbers[i]);
     
     
        document.getElementById("total_grades").innerText = result;

        if ( result <0) {
            document.getElementById('final_grade').innerHTML = "  تأكد من الأرقااام يالحبييب <br> <img src='imgs/error.gif' alt='' height='150px' width:100px;> ";
        } else if ( result >= 0 && result < 60) {
            document.getElementById('final_grade').innerHTML = " F  <br> <img src='imgs/cry.gif' alt='' height='150px' width:100px;>";
        } else if (result >= 60 && result <70){
            document.getElementById('final_grade').innerHTML = " D <br> <img src='imgs/workhard.gif' alt=''  height='150px' width:100px;> ";
        } else if (result >= 70 && result <80){
            document.getElementById('final_grade').innerHTML = "C <br> <img src='imgs/effort.gif' alt='' height='150px' width:100px;>  ";
        } else if (result >=80 && result < 90){
            document.getElementById('final_grade').innerHTML = " B <br> <img src='imgs/good.gif' alt='' height='150px' width:100px;> ";
        } else if (result >= 90 && result <= 100){
            document.getElementById('final_grade').innerHTML = " A <br> <img src='imgs/exellent.gif' alt='' height='150px' width:100px;>  ";
        } else if (result > 100) {
            document.getElementById('final_grade').innerHTML = "  اهدى اينشتاين حبيبي جيك عالارقام <br> <img src='imgs/what.jpg' alt=''  height='150px' width:100px;> ";
        }
    }
    
}
