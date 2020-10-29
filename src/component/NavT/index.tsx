import React from "react";


import { NavLink } from "react-router-dom";
import { MENU_MAIN_T } from "../../constant/data";



import * as style from "./index.scss";


type StateType = {
  cur: Number;
};
interface NavT {
  state: StateType;
}
type MENU_MAIN_T_item = {
  title: string;
  path: string;
  icon: any;
};
class NavT extends React.Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      cur: 0,
    };
  }

  doMenu = (i: number) => {
    this.setState({ cur: i });
  };

  render(
    
  ) {
   console.log(style)
    return (
      <div className={style.gnav}>
        {this.props.children}
        <div className={style.gmenu}>
          {MENU_MAIN_T.map((item: MENU_MAIN_T_item, index: number) => (
            <NavLink to={item.path} key={index}>
              <div
                className={
                  this.state.cur === index
                    ? style.mmenuitem_active
                    : style.mmenuitem
                }
                {...console.log(document)}
                key={index}
                onClick={this.doMenu.bind(this, index)}
              >
                  <div className={style.iconimg}>
                  <img src={item.icon} />
                  </div>
              
                <span>{item.title}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}

export default NavT;
