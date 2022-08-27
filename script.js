'use strict';
const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
const btnCloseModel=document.querySelector(".close-modal");
const btnOpenModel=document.querySelectorAll(".show-modal");
console.log(btnOpenModel);

//close modal function
const closeModal=function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }

//Open modal function 

const OpenModal=function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");

}


for (let i=0;i<btnOpenModel.length;i++){
    btnOpenModel[i].addEventListener("click",OpenModal);
    btnCloseModel.addEventListener("click",closeModal);
    overlay.addEventListener("click",closeModal);}
        //open manually the modal
        // modal.classList.remove("hidden");
        // overlay.classList.remove("hidden");
        


    
////close through fucntion
    
//close through Manually
    // btnCloseModel.addEventListener("click",function(){
    //     modal.classList.add('hidden');
    //     overlay.classList.add('hidden');

    // })

//close through fucntion

//close through Manually
// overlay.addEventListener("click",function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');

document.addEventListener("keydown",function(event){
    console.log(event.key)

    //Readable code
    // if(event.key==="Escape"){
    //     if(!modal.classList.contains("hidden")){
    //         closeModal(); 
    //     }
    

    //Refactoring the code
    // }else if(event.key==="Enter"){
    //     if(modal.classList.contains("hidden")){
    //         OpenModal();
    //     }
    // }
    
    if(event.key==="Escape" && !modal.classList.contains("hidden")){
        closeModal();
    }
    if(event.key==="Enter" && modal.classList.contains("hidden")){
        OpenModal();
    }
})
