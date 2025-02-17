import { Schema, model, models } from 'mongoose';

const GroupSchema = new Schema({

    name: { type: String, required: true },
    description: { type: String },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now },
    image: { type: String },
      

});


const Group = models.Group || model("Group", GroupSchema);
export default Group;