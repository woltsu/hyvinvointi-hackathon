var React = require("react");
var InfoBox = require("./InfoBox");

class Info extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1>{this.props.mode}</h1>
                    </div>
                </div>
                <InfoBox title="1. Tunteet" content="aaaaaa" />
                <InfoBox title="2. Talous" content="bbbbb" />
            </div>
        );
    }
}

module.exports = Info;