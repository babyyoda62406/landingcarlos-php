let dataCache2 = ''

window.onload = () => {
    const msgShow = document.getElementById("msgShow")
    msgShow.onclick = handlerClick
    $(".toast").toast({ autohide: false })
    const tbBody = document.getElementById("tbBody")
    tbBody.onclick = handlerClick
}




const handlerClick = (arg) => {
    try {
        arg.preventDefault()
        arg.stopPropagation()
    } catch (err) {
        //
    }
    const item = arg.target
    switch (item.id) {
        case "msgShow":
            $("#modalNotePad").modal("show")
            break
    }
    switch (item.classList[1]) {
        case "btViewMsg":
            let trash_view = dataCache2.filter(arg => arg.id == item.classList[2])[0]
            document.getElementById("toastTitle").innerHTML = `${(trash_view.name.length > 9) ? trash_view.name.substring(0, 9) : trash_view.name}`
            document.getElementById("labelDate").innerHTML = `${trash_view.phone}`
            document.getElementById("toastBody").innerHTML = trash_view.message
            $(".toast").toast('show')
            break
        case "btDeleteMsg":
            const bdDelete = { "id": item.classList[2] }
            let element = document.createElement('form') 
            let ip   = document.createElement('input') 
            ip.type  = "text" 
            ip.value = item.classList[2]
            ip.name = "id" 
            element.appendChild(ip)
            element.id = "formDelete"
            element.style.visibility ="hidden"
            document.body.appendChild(element)
            $.ajax({
                type:'POST', 
                url: 'delete.php', 
                data: $("#formDelete").serialize() , 
                success:  function(arg){
                    console.log(arg)
                    if(arg=='ok'){
                        item.parentNode.parentNode.parentNode.removeChild(item.parentNode.parentNode)
                        document.body.removeChild(element)
                    }else{
                        document.body.removeChild(element)  
                        alert('Ha ocurrido un error contacte al administrador');
                    }
                    
                }
            })
            break
    }

}