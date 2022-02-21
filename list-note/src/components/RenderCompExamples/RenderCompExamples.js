import React, {Component} from 'react';

const MyComponents = {
    Comp1: ({name}) => {
        return(
            <div>
                <h3>Hi, this is text from {name}</h3>
            </div>
        )
    },
    Comp2: () => <h3>this is text from Comp2</h3>
}

const components = {
    comp1: () => <h5>text in small comp1</h5>,
    comp2: function({name}) {
        return(
            <div>
                <h5>
                    text in small {name}
                </h5>
            </div>
        )
    },
    comp3: MyComponents.Comp1
    
}


export default class RenderCompExamples extends Component {

    render() {

        const SmallComp1 = components.comp1;
        const SmallComp2 = components.comp2;
        const SmallComp3 = components.comp3;

        return(
            <div>
                <h1>text in RenderCompExamples!</h1>

                <MyComponents.Comp1 name='Comp1'/>
                <MyComponents.Comp2/>

                <SmallComp1/>
                <SmallComp2 name='comp2'/>
                <SmallComp3 name='big comp in small comp'/>
            </div>
        )
    }
}