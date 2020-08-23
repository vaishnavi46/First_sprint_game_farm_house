sessionStorage.setItem('total_Score', 'value');

// Holy-Basilque1.html
///////////////////////////////////////////////////////////////////////
function option1()
{
    var score=0;
    score=parseInt(document.getElementById("button1").value);
    localStorage.setItem('total_Score', score); //storing the score locally 
    window.location="Holy_basilque2.html"; //redirecting to next question
}

function option2()
{
    var score=0;
    score=parseInt(document.getElementById("button2").value);
    localStorage.setItem('total_Score', score);
    window.location="Holy_basilque2.html";
}

function option3()
{
    var score=0;
    score=parseInt(document.getElementById("button3").value);
    localStorage.setItem('total_Score', score);
    window.location="Holy_basilque2.html";
}

function option4()
{
    var score=0;
    score=parseInt(document.getElementById("button4").value);
    localStorage.setItem('total_Score', score);
    window.location="Holy_basilque2.html";
}
// Holy_basilque2.html
///////////////////////////////////////////////////////////////////////
function option5()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button1").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
    window.location="Holy_basilque3.html";

}

function option6()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button2").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
    window.location="Holy_basilque3.html";

}

function option7()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button3").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
    window.location="Holy_basilque3.html";

}

function option8()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button4").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
    window.location="Holy_basilque3.html";

}
/////////////////////////////////////////////////////
//Holy_basilque3.html
function option9()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button1").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Holy_basilque4.html";

}
function option10()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button2").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Holy_basilque4.html";

}
function option11()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button3").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Holy_basilque4.html";

}
function option12()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button4").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Holy_basilque4.html";

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
    window.location="Holy_basilfinalpage.html";

}
function option14()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button2").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Holy_basilfinalpage.html";

}
function option15()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button3").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Holy_basilfinalpage.html";

}
function option16()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button4").value);
    data=data+score;
    alert(data);
    localStorage.setItem('total_Score', data);
     window.location="Holy_basilfinalpage.html";

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

