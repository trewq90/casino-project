function startSlots(wallet) {
  alert(`Welcome to Slots! You currently have a wallet of \$${wallet}.`)
  
  let wager = prompt('First, please enter your wager to play.')
  
  alert(`The amount of money you win depends on the amount of matching numbers you get in a row.`)
  
  alert(`However, if you don't get any matches, you'll have to pay again.`)
  
  alert(`If you do win, you will get your wager multiplied by the matching number you got in a row!.`)
  
  let start = prompt(`Your current wager is \$${wager}. When you're ready, type 'Start'!\n===========================================\n                                   0 0 0\n                                   0 0 0 \n                                   0 0 0\n===========================================`);
  if (start.toLowerCase() == 'start'){
  console.log('nice')}
}

startSlots(100)