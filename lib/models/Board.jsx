import mongoose from "mongoose";

const BoardSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
            index: true,
        },
        columns: [
            {
                type: Schema.Types.ObjectId, 
                ref: "Column",
            }
        ]
    },
    {
        timestamps: true,
    }
)

const Board = mongoose.models.Board || mongoose.model("Board", BoardSchema);

export default Board;