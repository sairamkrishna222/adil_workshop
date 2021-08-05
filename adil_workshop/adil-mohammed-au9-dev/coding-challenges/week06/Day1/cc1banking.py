class Bank:
    def _init_(self):
        self.balance = 0
        print("welcome to the bank")
    
    def deposit(self):
        amount = float(input("enter the amount: "))
        self.balance += amount
        print("amount deposited: ", amount)
    
    def withdrawl(self):
        amount = float(input("Enter the withdrawl amount: "))
        if self.balance >= amount:
            self.balance -= amount
            print("your withdrawl amount: ", amount)
        else:
            print("insufficient balance: ")
    def dispaly(self):
        print("balance in your account is: ", self.balance)
    
if _name_ == "_main_":
    bank = Bank()
    bank.deposit()
    bank.withdrawl()
    bank.dispaly()