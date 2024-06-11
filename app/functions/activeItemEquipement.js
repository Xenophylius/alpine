function activeItemEquipement(c) {
    const allEquipement = document.querySelectorAll('.equipement')
    allEquipement.forEach((element) => {
        element.classList.remove('activeItem')
    })
    document.querySelector('#' + c).classList.add('activeItem')
}
  
export default activeItemEquipement