let catAge = prompt('umur kucing:')

const getMultiply = (catAge) => {
    return catAge -2
}

const catToHuman = (catAge) => {
    let breakPoint = 24
    if(catAge === 1){
        return catAge = 15
    }
    else if(catAge === 2){
        return catAge = 24
    }
    else if(catAge >= 3 ){
        return catAge = breakPoint + getMultiply(catAge) * 4
    }

}


document.write('umur kucing anda= ' + catToHuman(catAge))

