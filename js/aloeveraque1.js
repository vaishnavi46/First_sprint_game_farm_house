var Que1=['Sandy','Clay','pottysoil','Cactussoil'];
// var score=[80,50,100,90];
sessionStorage.setItem('total_Score', 'value');

// Aloe_veraQue1.html
///////////////////////////////////////////////////////////////////////
function option1()
{
    var score=0;
    score=parseInt(document.getElementById("button1").value);
    localStorage.setItem('total_Score', score); //storing the score locally 
    window.location="Aloe_veraQue2.html"; //redirecting to next question
}

function option2()
{
    var score=0;
    score=parseInt(document.getElementById("button2").value);
    localStorage.setItem('total_Score', score);
    window.location="Aloe_veraQue2.html";
}

function option3()
{
    var score=0;
    score=parseInt(document.getElementById("button3").value);
    localStorage.setItem('total_Score', score);
    window.location="Aloe_veraQue2.html";
}

function option4()
{
    var score=0;
    score=parseInt(document.getElementById("button4").value);
    localStorage.setItem('total_Score', score);
    window.location="Aloe_veraQue2.html";
}
// Aloe_veraQue2.html
///////////////////////////////////////////////////////////////////////
function LoadLevel1()
{
    document.getElementById("Image1").innerHTML='<img class="aloe1" src="images/A_1.png" width="400px" height="400px">';
}
function option5()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button1").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
    window.location="Aloe_veraQue3.html";

}

function option6()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button2").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
    window.location="Aloe_veraQue3.html";

}

function option7()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button3").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
    window.location="Aloe_veraQue3.html";

}

function option8()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button4").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
    window.location="Aloe_veraQue3.html";

}
/////////////////////////////////////////////////////
//Aloe-veraQue3.html
function LoadLevel2()
{
    document.getElementById("Image1").innerHTML='<img class="aloe1" src="images/A_2.png" width="360px" height="400px">';
}
function option9()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button1").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Aloe_veraQue4.html";

}
function option10()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button2").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Aloe_veraQue4.html";

}
function option11()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button3").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Aloe_veraQue4.html";

}
function option12()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button4").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Aloe_veraQue4.html";

}
///////////////////////////////////////////////
//Aloe-veraQue4.html
function LoadLevel3()
{
    document.getElementById("Image1").innerHTML='<img class="aloe1" src="images/A_3.png" width="360px" height="400px">';
}
function option13()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button1").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
    window.location="Aloe-veraFinalpage.html";

}
function option14()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button2").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Aloe-veraFinalpage.html";

}
function option15()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button3").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Aloe-veraFinalpage.html";

}
function option16()
{
    var score=0;
    let data = parseInt(localStorage.getItem('total_Score'));
    score=parseInt(document.getElementById("button4").value);
    data=data+score;
    localStorage.setItem('total_Score', data);
     window.location="Aloe-veraFinalpage.html";

}

function finalscore()
{
    let data = parseInt(localStorage.getItem('total_Score'));
    let finalscore=data/4;
    document.getElementById("Image1").innerHTML='<img class="aloe1" src="images/A_4.png" width="360px" height="400px">';
    document.getElementById("score").innerHTML=finalscore.toString();

}
function homepage()
{
    window.location="index.html";
}