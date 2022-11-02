const normalizr=require('normalizr')
const {normalize,denormalize,schema}=normalizr
const util=require('util')



// func para ver datos
const print = (obj) => {
    console.log(util.inspect(obj, false, 12, true))
}

// ORIGINAL DATA

const originalData=require('./originalData')

const userSchema=new schema.Entity('users')
const commentSchema=new schema.Entity('comments',{
    commenter:userSchema
})

const articleSchema=new schema.Entity('articles',{
    author:userSchema,
    comments:[commentSchema]
})

// array de articulos de un mismo autor
const postSchema=new schema.Entity('posts',{
    posts:[articleSchema]
})

// datos originales
console.log('-------------ORIGINALES-----------')

// print(originalData)
console.log(JSON.stringify(originalData).length)

// datos normalizados
console.log('-------------NORMALIZADOS-----------')

const normalizedData=normalize(originalData,postSchema)
// print(normalizedData)

console.log(JSON.stringify(normalizedData).length)




// datos desnormalizados
console.log('-------------DENORMALIZADO-----------')
const denormalizedData=denormalize(normalizedData,postSchema,normalizedData.entities)
// print(denormalizedData)
print(JSON.stringify(denormalizedData).length)



