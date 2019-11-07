function startIntro(wallet) {
  
    alert(`Welcome to Slots! You currently have a wallet of \$${wallet}.`)
      
    alert(`You must wager money and hope you win money back by having the numbers match in rows!`)
      
    alert(`The amount of money you win depends on the amount of matching numbers you get in a row.`)
      
    alert(`However, if you don't get any matches, you'll earn nothing.`)
      
    alert(`If you do win, you will get prize money equal to your wager multiplied by the matching number you got in a row!.`)
      
    alert(`If multiple rows have matching numbers, the numbers will be added together before your wager is multiplied.`)
      
    }
    
    function startSlots(wallet) {
      
      let wager = prompt('First, please enter your wager to play.')
      
      let newWallet = wallet -= wager
      
      alert(`You now have a wallet of \$${newWallet}`)
      
      let start = prompt(`Your current wager is \$${wager}. When you're ready, type 'Start'!\n===========================================\n                                   0 0 0\n                                   0 0 0 \n                                   0 0 0\n===========================================`);
      if (start.toLowerCase() == 'start'){
      alert('Rolling!')}
      
      function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
      let lineOne = []
      lineOne.push(getRandomInt(7))
      lineOne.push(getRandomInt(7))
      lineOne.push(getRandomInt(7))
      resultOne = alert(`Rolling!\n${lineOne[0]} ${lineOne[1]} ${lineOne[2]}`)
      let lineTwo = []
      lineTwo.push(getRandomInt(7))
      lineTwo.push(getRandomInt(7))
      lineTwo.push(getRandomInt(7))
      resultTwo = alert(`Rolling!\n${lineOne[0]} ${lineOne[1]} ${lineOne[2]}\n${lineTwo[0]} ${lineTwo[1]} ${lineTwo[2]}`)
      let lineThree = []
      lineThree.push(getRandomInt(7))
      lineThree.push(getRandomInt(7))
      lineThree.push(getRandomInt(7))
      resultThree = alert(`Rolling!\n${lineOne[0]} ${lineOne[1]} ${lineOne[2]}\n${lineTwo[0]} ${lineTwo[1]} ${lineTwo[2]}\n${lineThree[0]} ${lineThree[1]} ${lineThree[2]}`)
      
      winnings = []
      
      let win = 0
      
      if ((lineOne[0] === lineOne[1]) && (lineOne[0] === lineOne[2])) 
       {
         winnings.push(lineOne[0]);
         win += 1
       }
      if ((lineTwo[0] == lineTwo[1]) && (lineTwo[0] == lineTwo[2]))
       {
         winnings.push(lineTwo[0]);
         win += 1
       }
      if ((lineThree[0] == lineThree[1]) && (lineThree[0] == lineThree[2]))
       {
         winnings.push(lineThree[0]);
         win += 1
       }
      
      if (win > 0) {
        alert("Yeowza! You've beaten the house!")
      } else {
        alert('FAILURE')
      }
      
      function getTotal(list) {
        let i = 0
        let sum = 0
        while (i < list.length) {
        result = sum += list[i]
        i++ }
        return sum
    }
      
      let total = getTotal(winnings)
      
      let prize = wager * total
      
      newWallet += prize
      
      alert(`Your wallet is currently holding \$${newWallet}.`)
      
      let next = prompt('Play again or cash out? Type Yes or No to confirm.')
        
      if (next === 'no') {
          alert(`Thanks for playing! You cashed out with \$${newWallet}.`)
        } else {
          this.startSlots(newWallet)
        }
    }
    
    startIntro(100)
    startSlots(100)