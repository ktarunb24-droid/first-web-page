let fontSize = 16
let colors = ["#00ffff","#ff6ec4","#00ff9f","#ffd700","#ff4d4d"]
let textIndex=0,bgIndex=0

function welcomeUser(){
 let name=document.getElementById("studentName").value
 if(name==="")return alert("Enter name")
 document.getElementById("welcomeText").innerText="Welcome "+name
 document.getElementById("heading").innerText="Hello "+name
}

function changeTextColor(){
 let box=document.getElementById("portalBox")
 textIndex=(textIndex+1)%colors.length
 box.style.color=colors[textIndex]
}

function changeBgColor(){
 let g=["linear-gradient(135deg,#ff512f,#dd2476)","linear-gradient(135deg,#00c6ff,#0072ff)"]
 bgIndex=(bgIndex+1)%g.length
 document.body.style.background=g[bgIndex]
}

function increaseFont(){
 fontSize+=2
 document.getElementById("portalBox").style.fontSize=fontSize+"px"
}

function toggleHighlight(){
 document.getElementById("portalBox").classList.toggle("highlight")
}

function resetStyle(){location.reload()}

function addTask(){
 let i=document.getElementById("taskInput")
 if(i.value==="")return
 let li=document.createElement("li")
 li.innerText=i.value
 document.getElementById("taskList").appendChild(li)
 i.value=""
}

function insertBefore(){
 let t=document.getElementById("manageInput").value
 if(t==="")return
 let p=document.createElement("p")
 p.innerText=t
 document.getElementById("manageOutput").prepend(p)
}

function insertAfter(){
 let t=document.getElementById("manageInput").value
 if(t==="")return
 let p=document.createElement("p")
 p.innerText=t
 document.getElementById("manageOutput").appendChild(p)
}

function replaceContent(){
 let t=document.getElementById("manageInput").value
 if(t==="")return
 document.getElementById("manageOutput").innerHTML="<p>"+t+"</p>"
}

function removeContent(){
 document.getElementById("manageOutput").innerHTML=""
}

function handleClick(){
 let b=document.getElementById("interactionBox")
 b.innerText="Clicked"
}

function handleDoubleClick(){
 document.getElementById("interactionBox").style.transform="scale(1.2)"
}

function handleMouseOver(){
 document.getElementById("interactionBox").style.boxShadow="0 0 40px pink"
}

function handleMouseOut(){
 let b=document.getElementById("interactionBox")
 b.style.transform="scale(1)"
 b.style.boxShadow="0 0 20px cyan"
}

function showPage(id){
 document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"))
 document.getElementById(id).classList.add("active")
}

document.addEventListener("DOMContentLoaded",()=>{
 let i=document.getElementById("keyInput")
 if(i){
  i.addEventListener("input",()=>document.getElementById("liveText").innerText="Typing: "+i.value)
  i.addEventListener("keydown",e=>{if(e.key==="Enter")document.getElementById("enterText").innerText="Enter Pressed"})
  i.addEventListener("keyup",e=>document.getElementById("releaseText").innerText="Released: "+e.key)
 }
})

function readProperty(){
 let img=document.getElementById("myImage")
 document.getElementById("outputText").innerText=img.src
}

function readAttribute(){
 let img=document.getElementById("myImage")
 document.getElementById("outputText").innerText=img.getAttribute("alt")
}

function changeAttribute(){
 document.getElementById("myImage").src="https://picsum.photos/200?"+Math.random()
}

function removeAttribute(){
 document.getElementById("myImage").removeAttribute("alt")
}