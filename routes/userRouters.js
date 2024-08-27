import {getUser,
    createUser,
    deleteUser,
    updateUser,
} from '../controllers/userController.js'
import express from 'express'
const router = express.Router();

router.route("/allUser").get(getUser);
router.route("/update/:id").put(updateUser);
router.route("/delete/:id").delete(deleteUser);
router.route("/create").post(createUser);

export default router;



