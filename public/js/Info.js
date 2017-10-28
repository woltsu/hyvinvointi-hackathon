var React = require("react");
var InfoBox = require("./InfoBox");

class Info extends React.Component {
    renderYoungInfo() {
        return (
            <div>
                <InfoBox title="1. Hyvinvointi" content="Nuoren hyvinvointi" />
                <InfoBox title="2. Mistä apua?" content="APUA APUA APUA APUA" />
            </div>
        );
    }

    renderAdultInfo() {
        return (
            <div>
                <InfoBox title="1. Hyvinvointi" content="Aikuisen hyvinvointi" />
                <InfoBox title="2. Talous" content="Apua taloudellisissa asioissa" />
                <InfoBox title="3. Lapset" content="Apua lapsiin liittyvissä asioissa" />
                <InfoBox title="4. Oikeudet" content="Apua oikeudellisiin asioihin" />
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