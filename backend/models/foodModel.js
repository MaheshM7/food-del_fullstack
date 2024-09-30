import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {type:String,required:true},
  description: {type:String,reqrequireduire:true},
  price: {type:Number,required:true},
  image: {type:String,require:true},
  category: {type:String,require:true}
})

const foodModel = mongoose.models.food || mongoose.model("food",foodSchema)

export default foodModel;