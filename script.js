btn.addEventListener('click', clicar)

function clicar() {
    var main = document.getElementById('main')
    var btn = document.getElementById('btn')
    var foto = document.getElementById('img')
    var res = document.getElementById('res')
    var sent = document.getElementsByName('humor')
    var humor = ''

    if (sent[0].checked) {
        var humor = 'Alegre'
        foto.src = 'imagens/alegre.jpeg'
        main.style.background = 'black'
    } else if (sent[1].checked) {
        var humor = 'Triste'
        foto.src = 'imagens/triste.jpeg'
        main.style.background = 'black'
    } else if (sent[2].checked) {
        var humor = 'Faminto'
        foto.src = 'imagens/faminto.jpeg'
        main.style.background = 'black'
    } else if (sent[3].checked) {
        var humor = 'No tedio'
        foto.src = 'imagens/tedio.jpeg'
        main.style.background = 'black'        
    } else if (sent[4].checked) {
        var humor = 'Cansado'
        foto.src = 'imagens/cansado.jpeg'
        main.style.background = 'black'        
    } else if (sent[5].checked) {
        var humor = 'Afeminado'
        foto.src = 'imagens/afeminado.jpeg' 
        main.style.background = 'url(imagens/rocky-bk-50.png)'      
    } else if (sent[6].checked) {
        var humor = 'Pensativo'
        foto.src = 'imagens/pensativo.jpeg'
        main.style.background = 'black'        
    }

    img.style.display = 'block'
    img.style.margin = 'auto'
    res.innerHTML = `<p> Detectamos que vc está <strong>${humor}</strong> hoje </p>`
    res.appendChild(foto)
}
