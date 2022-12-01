const express = require( 'express')
const { graphqlHTTP } = require( 'express-graphql')
const { buildSchema } = require( 'graphql')

const crypto = require('crypto')

// Schemaa _______________________________________________________
const schema = buildSchema(`  
  type Persona {
    id: ID!
    nombre: String,
    edad: Int
  }
  input PersonaInput {
    nombre: String,
    edad: Int
  }
  type Query {
    getPersona(id: ID!): Persona,
    getPersonas(campo: String, valor: String): [Persona],
  }
  type Mutation {
    createPersona(datos: PersonaInput): Persona
    updatePersona(id: ID!, datos: PersonaInput): Persona,
    deletePersona(id: ID!): Persona,
  }
`)

// modelo _____________________________________________________________

class Persona {
    constructor(id, { nombre, edad }) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }
}
const personasMap = {}

// funciones (controlador) _______________________________________________________________________________________


function getPersonas({ campo, valor }) {
    const personas = Object.values(personasMap)
    if (campo && valor) {
        return personas.filter(p => p[ campo ] == valor);
    } else {
        return personas;
    }
}

function getPersona({ id }) {
    if (!personasMap[ id ]) {
        throw new Error('Persona not found.');
    }
    return personasMap[ id ];
}

function createPersona({ datos }) {
    const id = crypto.randomBytes(10).toString('hex');
    const nuevaPersona = new Persona(id, datos)
    personasMap[ id ] = nuevaPersona;
    return nuevaPersona;
}

function updatePersona({ id, datos }) {
    if (!personasMap[ id ]) {
        throw new Error('Persona not found');
    }
    const personaActualizada = new Persona(id, datos)
    personasMap[ id ] = personaActualizada;
    return personaActualizada;
}

function deletePersona({ id }) {
    if (!personasMap[ id ]) {
        throw new Error('Persona not found');
    }
    const personaBorrada = personasMap[ id ]
    delete personasMap[ id ];
    return personaBorrada;
}

const app = express()

app.use(express.static('public'))

const gqlConfig =  {
    schema: schema,
    rootValue: {
        getPersona,
        getPersonas,
        createPersona,
        updatePersona,
        deletePersona
    },
    graphiql: true
}

app.use('/gql', graphqlHTTP(gqlConfig))

const PORT = 8000
app.listen(PORT, err => {
    if (err) {
        console.log(err)
    }
    console.log(`El servidor corriendo en el puerto ${PORT}`)
})


//  consultas

// mutation {
//     createPersona(datos: {
//       nombre: "marian",
//       edad: 35
//     }) {
//       id
//     }
//    }

// query {
//     getPersonas {
//       nombre
//       edad
//     }
//    }
