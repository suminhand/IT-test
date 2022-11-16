var gray
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
  if (gray==1)
  {
    if (MBTI=="ESP"||MBTI=="ESJ"||MBTI=="ENP"||MBTI=="ENJ") //완//
    {
    //게임 기획자, 게임 프로그래머, 게임 그래픽 디자이너//
    document.getElementById("result_box1").style.display="none";
    document.getElementById("result_box3").style.display="none";
    document.getElementById("result_box4").style.display="none";
    document.getElementById("result_box5").style.display="none";
    document.getElementById("result_box6").style.display="none";
    }
    else if (MBTI=="ISP"||MBTI=="ISJ"||MBTI=="INP"||MBTI=="INJ") //완//
    {
    //공간스캐닝 소프트웨어 개발자, 가상현실전문가, 증강현실전문가//
    document.getElementById("result_box1").style.display="none";
    document.getElementById("result_box2").style.display="none";
    document.getElementById("result_box3").style.display="none";
    document.getElementById("result_box4").style.display="none";
    document.getElementById("result_box6").style.display="none";
    }
  }
  else if (gray==2)
  {
    if (MBTI=="ISJ"||MBTI=="ISP") //완//
    {
      //빅 데이터 엔지니어, 빅 데이터 분석가, 데이터 과학자//
      document.getElementById("result_box2").style.display="none";
      document.getElementById("result_box3").style.display="none";
      document.getElementById("result_box4").style.display="none";
      document.getElementById("result_box5").style.display="none";
      document.getElementById("result_box6").style.display="none";
    }
    else if (MBTI=="INP"||MBTI=="INJ") //완//
    {
      //서버 보안 전문가, 악성 코드 전문가, 모의 해킹 전문가//
      document.getElementById("result_box1").style.display="none";
      document.getElementById("result_box2").style.display="none";
      document.getElementById("result_box4").style.display="none";
      document.getElementById("result_box5").style.display="none";
      document.getElementById("result_box6").style.display="none";
    }
    else if (MBTI=="ESP"||MBTI=="ENP") //완//
    {
      //초중학교 정보 선생님, 컴퓨터 전문 강사//
      document.getElementById("result_box1").style.display="none";
      document.getElementById("result_box2").style.display="none";
      document.getElementById("result_box3").style.display="none";
      document.getElementById("result_box5").style.display="none";
      document.getElementById("result_box6").style.display="none";
    }
    else if (MBTI=="ESJ"||MBTI=="ENJ") //완//
    {
      //소프트웨어 개발자, 임베디드 개발자//
      document.getElementById("result_box1").style.display="none";
      document.getElementById("result_box2").style.display="none";
      document.getElementById("result_box3").style.display="none";
      document.getElementById("result_box4").style.display="none";
      document.getElementById("result_box5").style.display="none";
    }
  }
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
      I+=1
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
      I+=1
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
      I+=1
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
    if (document.getElementById(a.getAttribute('id')).getAttribute('id')=='Q12_1')
    {
      gray=1
    }
    else
    {
      gray=2
    }
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