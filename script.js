//your JS code here. If required.
let line = document.getElementById("line")
let cnt=0
setInterval(() =>{
	cnt+=2
	line.style.transform=`rotate(${cnt}deg)`
})