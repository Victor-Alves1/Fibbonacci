function add(){
    let fibo = window.document.querySelector(`input#fibo`)
    let res = window.document.querySelector(`div.res`)
    let res1 = window.document.querySelector(`div.res1`)
    let res2 = window.document.querySelector(`div.res2`)
    let nt = Number(fibo.value)

            let n0=0
            let n1=0
            let n2=1
            if (nt>1){
                    res.innerHTML = `<p>Sequência de número "n"   |</p>`
                    res1.innerHTML = `<p>Números de fibbonacci</p>`
                    res2.innerHTML = `<p>|   dois elevado a "n"</p>`
                for (let c = 1; c<=nt; c+= 1){
                    pot= 2**c
                    res.innerHTML += `<p> ${c}º  </p>`
                    res1.innerHTML += `<p>  ${n2}  </p>`
                    res2.innerHTML += `<p>  ${pot} </p>`
                    n0= n1
                    n1= n2
                    n2= n1+ n0
                }
            } else {
                window.alert(`Número inválido`)
            }
            num.focus()
}