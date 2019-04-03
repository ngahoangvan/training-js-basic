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


// Ex1

// for (let i = 0; i < personnel.length; i++) {
//     personnel[i].age = (new Date).getFullYear() - personnel[i].birthday.year
//     console.log(personnel[i]);
// }

personnel.forEach((element) => {
    currentDate = new Date()
    element.age = currentDate.getFullYear() - element.birthday.year
    if (element.birthday.month > currentDate.getMonth() + 1) {
        element.age--;
    } else if (element.birthday.month == currentDate.getMonth() + 1 && element.birthday.day > currentDate.getDate()) {
        element.age--;
    }
    console.log(element);
})