import mongoose from 'mongoose'

export const countryFlagSchema = new mongoose.Schema({
    countryName:'string',
    countryFlag: 'string'
})

const countryFlagModel = mongoose.model("flags", countryFlagSchema)
export default countryFlagModel