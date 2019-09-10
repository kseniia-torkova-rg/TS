var bankAccount = {
    money: 2000,
    deposit: function (value) {
        // затем указывается ожидаемый тип аргумента, после круглых скобок и двоеточия указывается тип значения, которое должна возвращать эта функция
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
