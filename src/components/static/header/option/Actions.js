
export function openModalUsers() {
    document.querySelector('.container-modals-windows').style.display = "block";
    setTimeout(()=>{
      document.querySelector('.enter-user').classList.add('open');
    },100)
  }

  export function closeModalUsers() {
    document.querySelector('.enter-user').classList.remove('open');
    setTimeout(()=>{
        document.querySelector('.container-modals-windows').style.display = "none";
    },300)
  }