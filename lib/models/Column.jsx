import mongoose from "mongoose";

const ColumnSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        boardId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Board",
            required: true,
            index: true,
        },
        order: {
            type: Number,
            required: true,
            default: 0,
        },
        jobApplications: [
            {
                type: mongoose.Schema.Types.ObjectId, 
                ref: "JobApplication",
            }
        ]
    },
    {
        timestamps: true,
    }
)

const Column = mongoose.models.Column || mongoose.model("Column", ColumnSchema);

export default Column;