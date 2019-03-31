// let Score = [
//     {
//         studentName: "Phan Van Teo",
//         math: 8.7,
//         physical: 7.2,
//         chemistry: 6.9,
//         literature: 7.8,
//         history: 7.6,
//         georaphy: 9.1,
//         average() {
//             return (this.math + this.physical + this.chemistry + this.literature + this.history + this.georaphy) / 6
//         }
//     },
//     {
//         studentName: "Ban Thi No",
//         math: 9.2,
//         physical: 6.0,
//         chemistry: 7.5,
//         literature: 6.3,
//         history: 5.6,
//         georaphy: 8.5,
//         average() {
//             return (this.math + this.physical + this.chemistry + this.literature + this.history + this.georaphy) / 6
//         }
//     },
//     {
//         studentName: "Ton That Hoc",
//         math: 1.2,
//         physical: 5.7,
//         chemistry: 2.1,
//         literature: 10.0,
//         history: 9.5,
//         georaphy: 9.8,
//         average() {
//             return (this.math + this.physical + this.chemistry + this.literature + this.history + this.georaphy) / 6
//         }
//     }
// ]
// let max = 0;
// let temp;
// Score.forEach((element, index) => {
//     if (element.average() > max) {
//         max = element.average();
//         temp = index;
//     }
// });
// console.log(Score[temp].studentName);
// console.log(Score[temp].average());
let customer = {
    firstName: "John",
    lastName: "Smith",
    dateOfBirth: { day: 6, month: 2, year: 1998 },
    gender: "male",
    phoneNumber: "0775842390",
    email: "john_smith@gmail.com",
    address: "13th Street 47W, New York City"
};

//C1:
let arr = Object.entries(customer);
let arrObject = [];
for (let i = 0; i < arr.length; i++) {
    let obj = {};
    if (arr[i][0] === 'dateOfBirth')
        obj = { title: arr[i][0], value: `${arr[i][1].day}/${arr[i][1].month}/${arr[i][1].year}` }
    else
        obj = { title: arr[i][0], value: arr[i][1] };
    arrObject.push(obj);
}
console.log(JSON.stringify(arrObject));

//C2:
let result = Object.keys(customer).map(key => {
    if (key === 'dateOfBirth') return { title: key, value: `${customer[key].day}/${customer[key].month}/${customer[key].year}` };
    return { title: key, value: customer[key] };
})

console.log(result);










