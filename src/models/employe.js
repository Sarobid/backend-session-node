import mongoose from "mongoose";
const { Schema } = mongoose;

const employeSchema = new mongoose.Schema(
  {
    _id: {
        type: Schema.Types.ObjectId, 
        auto: true
    },
    name: {
      type: String,
      required: [true,"Le nom est obligatoire"],
      trim: true
    },
    firstName : {
      type: String,
      required: false,
      trim: true
    },
    photo:{
        type : String,
        required:false
    },
    employeIdOdoo:{
        type: Number,
        required : true,
        unique: true
    }
  },
  {
    timestamps: true
  }
);

const Employe = mongoose.model("employe", employeSchema);

export default Employe;