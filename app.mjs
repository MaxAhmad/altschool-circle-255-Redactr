function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here
 
  // pls remove the below and make some magic in here!
  //   console.log('make magic in here!');

  //   const header = document.querySelector('h2');
  //   if(header) {
  //     header.textContent = 'make some magic here!!';
  //   }
  // };

  // Selecting elements
  let inputValue = document.querySelector('.scrambleText')
  let inputText = document.querySelector('.mainText')
  let paragragh = document.querySelector('.displaysection')

  let wordCount = document.querySelector('.totalWords')
  let wordMatch = document.querySelector('.totalMatch')
  let timeRun = document.querySelector('.totalTime')

  let check1 = document.querySelector('#check1')
  let check2 = document.querySelector('#check2')
  let check3 = document.querySelector('#check3')

  // Declaring variables
  let symbol, ST, MT, mtArr, stArr,strLength

   paragragh.style.display = 'none'
  
  const btn = document.querySelector('.btn')

  btn.addEventListener('click', () => {
     event.preventDefault()

    // code to get starting time of execution
    var performance = window.performance;
    var t0 = performance.now();

    // code to get value of selected radio button
    check1.checked == true ? symbol = check1.value : 
    check2.checked == true ? symbol = check2.value : 
    check3.checked == true ? symbol = check3.value : 
    alert('You have not slected a symbol')

    ST = inputValue.value.toLowerCase() //ST = scramble text
    MT = inputText.value.toLowerCase() //MT = main text
   
// code to get number of words scrambled
    mtArr = MT.split(' ')
    wordCount.innerHTML = mtArr.length 

// code to get length of characters scanned
     stArr = ST.split(' ') //stArr = scramble text array
     strLength = stArr.join('')
    wordMatch.innerHTML = strLength.length
    
    // code to scramble words selected
    for (let i = 0; i < stArr.length; i++) {
      while (MT.includes(stArr[i])) {
        MT = MT.replace(stArr[i],
          symbol.repeat(stArr[i].length))
      }
    }

    // codde to display scrambled words with text
     paragragh.innerHTML = MT
    paragragh.style.display ='block'
    inputText.value = ' ';

    // code to get ending time of execution
    var t1 = performance.now();

    var time = t1-t0;
    time = +time.toFixed(2);
    
    timeRun.innerHTML = time + ' ms'
  })
}

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //