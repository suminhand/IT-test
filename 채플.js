function Calculation(){
  var MBTI=""
  if (E>I)
  {
    MBTI=MBTI+"E"
    if (S>N)
    {
      MBTI=MBTI+"S"
      if (P>J)
      {
        MBTI=MBTI+"P"
      }
      else
      {
        MBTI=MBTI+"J"
      }
    }
    else
    {
      MBTI=MBTI+"N"
      if (P>J)
      {
        MBTI=MBTI+"P"
      }
      else
      {
        MBTI=MBTI+"J"
      }
    }
  }
  else
  {
    MBTI=MBTI+"I"
    if (S>N)
    {
      MBTI=MBTI+"S"
      if (P>J)
      {
        MBTI=MBTI+"P"
      }
      else
      {
        MBTI=MBTI+"J"
      }
    }
    else
    {
      MBTI=MBTI+"N"
      if (P>J)
      {
        MBTI=MBTI+"P"
      }
      else
      {
        MBTI=MBTI+"J"
      }
    }
  }
  document.getElementById("MBTI").innerHTML=MBTI;
}

window.addEventListener('load', function () {
    document.getElementById("Q1").style.display="none";
    document.getElementById("Q2").style.display="none";
    document.getElementById("Q3").style.display="none";
    document.getElementById("Q4").style.display="none";
    document.getElementById("Q5").style.display="none";
    document.getElementById("Q6").style.display="none";
    document.getElementById("Q7").style.display="none";
    document.getElementById("Q8").style.display="none";
    document.getElementById("Q9").style.display="none";
    document.getElementById("Q10").style.display="none";
    document.getElementById("Q11").style.display="none";
    document.getElementById("Q12").style.display="none";
    document.getElementById("result").style.display="none";
  })
  //offDisplay//
  function offDisplayQ1(a){
    document.getElementById("Q1").style.display="none";
    if (document.getElementById(a.getAttribute('id')).getAttribute('id')=='Q1_1')
    {
      E+=1
    }
    else
    {
      i+=1
    }
  }
  function offDisplayQ2(a){
    document.getElementById("Q2").style.display="none";
    if (document.getElementById(a.getAttribute('id')).getAttribute('id')=='Q2_1')
    {
      S+=1
    }
    else
    {
      N+=1
    }
  }
  function offDisplayQ3(a){
    document.getElementById("Q3").style.display="none";
    if (document.getElementById(a.getAttribute('id')).getAttribute('id')=='Q3_1')
    {
      P+=1
    }
    else
    {
      J+=1
    }
  }
  function offDisplayQ4(a){
    document.getElementById("Q4").style.display="none";
    if (document.getElementById(a.getAttribute('id')).getAttribute('id')=='Q4_1')
    {
      S+=1
    }
    else
    {
      N+=1
    }
  }
  function offDisplayQ5(a){
    document.getElementById("Q5").style.display="none";
    if (document.getElementById(a.getAttribute('id')).getAttribute('id')=='Q5_1')
    {
      E+=1
    }
    else
    {
      i+=1
    }
  }
  function offDisplayQ6(a){
    document.getElementById("Q6").style.display="none";
    if (document.getElementById(a.getAttribute('id')).getAttribute('id')=='Q6_1')
    {
      S+=1
    }
    else
    {
      N+=1
    }
  }
  function offDisplayQ7(a){
    document.getElementById("Q7").style.display="none";
    if (document.getElementById(a.getAttribute('id')).getAttribute('id')=='Q7_1')
    {
      P+=1
    }
    else
    {
      J+=1
    }
  }
  function offDisplayQ8(a){
    document.getElementById("Q8").style.display="none";
    if (document.getElementById(a.getAttribute('id')).getAttribute('id')=='Q8_1')
    {
      E+=1
    }
    else
    {
      i+=1
    }
  }
  function offDisplayQ9(a){
    document.getElementById("Q9").style.display="none";
    if (document.getElementById(a.getAttribute('id')).getAttribute('id')=='Q9_1')
    {
      S+=1
    }
    else
    {
      N+=1
    }
  }
  function offDisplayQ10(a){
    document.getElementById("Q10").style.display="none";
    if (document.getElementById(a.getAttribute('id')).getAttribute('id')=='Q10_1')
    {
      P+=1
    }
    else
    {
      J+=1
    }
  }
  function offDisplayQ11(a){
    document.getElementById("Q11").style.display="none";
    if (document.getElementById(a.getAttribute('id')).getAttribute('id')=='Q11_1')
    {
      S+=1
    }
    else
    {
      N+=1
    }
  }
  function offDisplayQ12(a){
    document.getElementById("Q12").style.display="none";
  }
 function offDisplaystartbutton(){
    document.getElementById("start_page").style.display="none";
 } 
  //onDisplay//
  function onDisplayQ1(){
    document.getElementById("Q1").style.display="flex";
  }
  function onDisplayQ2(){
    document.getElementById("Q2").style.display="flex";
  }
  function onDisplayQ3(){
    document.getElementById("Q3").style.display="flex";
  }
  function onDisplayQ4(){
    document.getElementById("Q4").style.display="flex";
  }
  function onDisplayQ5(){
    document.getElementById("Q5").style.display="flex";
  }
  function onDisplayQ6(){
    document.getElementById("Q6").style.display="flex";
  }
  function onDisplayQ7(){
    document.getElementById("Q7").style.display="flex";
  }
  function onDisplayQ8(){
    document.getElementById("Q8").style.display="flex";
  }
  function onDisplayQ9(){
    document.getElementById("Q9").style.display="flex";
  }
  function onDisplayQ10(){
    document.getElementById("Q10").style.display="flex";
  }
  function onDisplayQ11(){
    document.getElementById("Q11").style.display="flex";
  }
  function onDisplayQ12(){
    document.getElementById("Q12").style.display="flex";
  }
  function onresult(){
    document.getElementById("result").style.display="flex";
  }
  //reset//
  function reset(){
    location.reload();
    location.replace(location.href);
    location.href = location.href;
    document.getElementById("reset").history.go(0);
  }
