const allSeatBtn=document.getElementsByClassName('seat-btn');
let count=0;
let totalSeat=40;
let totalPrice=0;
let selectedButton=[];



    // Handle seat 
for(let seat of allSeatBtn){
    seat.addEventListener("click",function(e){
        if ( selectedButton.length < 4 ){
            if(! selectedButton.includes(seat.id)){
                count=count+1;
                totalSeat=totalSeat-1;
                totalPrice=totalPrice + 550;
                const Id=seat.id;
                selectedButton.push(Id)
                const text=seat.innerText;
                const container=document.getElementById('append-container')
                const li=document.createElement("li")
                const p=document.createElement("p")
                const p2=document.createElement("p")
                const p3=document.createElement("p")
                p.innerText=text;
                p2.innerText='Economy';
                p3.innerText='Price: 550'
                li.appendChild(p)
                li.appendChild(p2)
                li.appendChild(p3)
                container.appendChild(li)
                li.classList.add('flex','justify-between','mt-2','mb-2')
                setInnerTextByID('seat-count',count);
                        

                setInnerTextByID('total-seat',totalSeat)
                setInnerTextByID('total-price',totalPrice)
                setInnerTextByID('discount-price',totalPrice);
                setBtnColor(Id);
                console.log(selectedButton)
                setBtnColor('successful-btn')
        }
        else{
                alert('You cannot select one seat double time !')
            }
                
        }
    })
}
  

// This function calculate the discount price and set discount price
function discountPrice(){
    
    const cupponCode=getInputFieldText('cuppon-btn')
    console.log(cupponCode)
    
    
    let discountFinalPrice=0;
    if(cupponCode === 'NEW15' && selectedButton.length !==0){
        discountFinalPrice = totalPrice - (totalPrice * 0.15);
        
        setInnerTextByID('discount-price',discountFinalPrice)
        hideElementById('cuppon-card');
        showElementById('claimed')
    }
    else if(cupponCode === 'Couple 20'  && selectedButton.length !==0){
        discountFinalPrice = totalPrice - (totalPrice * 0.20);
        
        setInnerTextByID('discount-price',discountFinalPrice)
        hideElementById('cuppon-card');
        showElementById('claimed')
    }
    else{
        alert('Chek your cuppon code or book any seat !')
    }
    
}


