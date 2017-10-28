var React = require("react");
var data = require("../data/questions");

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            questions: data,
            currentQuestion: data[0],
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0
        });

        this.updateState = this.updateState.bind(this);
    }

    updateState(bool) {
        if (bool) {
            var newValue = this.state
            this.updateState()
        }
    }

    render() {
        return (
            <div class="container">
                <div class="row justify-content-center">
                    <h1>Kyssärit</h1>
                </div>
                <div class="row justify-content-center text-center">
                    <h2>{this.state.question.question}</h2>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-5 col-xs-11">
                        <button onClick={() => this.updateState(true)} class="btn btn-outline-primary" style={style.buttonStyle}>Kyllä</button>
                    </div>
                    <div class="col-md-5 col-xs-11">
                        <button onClick={() => this.updateState(false)} class="btn btn-outline-primary" style={style.buttonStyle}>Ei</button>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Test;