import React, { Component } from "react";
import { init } from "ityped";

export default class Ityped extends Component {
    componentDidMount() {
        const { arrayText, typeElement, elementId,style,className } = this.props;
        const myElement = document.querySelector(`#${elementId}`);

        // Verifica si el elemento ya ha sido inicializado
        if (!myElement.dataset.initialized) {
            init(myElement, {
                typeSpeed:  150,
                showCursor: true,
                strings: arrayText,
                cursorChar: "",
            });

            // Marca el elemento como inicializado
            myElement.dataset.initialized = true;
        }
    }

    render() {
        const { typeElement: TypeElement, elementId,style, className } = this.props;
        return <TypeElement id={elementId} style={style} className={className} ></TypeElement>;
    }
}
