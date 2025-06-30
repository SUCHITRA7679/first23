class Bank:
    def __init__(self):
        self.__balance=0
    def deposit(self,amount):
        self.balance+=ammount
    def withdraw(self, amount):
        if(amount>self.__balance or amount<0):
            print("Insufficient balance")
    def get_balance(self):
        return self.__balance
                  