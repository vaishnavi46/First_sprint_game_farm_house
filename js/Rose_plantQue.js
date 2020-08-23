sessionStorage.setItem('total_Score', 'value');

// Rose_plantQue1.html
///////////////////////////////////////////////////////////////////////
function option1()
{
    var score=0;
    score=parseInt(document.getElementById("button1").value);
    localStorage.setItem('total_Score', score); //storing the score locally 
    window.location="Rose_plantQue2.html"; //redirecting to next question
}

function option2()
{
    var score=0;
    score=parseInt(document.getElementById("button2").value);
    localStorage.setItem('total_Score', score);
    window.location="Rose_plantQue2.html";
}

function option3()
{
    var score=0;
    score=parseInt(document.getElementById("button3").value);
    localStorage.setItem('total_Score', score);
    window.location="Rose_plantQue2.html";
}

function option4()
{
    var score=0;
    score=parseInt(document.getElementById("button4").value);
    localStorage.setItem('total_Score', score);
    window.location="Rose_plantQue2.html";
}
// Rose_plantQue2.html
///////////////////////////////////////////////////////////////////////
function option5()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button1").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
    window.location="Rose_plantQue3.html";

}

function option6()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button2").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
    window.location="Rose_plantQue3.html";

}

function option7()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button3").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
    window.location="Rose_plantQue3.html";

}

function option8()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button4").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
    window.location="Rose_plantQue3.html";

}
/////////////////////////////////////////////////////
//Rose_plantQue3.html
function option9()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button1").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Rose_plantQue4.html";

}
function option10()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button2").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Rose_plantQue4.html";

}
function option11()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button3").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Rose_plantQue4.html";

}
function option12()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button4").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Rose_plantQue4.html";

}
///////////////////////////////////////////////
//Aloe-veraQue4.html

function option13()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button1").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
    window.location="Rose_plantfinalpage.html";

}
function option14()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button2").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Rose_plantfinalpage.html";

}
function option15()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button3").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Rose_plantfinalpage.html";

}
function option16()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button4").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Rose_plantfinalpage.html";

}

function finalscore()
{
    let data = parseInt(localStorage.getItem('total_Score'));
    let finalscore=data/4;
    document.getElementById("score").innerHTML=finalscore.toString();

}

function homepage()
{
    window.location="index.html";
    
}
