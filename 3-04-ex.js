let personnel = [
    {
        ID: 3123,
        fullName: "Phan Van Teo",
        email: "teo_em@gmail.com",
        birthday: { day: 1, month: 3, year: 2000 },
        age: 0,
        gender: "male",
        nativeLand: "Quang Nam Provice",
        position: "manager",
        salary: 0,
        seniority: 31
    },
    {
        ID: 3112,
        fullName: "Ban Thi No",
        email: "thi_no@gmail.com",
        birthday: { day: 4, month: 4, year: 1987 },
        age: 0,
        gender: "female",
        nativeLand: "Ha Tinh Provice",
        position: "secterary",
        salary: 0,
        seniority: 20
    },
    {
        ID: 3376,
        fullName: "Ton That Hoc",
        email: "that.hoc@gmail.com",
        birthday: { day: 12, month: 3, year: 1998 },
        age: 0,
        gender: "male",
        nativeLand: "Da Nang City",
        position: "employee",
        salary: 0,
        seniority: 9
    },
    {
        ID: 3377,
        fullName: "Ton That Nghiep",
        email: "that.nghiep@gmail.com",
        birthday: { day: 29, month: 2, year: 1996 },
        age: 0,
        gender: "female",
        nativeLand: "Da Nang City",
        position: "employee",
        salary: 0,
        seniority: 50
    }
];

// function caSalary(seniority) {
//     let basicSalary = 3500000;
//     switch (true) {
//         case (seniority < 12): return 1.92 * basicSalary;
//         case (seniority >= 12 && seniority < 36): return 2.34 * basicSalary;
//         case (seniority >= 36 && seniority < 60): return 3 * basicSalary;
//         default: return 4.5 * basicSalary;
//     }
// }
// personnel.forEach((element, index) => {
//     personnel[index].salary = caSalary(element.seniority);
// });
// console.log(personnel);

function findPersonnel(ID) {
    let arr = [];
    personnel.forEach((element1) => {
        if (ID == element1.ID) {
            arr.push(element1);
        }
    });
    return arr;

    // Tham Khao
    // return personnel.map(element => {
    //     return element.ID == ID ? element : null
    // }).filter(_ => _)
}
console.log(findPersonnel(3377))