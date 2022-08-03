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
  


  // let ST = inputValue.value
  // let MT = inputText.value
  // let stArr = ST.split(' ')
  // console.log(MT)
  // console.log(ST)

  const btn = document.querySelector('.btn')

  function ValidateSelection() {
    var checkboxes = document.getElementsByClassName("check");
    var numberOfCheckedItems = 0;
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked)
        numberOfCheckedItems++;
    }
    if (numberOfCheckedItems > 1) {
      alert("You can't select more than one symbol!");
      return false
    }
  }

  btn.addEventListener('click', () => {
    event.preventDefault()
    var performance = window.performance;
    var t0 = performance.now();

    let ST = inputValue.value //ST = scramble text
    let MT = inputText.value //MT = main text
    let stArr = ST.split(' ') //stArr = scramble text array
    let mtArr = MT.split(' ')

// code to get number of words scrambled
    console.log(mtArr.length)
    console.log(MT)
    console.log(stArr)
    console.log(MT.length)
    
    wordCount.innerHTML = mtArr.length 

// code to get length of characters scanned
    let strLength = stArr.join('')
    console.log(strLength)
    console.log(strLength.length)

    wordMatch.innerHTML = strLength.length

    

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
      console.log("You have not selected anything")
    }
    for (let i = 0; i < stArr.length; i++) {
      while (MT.includes(stArr[i])) {
        MT = MT.replace(stArr[i],
          symbol.repeat(stArr[i].length))
      }
    }
    console.log(MT)
    paragragh.innerHTML = MT

    var t1 = performance.now();
    console.log("Your Words was scrambled in  " + (t1 - t0) + " milliseconds.")

    var time = t1-t0;
    time = +time.toFixed(2);
    
    timeRun.innerHTML = time + ' ms'
    

  })
}

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //