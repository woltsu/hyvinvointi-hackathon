var React = require("react");
var InfoBox = require("./InfoBox");
var RedBall = require("./RedBall");

const house = <i class="fa fa-home" aria-hidden="true"></i>;
const child = <i class="fa fa-child" aria-hidden="true"></i>;
const money = <i class="fa fa-money" aria-hidden="true"></i>;
const health = <i class="fa fa-heartbeat" aria-hidden="true"></i>;

class Info extends React.Component {
    constructor(props) {
        super(props);
    }

    renderAdultInfo() {
        return (
            <div>
                <div class="row justify-content-center">
                    <div class="col-12">
                        <InfoBox id="1" title={"Asumisen järjestäminen"} logo={house}>
                        </InfoBox>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12">
                        <InfoBox id="2" title="Lapset" logo={child}>
                            <b>Tietopaketti lapsen asemasta eroperheessä;
                        lapsen oikeus henkiseen hyvinvointiin, huoltajuus, asumisratkaisut, tapaamiset ja elatusasiat</b>
                            <hr />
                            <b>Mahdollisuus chat tapaamiseen asiantuntijan kanssa
                        ja mahdollisuus ohjattuun chat keskusteluun eron toisen osapuolen kanssa.</b>
                            <hr />
                            <b>
                                Sähköinen kalenteri, jonka avulla voi nähdä eri palveluiden vapaita aikoja ja mahdollisesti
                                varata niitä
                            </b>
                            <hr />
                            <b>Elatusapulaskuri</b>
                            <hr />
                            <b>Linkit; kutsutaan 3. osapuoli kehittämään sisältöä</b>
                        </InfoBox>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12">
                        <InfoBox id="3" title="Taloudellinen selviytyminen" logo={money}>
                        </InfoBox>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12">
                        <InfoBox id="4" title="Oma hyvinvointi" logo={health}>
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
                </div>
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
                        <h1 style={styles.title}>Ero-info</h1>
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
                <div>
                    <div class="row justify-content-center">
                        <div class="col-md-6 col-xs-12">
                            <div class="text-center" style={styles.box}>
                                <h2 style={styles.title}><span><RedBall /></span>LIVE CHAT</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    title: {
        fontFamily: "Roboto Condensed, sans-serif",
        fontWeight: 500
    },
    button: {
        fontFamily: "Roboto Condensed, sans-serif",
        fontSize: "25px"
    },
    box: {
        boxSizing: "border-box",
        padding: "10px",
        marginTop: "8%",
        marginBottom: "2%",
        backgroundColor: "white",
        boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.16), 0px 2px 10px 0px rgba(0,0,0,0.12)",
        borderRadius: "8px",
        backgroundColor: "#FA8072",
        color: "white"
    }
}

module.exports = Info;