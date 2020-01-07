import * as React from "react";
import "./Image.css";

export interface IProps {
  name: string;
}

interface IState {
  loading: boolean
}

class Image extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
        loading: false
    };
  }


  public render() {
    return (
      <div className="imageContainer">
        <image />
        <h2>Drop here</h2>
      </div>
    );
  }

}

export default Image;