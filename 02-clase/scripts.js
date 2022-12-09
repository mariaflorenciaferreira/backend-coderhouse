class User{
    constructor(firstName,surname, books, pets){
        this.firstName=firstName
        this.surname=surname
        this.books=books
        this.pets=pets
    }

    getFullName(firstName,surname){
        let fullName=`El nombre del usuario es ${firstName} ${surname}.`   
        console.log(fullName)
    }

    addMascota(pets){
        this.pets=pets
        console.log(`Las mascotas del usuario son ${pets}`)
    }

    countMascotas(pets){
        console.log ( `El usuario tiene ${this.pets.length} mascotas`  );   
    }

    addBook(book){
        this.books.push(book)
        console.log(book)
    }

    getBookNames(book){

        let bookNames=book.tituloLibro
        console.log(bookNames)
    }

    


}

const form=document.querySelector("#userForm")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name=document.querySelector("#name").value
    const surname=document.querySelector("#surname").value

    let pets=  new Array();
    let pet=document.getElementsByClassName('pet')
    petValues=[].map.call(pet,function(dataInput){
        if (dataInput.value!==""){
            pets.push(dataInput.value)
        }
    })

   

    let book={
        tituloLibro:document.getElementById('book').value,
        autorLibro:document.getElementById('autor').value
    }


        
    
    
    const usuario=new User(name,surname,pets,book)
    usuario.getFullName(name,surname)
    usuario.addMascota(pets)
    usuario.countMascotas(pets)
    usuario.addBook(book)
    usuario.getBookNames(book)
    form.reset()
})











