var React = require("react");
var ReactDOM = require("react-dom");
var Info = require("./Info");

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modeSelected: false,
            testSelected: false,
            test: null,
            mode: null
        };

        this.selectMode = this.selectMode.bind(this);
        this.setTest = this.setTest.bind(this);
    }

    selectMode(mode) {
        this.setState({
            modeSelected: true,
            mode: mode
        });
    }

    setTest(wantsTest) {
        this.setState({
            testSelected: true,
            test: wantsTest
        });
    }

    render() {
        if (this.state.modeSelected) {
            if (!this.state.testSelected) {
                return (
                    <div class="container">
                        <div class="row justify-content-center">
                            <h1>Ero-info</h1>
                        </div>
                        <div class="row justify-content-center text-center">
                            <h2>Haluatko tehdä testin?</h2>
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
                    return (<Info mode={this.state.mode} />);
                } else {
                    return (<h1>Testi</h1>);
                }
            }
        }
        return (
            <div class="container">
                <div class="row justify-content-center">
                    <h1>Ero-info</h1>
                </div>
                <div class="row justify-content-center text-center">
                    <h2>Oletko aikuinen vai nuori?</h2>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-5 col-xs-11">
                        <button onClick={() => this.selectMode("Aikuinen")} class="btn btn-outline-primary" style={style.buttonStyle}>Aikuinen</button>
                    </div>
                    <div class="col-md-5 col-xs-11">
                        <button onClick={() => this.selectMode("Nuori")} class="btn btn-outline-primary" style={style.buttonStyle}>Nuori</button>
                    </div>
                </div>
            </div>
        );
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