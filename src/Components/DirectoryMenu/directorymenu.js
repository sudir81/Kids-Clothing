import React from "react";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from "../../Redux/Selectors/directory.selectors";

import MenuItem from "./../../Components/Menu-item/munu-item";
import "./directorymenu.scss";

const DirectoryMenu = ({sections}) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherprops }) => (
        <MenuItem key={id} {...otherprops} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector ({
  sections: selectDirectorySections
}
)

export default connect(mapStateToProps)(DirectoryMenu);
