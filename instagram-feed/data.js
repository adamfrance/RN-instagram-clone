const initialData = {
  profile: {
    avatar: require("../assets/instagram-feed-images/avatar.jpg"),
  },
  stories: [
    {
      id: 1,
      avatar: require("../assets/instagram-feed-images/avatar1.jpg"),
      name: "5.min.craft",
      isSeen: false,
    },
    {
      id: 2,
      avatar: require("../assets/instagram-feed-images/avatar2.jpg"),
      name: "tommy boy",
      isSeen: false,
    },
    {
      id: 3,
      avatar: require("../assets/instagram-feed-images/avatar3.jpg"),
      name: "ninja warrior",
      isSeen: true,
    },
    {
      id: 4,
      avatar: require("../assets/instagram-feed-images/avatar4.jpg"),
      name: "boss_net",
      isSeen: false,
    },
    {
      id: 5,
      avatar: require("../assets/instagram-feed-images/avatar5.jpg"),
      name: "seriousBE",
      isSeen: false,
    },
    {
      id: 6,
      avatar: require("../assets/instagram-feed-images/avatar6.png"),
      name: "electroFool",
      isSeen: false,
    }
  ],
  articles: [
    {
      id: 1,
      avatar: require("../assets/instagram-feed-images/avatar1.jpg"),
      name: "5.min.craft",
      image: require("../assets/instagram-feed-images/img1.png"),
      likes: 10,
      commentCount: 2,
      comments: "View all 0 comments",
    },
    {
      id: 2,
      avatar: require("../assets/instagram-feed-images/avatar2.jpg"),
      name: "tommy boy",
      image: require("../assets/instagram-feed-images/img2.png"),
      likes: 3,
      commentCount: 200,
      comments: "View all 0 comments",
    },
    {
      id: 3,
      avatar: require("../assets/instagram-feed-images/avatar3.jpg"),
      name: "ninja warrior",
      image: require("../assets/instagram-feed-images/img3.jpg"),
      likes: 34,
      commentCount: 5,
      comments: "View all 0 comments",
    },
    {
      id: 4,
      avatar: require("../assets/instagram-feed-images/avatar4.jpg"),
      name: "jackie delaville",
      image: require("../assets/instagram-feed-images/img4.jpg"),
      likes: 10,
      commentCount: 3,
      comments: "View all 0 comments",
    },
    {
      id: 5,
      avatar: require("../assets/instagram-feed-images/avatar5.jpg"),
      name: "anna mertyle",
      image: require("../assets/instagram-feed-images/img5.jpg"),
      likes: 50,
      commentCount: 665,
      comments: "View all 0 comments",
    },
    {
      id: 6,
      avatar: require("../assets/instagram-feed-images/avatar6.png"),
      name: "electroFool",
      image: require("../assets/instagram-feed-images/img6.jpg"),
      likes: 50,
      commentCount: 665,
      comments: "View all 0 comments",
    },
  ],
};

const data = {
  ...initialData,
  articles: initialData.articles.map((article) => ({
    ...article,
    comments: `View all ${article.commentCount} comments`,
  })),
};

export default data;
