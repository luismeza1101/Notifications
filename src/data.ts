export interface Notifications {
  name: string;
  message: string;
  date: string;
  privMessage?: string;
  pictureCommet?: string
  read: boolean
}

export const data: Notifications[] = [
  {
    name: "angela-gray",
    message: "followed you",
    date: "5m ago",
    read: false
  },
  {
    name: "anna-kim",
    message: "left the group Chess Club",
    date: "2 weeks ago",
    read: false
  },
  {
    name: "jacob-thompson",
    message: "has joined your group Chess Club",
    date: "1 day ago",
    read: false
  },
  {
    name: "kimberly-smith",
    message: "commented on your picture",
    date: "1 week ago",
    pictureCommet: 'chess',
    read: false
  },
  {
    name: "mark-webber",
    message: "reacted to your recent post My first tournament today!",
    date: "1m ago",
    read: true
  },
  {
    name: "rizky-hasanuddin",
    message: "sent you a private message ",
    date: "5 days ago",
    privMessage:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    read: true
  },
  {
    name: "nathan-peterson",
    message:
      "reacted to your recent post 5 end-game strategies to increase your win rate",
    date: "2 weeks ago",
    read: true
  },
];
