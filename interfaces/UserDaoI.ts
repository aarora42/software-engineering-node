<<<<<<< HEAD
import User from "../models/User";

/**
 * @file Declares API for Users related data access object methods
 */
export default interface UserDaoI {
    findAllUsers(): Promise<User[]>;
    findUserById(uid: string): Promise<User>;
    createUser(user: User): Promise<User>;
    updateUser(uid: string, user: User): Promise<any>;
    deleteUser(uid: string): Promise<any>;
    deleteAllUsers (): Promise<any>;
};
=======
import User from "../models/users/User";

export default interface UserDaoI {
    findAllUsers (): Promise<User[]>;
    findUserById (uid: string): Promise<any>;
    createUser (user: User): Promise<User>;
    updateUser (uid: string, user: User): Promise<any>;
    deleteUser (uid: string): Promise<any>;
    deleteAllUsers (): Promise<any>;
};
>>>>>>> f3f128028dce7c60ac61daec0c0e2a87ff6cc2ef
