const allSeatBtn=document.getElementsByClassName('seat-btn');
let count=0;
let totalSeat=40;
const maxSeat=document.getElementById('seat-count').innerText;
const maxSeatInt=parseInt(maxSeat);

if(maxSeatInt <= 4){
    for(let seat of allSeatBtn){
        seat.addEventListener("click",function(e){
            count=count+1;
            totalSeat=totalSeat-1;
            const Id=seat.id;
    
            setInnerTextByID('seat-count',count);
            setInnerTextByID('total-seat',totalSeat)
            setBtnColor(Id);
        })
    }
}
else{
    alert()
}
