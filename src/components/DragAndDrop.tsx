import * as React from "react";
import "./DragAndDrop.css";

export interface IProps {
    handleDrop(data: FileList): void;
}

interface IState {
    dragging: boolean
    drag:     boolean
}

class DragAndDrop extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            drag:       false,
            dragging:   false,
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
        this.setState({drag: false})
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            this.props.handleDrop(e.dataTransfer.files)
            e.dataTransfer.clearData()
        }
    }

    public render() {
        return (
            <div className="DragAndDrop" onDragEnter={this.handleDragIn} onDrop={this.handleDrop} onDragOver={this.handleDrag} onDragLeave={this.handleDragOut}>
                {this.props.children}              
            </div>
        )
    }
}

export default DragAndDrop