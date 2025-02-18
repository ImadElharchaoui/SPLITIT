import { Schema, model, models, mongoose } from 'mongoose';

const GroupSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    members: [{ type: Schema.Types.ObjectId, ref: "User" }],
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now },
    image: { type: String },
});

const Group = models.Group || model("Group", GroupSchema);
export default Group;