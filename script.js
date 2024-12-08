function hidesection(){
    let sections = document.querySelectorAll('.section')
    sections.forEach(s =>{
        s.style.display = 'none';
    })
}

function showsection(section_id){
    let section = document.getElementById(section_id)
    if (section){
        section.style.display = 'block'
    }
}
function final (section_id) {
    hidesection()
    showsection(section_id)
}