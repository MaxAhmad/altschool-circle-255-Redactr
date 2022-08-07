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

  let inputValue = document.querySelector('.scrambleText')
  let inputText = document.querySelector('.mainText')
  let paragragh = document.querySelector('.para')
  let check1 = document.querySelector('#check1')
  let check2 = document.querySelector('#check2')
  let check3 = document.querySelector('#check3')
  let symbol
  
  let wordCount = document.querySelector('.totalWords')
  let wordMatch = document.querySelector('.totalMatch')
  let timeRun = document.querySelector('.totalTime')

  const btn = document.querySelector('.btn')

  btn.addEventListener('click', () => {
    event.preventDefault()
    var performance = window.performance;
    var t0 = performance.now();

    let ST = inputValue.value //ST = scramble text
    let MT = inputText.value //MT = main text
   
// code to get number of words scrambled
    let mtArr = MT.split(' ')
    wordCount.innerHTML = mtArr.length 

// code to get length of characters scanned
     let stArr = ST.split(' ') //stArr = scramble text array
    let strLength = stArr.join('')
    wordMatch.innerHTML = strLength.length

    
    // code to get value of selected radio button
    if (check1.checked == true) {
      symbol = document.getElementById("check1").value.trim()
      console.log(symbol)
    }
    else if (check2.checked == true) {
      symbol = document.getElementById("check2").value.trim()
      console.log(symbol)
    }
    else if (check3.checked == true) {
      symbol = document.getElementById("check3").value.trim()
      console.log(symbol)
      console.log(typeof symbol)
    }
    else {
      alert("You have not selected anything")
    }

    // code to scramble words selected
    for (let i = 0; i < stArr.length; i++) {
      while (MT.includes(stArr[i])) {
        MT = MT.replace(stArr[i],
          symbol.repeat(stArr[i].length))
      }
    }

    // codde to display scrambled words with text
    paragragh.innerHTML = MT

    var t1 = performance.now();

    var time = t1-t0;
    time = +time.toFixed(2);
    
    timeRun.innerHTML = time + ' ms'
  })
}

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //