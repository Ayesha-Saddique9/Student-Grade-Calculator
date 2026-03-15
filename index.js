const studentName = document.getElementById('std-name');
const studentReg = document.getElementById('std-reg');
const studentMarks1 = document.getElementById('std-1');
const studentMarks2 = document.getElementById('std-2');
const studentMarks3 = document.getElementById('std-3');
const button = document.getElementById('btn');
const result1 = document.getElementById('res1');
const result2 = document.getElementById('res2');
const result3 = document.getElementById('res3');
const result4 = document.getElementById('res4');
const result5 = document.getElementById('res5');


button.addEventListener('click',function(){

         if(studentName.value === '' || studentReg.value === ''|| studentMarks1.value === ''|| studentMarks2.value === '' || studentMarks3.value === ''){
          alert('Please fill all Fields');
          return;
    }
    let std_1=  Number(studentMarks1.value);
    let std_2 = Number(studentMarks2.value);
    let std_3 = Number(studentMarks3.value);

     result1.textContent = `Name: ${studentName.value}`;
      result2.textContent = `Registration Number: ${studentReg.value}`;
    const total = std_1 + std_2 + std_3 ;
    result3.textContent = `Your Total Score is ${total}`;
    // console.log(total);

    const average = total/3;
      result4.textContent = `Your Average Score is ${average}`;
    console.log(average);

    if(average >= 90){
        result5.textContent = `Your Grade is A+`;
    }
    else if(average >= 80){
         result5.textContent = `Your Grade is A`;
    }
    else if(average >= 70){
         result5.textContent = `Your Grade is B+`;
    }
        else if(average >= 60){
             result5.textContent = `Your Grade is B`;
    }
    else{
         result5.textContent = `Your Grade is Fail`;
    }
})
