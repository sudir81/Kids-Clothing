import React, { Component } from "react";
import MenuItem from "./../../Components/Menu-item/munu-item";
import "./directorymenu.scss";

class DirectoryMenu extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imgUrl: "https://i.ibb.co/qNMJ4Bc/k-hats.jpg",
          id: 1,
          linkUrl: "hats"
        },
        {
          title: "jackets",
          imgUrl: "https://i.ibb.co/NjGWPsy/k-jackets.png",
          id: 2,
          linkUrl: "jackets"
        },
        {
          title: "sneakers",
          imgUrl: "https://i.ibb.co/PNqZLgC/k-sneakers.png",
          id: 3,
          linkUrl: "sneakers"
        },
        {
          title: "girls",
          imgUrl: "https://i.ibb.co/6Wwf0qR/girls-clothing.png",
          size: "large",
          id: 4,
          linkUrl: "girls"
        },
        {
          title: "boys",
          imgUrl: "https://i.ibb.co/ypQTGkM/boys-clothing.png",
          size: "large",
          id: 5,
          linkUrl: "boys"
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherprops }) => (
          <MenuItem key={id} {...otherprops} />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
