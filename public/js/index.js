var React = require("react");
var ReactDOM = require("react-dom");
var Info = require("./Info");
var Test = require("./Test");

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testSelected: false,
            test: null
        };

        this.setTest = this.setTest.bind(this);
        this.endTest = this.endTest.bind(this);
    }

    setTest(wantsTest) {
        this.setState({
            testSelected: true,
            test: wantsTest,
            currentValues: {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0
            }
        });
    }

    endTest(newValues) {
        this.setState({
            test: false,
            currentValues: newValues
        });
    }

    render() {
        if (!this.state.testSelected) {
            return (
                <div class="container">
                    <div class="row justify-content-center">
                        <h1>Ero-info</h1>
                    </div>
                    <div class="row justify-content-center text-center">
                        <h2>Haluatko tehdä ohjaavan testin?</h2>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-5 col-xs-11">
                            <button onClick={() => this.setTest(true)} class="btn btn-outline-primary" style={style.buttonStyle}>Kyllä</button>
                        </div>
                        <div class="col-md-5 col-xs-11">
                            <button onClick={() => this.setTest(false)} class="btn btn-outline-primary" style={style.buttonStyle}>En</button>
                        </div>
                    </div>
                </div>
            );
        } else {
            if (!this.state.test) {
                return (
                    <Info mode={"Aikuinen"} />
                );
            } else {
                return (<Test />);
            }
        }
    }
}

const style = {
    buttonStyle: {
        display: "block",
        width: "100%",
        marginTop: "3%"
    }
}

ReactDOM.render(<Index />, document.getElementById("app"));