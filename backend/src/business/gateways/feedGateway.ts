import { Feed } from "../entities/feeds";

export interface FeedGateway {
   getFeedforUser(userId: string): Promise<Feed[]>
};