import React, { Component } from 'react';

class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors : ['red', 'green', 'blue', '#ccc']
        };
    }

    setStyle(color){
        return {
            backgroundColor : color
        };
    }

    // onSettingColor(colour){
    //     this.props.onChangeColors1(colour);
    // }

    render() {

        let elmColors = this.state.colors.map((color, index) => {
            return <span 
                key={index} 
                style={this.setStyle(color)} 
                onClick={ ()=>this.props.onChangeColors1(color) } 
                className={ this.props.defaultColor === color ? 'active' : '' }
            ></span>
        });

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Color Picker</h3>
                </div>
                <div className="panel-body">
                    { elmColors }
                    <hr/>
                </div>
            </div>
        );
    }
}

export default ColorPicker;



// WEBPACK FOOTER //
// src/components/ColorPicker.js