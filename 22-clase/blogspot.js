




BLOG//
const blogspot=require('./blogspot')

const authorSchema = new schema.Entity('authors') 


const commentSchema = new schema.Entity('comments')

// esquema para los artículos

const postSchema = new schema.Entity('posts', {
    author: authorSchema,
    comments: [ commentSchema ]
})

const normalizedBlogpost = normalize(blogpost, postSchema)

console.log(normalizedBlogpost)
print(normalizedBlogpost)