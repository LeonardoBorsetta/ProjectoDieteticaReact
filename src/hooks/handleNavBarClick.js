export default function handleClick(event){

  const button = event.target.alt;

  if(button == "To Home"){
    const target = document.querySelector("#home");
    target.scrollIntoView({behavior:"smooth"})
  }
  if(button == "To History"){
    const target = document.querySelector("#historySection");
    target.scrollIntoView({behavior:"smooth"})
  };
  if(button == "To Products"){
    const target = document.querySelector("#productSection");
    target.scrollIntoView({behavior:"smooth"})
  }
  if(button == "To Services"){
    const target = document.querySelector("#serviceSection");
    target.scrollIntoView({behavior:"smooth"})
  };
  if(button == "To Contact"){
    const target = document.querySelector("#contactSection");
    target.scrollIntoView({behavior:"smooth"})
  }
  if(button == "To Partners"){
    const target = document.querySelector("#partnerSection");
    target.scrollIntoView({behavior:"smooth"})
  };
}