/**
 * @file Implements mongoose model to CRUD
 * documents in the likes collection
 */
import mongoose from "mongoose";
import LikeSchema from "./LikeSchema";
import DislikeSchema from "./DislikeSchema";
const DislikeModel = mongoose.model("DislikeModel", DislikeSchema);
export default DislikeModel;