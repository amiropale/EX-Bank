const user = {
    firstName : 'ariya',
    lastName : 'parsa',
    balance : 0,
    boxes : [
        0,
        0,
        0,
        0
    ],
    deposit : function(amount = 0,box_id = null){
        if(box_id != null){
            this.boxes[box_id] += amount
        }else{
            this.balance += amount
        }

       this.displayMessage('Your deposit successfully recived, The new balance is : ' + this.totalBalance())
    },
    withdraw : function(amount,box_id = null){
        if(box_id != null){
            if(this.boxes[box_id] < amount){
                return this.notEnoughBalance();
            }
            this.boxes[box_id] -= amount;
            this.displayMessage('Your withdraw successfully reduced, The new box' + box_id + 'balance is : ' + this.boxes[box_id])
            return;
        }

        if(this.balance < amount || (this.balance - amount) < 10000){
            return this.notEnoughBalance();
        }

        this.balance -= amount

        this.displayMessage('Your withdraw successfully reduced, The new balance is : ' + this.totalBalance())

    },
    totalBalance : function(){
        let total = this.balance + this.boxes[0] + this.boxes[1] + this.boxes[2] + this.boxes[3]
        return total;
    },
    notEnoughBalance : function() {
        console.log('Your balance is not enough!');
    },
    displayMessage : function(text){
        let message = 'BlueBank :: ** ' + text + ' ** ! <br>'

        document.body.innerHTML += message
        console.log(message)
    }
}


function deposit(account_id,box = null, amount = 0){
    console.log(amount)
}


// deposit(463643,null,7000)

user.deposit(20000)
user.deposit(100000,3)
// user.deposit(500)

// user.withdraw(8000000)
// user.withdraw(6000000)
// user.withdraw(900000)
// user.withdraw(600)

user.withdraw(8000)
user.withdraw(20000,3)
