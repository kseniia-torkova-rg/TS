type objectAlias = { money: number, deposit: (val: number) => void } // () => означает, что я ожидаю получить функцию, имя параметра значения не имеет, важен только указанный тип параметра

let bankAccount: objectAlias = {
    money: 2000,
    deposit: function (value: number): void { // () : это объявление функции, в круглых скобках указывается имя аргумента, который передается в функцию, 
                                              // затем указывается ожидаемый тип аргумента, после круглых скобок и двоеточия указывается тип значения, которое должна возвращать эта функция
        this.money += value;
    }
};

let myself: { name: string, bankAccount: objectAlias, hobbies: string[] } = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
