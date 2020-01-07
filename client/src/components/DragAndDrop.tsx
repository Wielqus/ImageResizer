import * as React from "react";
import "./DragAndDrop.css";

export interface IProps {
    label: string;
}

interface IState {
    dragging: boolean
}

class DragAndDrop extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            dragging: false
        };
      }

    public handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
    }

    public handleDragIn = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.setState({dragging: true})
          }
    }

    public handleDragOut = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({dragging: false})
    }

    public handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
    }

    public render() {
        return (
            <div className="DragAndDrop" onDragEnter={this.handleDragIn} onDragEnd={this.handleDragOut} onDragLeave={this.handleDragOut}>
                <h2>{this.props.label}</h2>
                {this.props.children}
                <p>{this.state.dragging ? "Dragging" : ""}</p>
            </div>
        )
    }
}

export default DragAndDrop