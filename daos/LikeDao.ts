/**
 * @file Implements DAO managing data storage of likes. Uses mongoose LikeModel
 * to integrate with MongoDB
 */
import LikeDaoI from "../interfaces/LikeDaoI";
import LikeModel from "../mongoose/likes/LikeModel";
import Like from "../models/likes/Like";
/**
 * @class LikeDao Implements Data Access Object managing data storage
 * of Likes
 * @implements {LikeDaoI} LikeDaoI
 * @property {LikeDao} likeDao Private single instance of LikeDao
 */
export default class LikeDao implements LikeDaoI {
    private static likeDao: LikeDao | null = null;
    public static getInstance = (): LikeDao => {
        if(LikeDao.likeDao === null) {
            LikeDao.likeDao = new LikeDao();
        }
        return LikeDao.likeDao;
    }
    private constructor() {}
    /**
     * Uses LikeModel to retrieve user that liked a particular tuit
     * @param {string} tid is the id of the tuit that was liked by the users
     * @returns Promise To be notified when the users are retrieved from
     * database
     */
    findAllUsersThatLikedTuit = async (tid: string): Promise<Like[]> =>
        LikeModel
            .find({tuit: tid})
            .populate("likedBy")
            .exec();
    /**
     * Uses LikeModel to retrieve tuits that were liked by a particular user
     * @param {string} uid is the id of the user liking the tuits
     * @returns Promise To be notified when the tuits are retrieved from
     * database
     */
    findAllTuitsLikedByUser = async (uid: string): Promise<Like[]> =>
        LikeModel
            .find({likedBy: uid})
            .populate({
                path: "tuit",
                populate: {
                    path: "postedBy"
                }
            })
            .exec();
    /**
     * Inserts like instance into the database
     * @param {string} uid of user liking
     * @param {string} tid of tuit being liked
     * @param {Like} Like instance to be inserted into the database
     * @returns Promise To be notified when like is inserted into the database
     */
    userLikesTuit = async (uid: string, tid: string): Promise<any> =>
        LikeModel.create({tuit: tid, likedBy: uid});
    /**
     * Retrieves a single user that likes a tuit
     * @param {string} uid of user liking
     * @param {string} tid of tuit being liked
     * @param {Like} Like instance to be inserted into the database
     * @returns Promise To be notified when user is retrieved from the database
     */
    findUserLikesTuit = async (uid: string, tid: string): Promise<any> =>
        LikeModel.findOne({tuit: tid, likedBy: uid});
    /**
     * Removes Like from the database.
     * @param {string} uid of user who is unliking
     * @param {string} tid of tuit being unliked
     * @returns Promise To be notified when like is removed from the database
     */
    userUnlikesTuit = async (uid: string, tid: string): Promise<any> =>
        LikeModel.deleteOne({tuit: tid, likedBy: uid});
    /**
     * Returns count of linkes  from the database.
     * @param {string} tid of tuit
     * @returns Promise To be notified when count is retrieved from database
     */
    countHowManyLikedTuit = async (tid: string): Promise<any> =>
        LikeModel.count({tuit: tid});
}