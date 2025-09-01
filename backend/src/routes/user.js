import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { getRecommendedUsers,getMyFriends,sendFriendRequest,acceptFriendRequest,getFriendRequests,getOutgoingFriendReqs } from '../controller/user.controller.js';
const Route = express.Router();
Route.use(protectRoute);
Route.get('/',getRecommendedUsers);
Route.get('/friends',getMyFriends);
Route.post('/friend-request/:id',sendFriendRequest)
Route.put('/friend-request/:id/accept',acceptFriendRequest)
Route.get("/friend-requests", getFriendRequests);
Route.get("/outgoing-friend-requests", getOutgoingFriendReqs);
export default Route;