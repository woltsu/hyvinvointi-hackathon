var React = require("react");
var InfoBox = require("./InfoBox");

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
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
                <InfoBox id="1" title="1. Asumisen järjestäminen" content="Asuminen">
                </InfoBox>
                <InfoBox id="2" title="2. Lapset" content="Lapset">
                    <b>Laskurit:</b>
                    <br />
                    <b>Chatit:</b>
                    <br />
                    <b>Faktaa:</b>
                    <br />
                    <b>Foorumi:</b>
                </InfoBox>
                <InfoBox id="3" title="3. Taloudellinen selviytyminen" content="Talous">
                </InfoBox>
                <InfoBox id="4" title="4. Oma hyvinvointi" content="Oikeus">
                    <b>Vertaisryhmiä:</b>
                    <br />
                    <b>Terapiaa:</b>
                    <br />
                    <b>Tunteiden hallinta:</b>
                    <br />
                    <b>Uni, ravinto, liikunta:</b>
                    <br />
                </InfoBox>
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
                <div>
                    {content}
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <a href="/timeline" class="btn btn-primary">TIMELINE</a>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Info;