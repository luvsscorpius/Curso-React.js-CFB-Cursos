import React from "react";
import * as C from './Styles'

class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.incrementCount = this.incrementCount.bind(this)
    }

    incrementCount() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return(
            <>
            <C.GlobalStyle/>
                <C.Main>
                    <C.Content>
                            <C.Title>Counter</C.Title>
                        
                            <C.ContentItem>
                                <C.Button>-</C.Button>
                                <C.P>{this.state.count}</C.P>
                                <C.Button onClick={this.incrementCount}>+</C.Button>
                            </C.ContentItem>
                    </C.Content>
                </C.Main>
            </>
        )
    }
}

export default Counter