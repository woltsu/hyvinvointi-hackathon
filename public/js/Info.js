var React = require("react");
var InfoBox = require("./InfoBox");

class Info extends React.Component {
    constructor(props) {
        super(props);
    }

    renderAdultInfo() {
        return (
            <div>
                <InfoBox id="1" title="1. Asumisen järjestäminen" content="Asuminen">
                </InfoBox>
                <InfoBox id="2" title="2. Lapset" content="Lapset">
                    <b>Tietopaketti lapsen asemasta eroperheessä;
                        lapsen oikeus henkiseen hyvinvointiin, huoltajuus, asumisratkaisut, tapaamiset ja elatusasiat</b>
                    <hr />
                    <b>mahdollisuus chat tapaamiseen asiantuntijan kanssa
                        ja mahdollisuus ohjattuun chat keskusteluun eron toisen osapuolen kanssa.</b>
                    <hr />
                    <b>elatusapulaskuri</b>
                    <hr />
                    <b>Linkit= kutsutaan 3. sektori kehittämään sisältöä</b>
                </InfoBox>
                <InfoBox id="3" title="3. Taloudellinen selviytyminen" content="Talous">
                </InfoBox>
                <InfoBox id="4" title="4. Oma hyvinvointi" content="Oikeus">
                    <b>Tietopaketti</b>
                    <hr />                    
                    <b>Mahdollisuus chattiin</b>
                    <hr />                    
                    <b>Sähköinen kalenteri, josta käy ilmi eri päivystävien kriisipalveluiden vapaat ajat/
                        puhelinnumerot/yhteystiedot
                    </b>
                    <hr />                    
                    <b>Linkkejä kolmansiin osapuoliin</b>
                    <hr />                    
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
                <div class="row" style={{ padding: "15px" }}>
                    <div class="col-12 text-center" style={{ color: "white" }}>
                        <h1 style={styles.title}>Eropaketti</h1>
                    </div>
                </div>
                <div>
                    {content}
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <a href="/timeline" class="btn btn-sample" style={styles.button}>EROPROSESSI</a>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    title: {
        fontFamily: "Roboto Condensed, sans-serif"
    },
    button: {
        fontFamily: "Roboto Condensed, sans-serif",
        fontSize: "25px"
    }
}

module.exports = Info;