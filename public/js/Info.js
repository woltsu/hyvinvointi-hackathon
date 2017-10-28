var React = require("react");
var InfoBox = require("./InfoBox");

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state=({
            showTimeline: false
        });
    }

    showTimeline() {
        var newState = !this.state.showTimeline;
        this.setState({
            showTimeline: newState
        });
    }

    renderYoungInfo() {
        return (
            <div>
                <h1>TODO</h1>
            </div>
        );
    }

    renderAdultInfo() {
        return (
            <div>
                <a href="/timeline">TIMELINE</a>
                <InfoBox id="1" title="1. Asumisen järjestäminen" content="Asuminen" />
                <InfoBox id="2" title="2. Lapset" content="Lapset" />
                <InfoBox id="3" title="3. Taloudellinen selviytyminen" content="Talous" />
                <InfoBox id="4" title="4. Oma hyvinvointi" content="Oikeus" />
            </div>
        );
    }

    render() {
        let content;
        if (this.props.mode === "Aikuinen") {
            content = this.renderAdultInfo();
        } else {
            content = this.renderYoungInfo();
        }

        return (
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1>{this.props.mode}</h1>
                    </div>
                </div>
                {content}
            </div>
        );
    }
}

module.exports = Info;