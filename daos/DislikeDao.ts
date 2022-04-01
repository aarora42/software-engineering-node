/**
 * @file Implements DAO managing data storage of dislikes. Uses mongoose LikeModel
 * to integrate with MongoDB
 */
import DislikeDaoI from "../interfaces/DislikeDaoI";
import Dislike from "../models/dislikes/Dislike";
import DislikeModel from "../mongoose/likes/DislikeModel";
/**
 * @class DislikeDao Implements Data Access Object managing data storage
 * of Dislikes
 * @implements {DislikeDaoI} DislikeDaoI
 * @property {DislikeDao} dislikeDao Private single instance of DislikeDao
 */
export default class DislikeDao implements DislikeDaoI {
    private static dislikeDao: DislikeDao | null = null;
    public static getInstance = (): DislikeDao => {
        if(DislikeDao.dislikeDao === null) {
            DislikeDao.dislikeDao = new DislikeDao();
        }
        return DislikeDao.dislikeDao;
    }
    private constructor() {}
    /**
     * Uses DislikeModel to retrieve user that disliked a particular tuit
     * @param {string} tid is the id of the tuit that was disliked by the users
     * @returns Promise To be notified when the users are retrieved from
     * database
     */
    findAllUsersThatDislikedTuit = async (tid: string): Promise<Dislike[]> =>
        DislikeModel
            .find({tuit: tid})
            .populate("dislikedBy")
            .exec();
    /**
     * Uses DislikeModel to retrieve tuits that were liked by a particular user
     * @param {string} uid is the id of the user disliking the tuits
     * @returns Promise To be notified when the tuits are retrieved from
     * database
     */
    findAllTuitsDislikedByUser = async (uid: string): Promise<Dislike[]> =>
        DislikeModel
            .find({dislikedBy: uid})
            .populate({
                path: "tuit",
                populate: {
                    path: "postedBy"
                }
            })
            .exec();
    /**
     * Inserts dislike instance into the database
     * @param {string} uid of user disliking
     * @param {string} tid of tuit being disliked
     * @param {Dislike} Dislike instance to be inserted into the database
     * @returns Promise To be notified when dislike is inserted into the database
     */
    userDislikesTuit = async (uid: string, tid: string): Promise<any> =>
        DislikeModel.create({tuit: tid, dislikedBy: uid});
    /**
     * Retrieves a single user that dislikes a tuit
     * @param {string} uid of user disliking
     * @param {string} tid of tuit being disliked
     * @param {Dislike} Like instance to be inserted into the database
     * @returns Promise To be notified when user is retrieved from the database
     */
    findUserDislikesTuit = async (uid: string, tid: string): Promise<any> =>
        DislikeModel.findOne({tuit: tid, dislikedBy: uid});
    /**
     * Removes Dislike from the database.
     * @param {string} uid of user who is undisliking
     * @param {string} tid of tuit being undisliked
     * @returns Promise To be notified when like is removed from the database
     */
    userUnDislikesTuit = async (uid: string, tid: string): Promise<any> =>
        DislikeModel.deleteOne({tuit: tid, dislikedBy: uid});
    /**
     * Returns count of dislikes  from the database.
     * @param {string} tid of tuit
     * @returns Promise To be notified when count is retrieved from database
     */
    countHowManyDislikedTuit = async (tid: string): Promise<any> =>
        DislikeModel.count({tuit: tid});
}