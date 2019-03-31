let bill =
    [
        {
            ID: 1,
            content: [{ productID: 325, amount: 2 }, { productID: 612, amount: 6 }, { productID: 123, amount: 10 }],
            totalPrice: 0
        },
        {
            ID: 2,
            content: [{ productID: 601, amount: 1 }, { productID: 123, amount: 2 }, { productID: 325, amount: 3 }],
            totalPrice: 0
        },
    ]

let product = [
    {
        ID: 123,
        name: "The New iPad 2018",
        price: 799,
        brand: "Apple",
        classify: "Tablet"
    },
    {
        ID: 325,
        name: "Mi Mix 3",
        price: 499,
        brand: "Xiaomi",
        classify: "Smartphone"
    },
    {
        ID: 612,
        name: "Alienware 17R5",
        price: 1549,
        brand: "Dell",
        classify: "Laptop"
    },
    {
        ID: 601,
        name: "Macbook Pro 2018",
        price: 1299,
        brand: "Apple",
        classify: "Laptop"
    }
]
// EX1
// function findProduct(brand) {
//     let arr = [];
//     product.forEach(element => {
//         if (element.brand === brand) arr.push(element)
//     });
//     return arr;
//     // return product.map(element => element.brand == brand ? element : null).filter(_ => _)
// }
// console.log(findProduct("Apple"));

// EX2
// bill.forEach((element1, index) => {
//     element1.content.forEach((element2) => {
//         product.forEach((element3) => {
//             if (element2.productID === element3.ID) {
//                 bill[index].totalPrice += element2.amount * element3.price;
//             }
//         })
//     });
//     console.log(element1);
// });

// Ex3
function displayBill(oneBill) {
    if (typeof oneBill === "string" || typeof oneBill === "number") {
        return "It not a bill"
    }
    let str = '';
    oneBill.content.forEach((element, index) => {
        let sum = 0;
        product.forEach(element1 => {
            if (element.productID === element1.ID) {
                sum += element.amount * element1.price;
                str += `${index + 1}. ${element1.name} x ${element.amount}: ${sum} USD \n`
            }
        });
        oneBill.totalPrice += sum;
    });
    str += `\tTotal Price: ${oneBill.totalPrice} USD`
    return str;
}
console.log(displayBill(1));


