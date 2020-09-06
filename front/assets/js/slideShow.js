function changeImg(imagens = [], indexAux = 0) {

    if (!imagens) {
        return
    }

    setTimeout(() => {
        document.getElementById('banner').src = imagens[indexAux].link
        indexAux++
        if (imagens.length - 1 < indexAux) {
            indexAux = 0
        }
        changeImg(imagens, indexAux)
    }, 5000)

};

export default changeImg




