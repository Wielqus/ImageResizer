import * as React from "react";
import DragAndDrop from './DragAndDrop';
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
        <DragAndDrop label="drop here" />
      </div>
    );
  }

}

export default Image;