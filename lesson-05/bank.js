let balance = 500;
function bank() {
  do {
    let com = prompt("Enter a Command:");
    switch (com) {
      case "W":
        let withdraw = prompt("Enter an amount to withdraw:");
        if (withdraw > balance) {
          prompt(
            "Error: No withdrawing more than your current balance of $",
            balance
          );
        } else if (balance - withdraw <= 300) {
          let areUSure = confirm(
            "Are you sure you want to leave less than $300 in your account?"
          );
          if (areUSure == True) {
            balance -= withdraw;
          }
        } else {
          balance -= withdraw;
        }
        break;
      case "D":
        let deposit = prompt("Enter an amount to deposit:");
        if (deposit >= 50000) {
          prompt("Invalid amount: No deposits over $50,000.00");
        } else {
          balance += deposit;
        }
        break;
      case "B":
        prompt("Current Balance: ", balance);
        break;
    }
  } while (com != "Q");
  exit;
}
