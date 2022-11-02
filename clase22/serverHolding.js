const normalizr=require('normalizr')
const {normalize,denormalize,schema}=normalizr
const util=require('util')

// func para ver datos
const print = (obj) => {
    console.log(util.inspect(obj, false, 12, true))
}

const holding=require('./holding')
