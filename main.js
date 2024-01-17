let answer = document.querySelector(".answer")
console.log(answer)
// console.log("helllo")
let btn = document.querySelectorAll(".btn")
console.log(btn)


btn.forEach((item)=>{

    item.addEventListener("click",(e)=>{
        console.log("click")
        let ans=e.currentTarget.parentElement.parentElement.nextSibling.nextSibling
        console.log(ans)
        ans.classList.toggle('hide')
let currentbtn =document.querySelector(".plus")
let otherbtn =document.querySelector(".minus")
console.log(otherbtn)
currentbtn.classList.toggle('hide')
otherbtn.classList.toggle('hide')
    })
})
