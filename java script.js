let boxes=document.querySelectorAll(".box")
let paragraph=document.querySelector(".paragraph")
let button=document.querySelector(".new_game")
let win=document.querySelector(".winner")
let reset=document.querySelector(".botton")
console.log(boxes)
let resetbutton=document.querySelectorAll(".botton")

const winppattern=[
    [0,1,2],
    [0,3,6],                                
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],                                                                                                                 
    [3,4,5],                                                                                                                
    [6,7,8]
]                                                                                                                                                                                                                                                                                                                                                           
let controller=true
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (controller ){
          box.innerText="0"                              
        controller=false
        }
        else{                                                                                                                                              
            box.innerText="x"
            controller=true
        }
        box.disabled=true
        checkwinner()
    })
})
const active=()=>{
    controller=true
    for(box of boxes){
        box.disabled=false
        box.innerText=""
    }
}

const deactivate=()=>{
        for(box of boxes){
            box.disabled=true
        }
        
        win.classList.remove("winner")
}
const winner_print=(val)=>{
    paragraph.innerText=`congragulation  ${val} is the winner`
    deactivate()

}

const checkwinner=()=>{
    for(let patterns of winppattern){
       if(boxes[patterns[0]].innerText!="" & boxes[patterns[1]].innerText!="" & boxes[patterns[2]].innerText!=""){
            if(boxes[patterns[0]].innerText==boxes[patterns[1]].innerText && boxes[patterns[1]].innerText==boxes[patterns[2]].innerText){
                winner_print(boxes[patterns[0]].innerText)
            }
        }

    }
}


button.addEventListener("click",()=>{
    win.classList.add("winner")
    controller=true
    for (box of boxes){
        box.disabled=false
        box.innerText=""
    }
})


reset.addEventListener("click",()=>{
    active()
})