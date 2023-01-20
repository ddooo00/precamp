const email = "codecamp@gmail.com"
// undefine
email.includes("@")
// true
email.split("@")
// (2) ['codecamp', 'gmail.com']
email.split("@")[0]
// 'codecamp'
email.split("@")[1]
// 'gmail.com'
let userMail = email.split("@")[0]
// undefined
userMail
// 'codecamp'
let company = email.split("@")[1]
// undefined
company
// 'gmail.com'
let massKingMail = []
// undefined
massKingMail.push(userMail[0])
// 1
massKingMail.push(userMail[1])
// 2
massKingMail.push(userMail[2])
// 3
massKingMail.push(userMail[3])
// 4
massKingMail
// (4) ['c', 'o', 'd', 'e'] 
massKingMail.push("*")
// 5
massKingMail.push("*")
// 6
massKingMail.push("*")
// 7
massKingMail.push("*")
// 8
massKingMail
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
// massKingMail.join("")
'code****'
// massKingMail.join("") + "@" + company
'code****@gmail.com'
// let result = massKingMail.join("") + "@" + company
// undefined
result
// 'code****@gmail.com'