export default function toogleNavBar({bar, button}){

  if(bar.current.style.left == "-120px" || bar.current.style.left == ""){
    bar.current.style.opacity = 1
    bar.current.style.left = "0px"
    button.current.style.left = "96px"
  }
  else{
    bar.current.style.opacity = 0
    bar.current.style.left = "-120px"
    button.current.style.left = "0px"
  }
}