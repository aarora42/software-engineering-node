/**
 * @file Declares Stats data type that stores replies, retuits, likes, and dislikes
 */
/**
 * @typedef Stats stores replies, retuits, likes, and dislikes counts
 * @property {replies} number of replies a tuit had
 * @property {retuits} number of retuits a tuit has
 * @property {likes} number of likes a tuit has
 * @property {dislikes} number of dislikes a tuit has
 */

export default interface Stats {
    replies?: number,
    retuits: number,
    likes: number,
    dislikes: number
};