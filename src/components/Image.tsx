import * as React from "react";
import DragAndDrop from './DragAndDrop';
import "./Image.css";


export interface IProps {
  name: string;
}

interface IState {
  loading: boolean;
  file:   File | null;
}

class Image extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
        file: null,
        loading: false,
    
    };
  }

  public handleFiles = (data: FileList) =>{
    this.setState({file: data[0]})
    return
  }


  public render() {
    return (
      <div className="imageContainer">
        <DragAndDrop handleDrop={this.handleFiles} >
          <div>
            {this.state.file ? 
            <img className="image" src={URL.createObjectURL(this.state.file)} /> 
            : 
            <h1>Drop here</h1>}
          </div>
        </DragAndDrop>
      </div>
    );
  }

}

export default Image;