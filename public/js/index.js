var React = require("react");
var ReactDOM = require("react-dom");
var AdultInfo = require("./adultInfo");
var YouthInfo = require("./youthInfo");

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modeSelected: false,
            mode: null
        };

        this.selectMode = this.selectMode.bind(this);
    }

    selectMode(mode) {
        this.setState({
            modeSelected: true,
            mode: mode
        });
    }

    render() {
        if (this.state.modeSelected) {
            if (this.state.mode === "aikuinen") {
                return (
                    <AdultInfo />
                );
            } else {
                return (
                    <YouthInfo />
                );
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
                        <button onClick={() => this.selectMode("aikuinen")} class="btn btn-primary" style={style.buttonStyle}>Aikuinen</button>
                    </div>
                    <div class="col-md-5 col-xs-11">
                        <button onClick={() => this.selectMode("lapsi")} class="btn btn-primary" style={style.buttonStyle}>Lapsi</button>
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