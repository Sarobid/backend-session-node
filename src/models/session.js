import mongoose from "mongoose";
const { Schema } = mongoose;

const sessionSchema = new mongoose.Schema(
  {
    _id: {
        type: Schema.Types.ObjectId, 
        auto: true
    },
    phoneConnection : {
        type: String,
        required: [true,"L'information telephone est obligatoire"],
        trim: true
    },
    employe : {
        type: Schema.Types.ObjectId,
        ref: 'employe',
        required: true
    },
    dateCreated : {
      type : Date,
      require : true,
      default : new Date()
    }
  },
  {
    timestamps: true
  }
);

const Session = mongoose.model("Session", sessionSchema);

export default Session;