const initialState = {
    sections: [
      {
        title: "hats",
        imgUrl: "https://i.ibb.co/qNMJ4Bc/k-hats.jpg",
        id: 1,
        linkUrl: "shop/hats"
      },
      {
        title: "jackets",
        imgUrl: "https://i.ibb.co/NjGWPsy/k-jackets.png",
        id: 2,
        linkUrl: "shop/jackets"
      },
      {
        title: "sneakers",
        imgUrl: "https://i.ibb.co/PNqZLgC/k-sneakers.png",
        id: 3,
        linkUrl: "shop/sneakers"
      },
      {
        title: "girls",
        imgUrl: "https://i.ibb.co/6Wwf0qR/girls-clothing.png",
        size: "large",
        id: 4,
        linkUrl: "shop/girls"
      },
      {
        title: "boys",
        imgUrl: "https://i.ibb.co/ypQTGkM/boys-clothing.png",
        size: "large",
        id: 5,
        linkUrl: "shop/boys"
      }
    ]
  }

  const directoryReducer = (state = initialState, action ) => {
      switch (action.type) {
          default:
              return state;
      }
  }

  export default directoryReducer;