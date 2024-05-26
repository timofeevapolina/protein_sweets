const btnLeft = document.querySelector('.btnLeft_js')
const btnRight = document.querySelector('.btnRight_js')
const sliderLine = document.querySelector('.sliderLine_js')
let offset = 0
const slAnim = setInterval(function(){
    offset -=1500
    if (offset < -4500){
        setTimeout(function(){
            sliderLine.style.left = 0
            sliderLine.style.transition = 'none'
            offset = 0
            
        }, 3000)
    }
    else{
        sliderLine.style.transition = 'all 3s ease 0s'
}
sliderLine.style.left = offset+'px'
},5000)
btnRight.addEventListener('click',function(){
    offset -=1500
    clearInterval(slAnim)
    if (offset < -3000){
        setTimeout(function(){
            sliderLine.style.left = 0
            sliderLine.style.transition = 'none'
            offset = 0
            
        }, 3000)
    }
    else{
        sliderLine.style.transition = 'all 3s ease 0s'
}
sliderLine.style.left = offset+'px'
})
btnLeft.addEventListener('click',function(){
    offset +=1500
    clearInterval(slAnim)
    if (offset > -1500){
        setTimeout(function(){
            sliderLine.style.left = -4500 +'px'
            sliderLine.style.transition = 'none'
            offset = -4500
            
        }, 3000)
    }
    else{
        sliderLine.style.transition = 'all 3s ease 0s'
}
sliderLine.style.left = offset+'px'
})
