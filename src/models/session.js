import mongoose from "mongoose";
const { Schema } = mongoose;

const sessionSchema = new mongoose.Schema(
  {
    _id: {
        type: Schema.Types.ObjectId, 
        auto: true
    },
    deviceId : {
        type: String,
        required: [true, "L'identifiant de l'appareil est obligatoire"],
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
      default : Date.now
    }
  },
  {
    timestamps: true
  }
);

const Session = mongoose.model("Session", sessionSchema);

export default Session;