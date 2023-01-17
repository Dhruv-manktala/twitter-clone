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
  postImage: string | null;
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
  addTweet: (postImage: string | null) => void;
  data: { posts: postType[]; currentTab: string };
  toggleLike: (id: number) => void;
  toggleBookmark: (id: number) => void;
}

export interface tweetPropType {
  input: string;
  setInput: (tweet: string) => void;
  addTweet: (postImage: string | null) => void;
}

export interface postPropType {
  data: postType;
  toggleLike: (id: number) => void;
  toggleBookmark: (id: number) => void;
}
