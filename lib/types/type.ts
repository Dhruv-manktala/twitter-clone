export interface tabType {
  id: number;
  tabName: string;
  solid: string;
  outline: string;
}

export interface navigationPropsType {
  currentTab: string;
  changeTab: (tab: string) => void;
}

export interface postType {
  id: number;
  name: string;
  postData: string;
  isLiked: boolean;
  isBookmarked: boolean;
  time: string;
  likeCount: number;
  commentCount: number;
  views: string;
  retweetCount: number;
  blueTick: boolean;
}

export interface dataType {
  posts: postType[];
  currentTab: string;
}

export interface tabPropType {
  name: string;
  currentTab: boolean;
  changeTab: (tab: string) => void;
  solid: string;
  outline: string;
}

export interface feedsPropType {
  input: string;
  setInput: (tweet: string) => void;
  addTweet: () => void;
  data: { posts: postType[]; currentTab: string };
  toggleLike: (id: number) => void;
  toggleBookmark: (id: number) => void;
}

export interface tweetPropType {
  input: string;
  setInput: (tweet: string) => void;
  addTweet: () => void;
}

export interface postPropType {
  data: postType;
  toggleLike: (id: number) => void;
  toggleBookmark: (id: number) => void;
}

export interface TrendingPostInterface {
  id: string;
  topic: string;
  trending_global: boolean;
  tweet_count: number;
  trending_person_name: string;
}

export interface UserInterface {
  user_id: string;
  user_name: string;
  user_img: string;
  user_display_name: string;
}
