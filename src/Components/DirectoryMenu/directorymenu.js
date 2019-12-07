import React, { Component } from "react";
import MenuItem from "./../../Components/Menu-item/munu-item";
import "./directorymenu.scss";

class DirectoryMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imgUrl: "https://i.ibb.co/qNMJ4Bc/k-hats.jpg",
          id: 1
        },
        {
          title: "jackets",
          imgUrl: "https://i.ibb.co/NjGWPsy/k-jackets.png",
          id: 2
        },
        {
          title: "sneakers",
          imgUrl: "https://i.ibb.co/PNqZLgC/k-sneakers.png",
          id: 3
        },
        {
          title: "girls",
          imgUrl: "https://i.ibb.co/6Wwf0qR/girls-clothing.png",
          size: "large",
          id: 4
        },
        {
          title: "boys",
          imgUrl: "https://i.ibb.co/ypQTGkM/boys-clothing.png",
          size: "large",
          id: 5
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imgUrl, size, id }) => (
          <MenuItem
            title={title.toUpperCase()}
            image={imgUrl}
            key={id}
            size={size}
          />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
