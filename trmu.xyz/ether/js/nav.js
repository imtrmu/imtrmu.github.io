function openNav() {
    document.getElementById("nav2").style.width = "100vw";
    document.getElementById("nav2").style.display = "flex";
    document.getElementById("close").style.display = "block";
    document.getElementById("open").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("nav2").style.width = "0";
    document.getElementById("nav2").style.display = "none";
    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.display = "block";
  } 
  