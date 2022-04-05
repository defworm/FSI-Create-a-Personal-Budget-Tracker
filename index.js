let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
//let question = Number(window.prompt 
  //  (weeklyExpenseQuestions[0]))
//console.log(question)

for(let i = 0; i < weeklyExpenseQuestions.length; i++) {
    let question = Number(window.prompt 
        (weeklyExpenseQuestions[i]))
        weeklyExpenses = weeklyExpenses + question
}
for(let i = 0; i < monthlyExpenseQuestions.length; i++) {
    let question = Number(window.prompt 
        (monthlyExpenseQuestions[i]))
        monthlyExpenses = monthlyExpenses + question
}
for(let i = 0; i < annualExpenseQuestions.length; i++) {
    let question = Number(window.prompt 
        (annualExpenseQuestions[i]))
        annualExpenses = annualExpenses + question
}