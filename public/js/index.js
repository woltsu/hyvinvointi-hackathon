var React = require("react");
var ReactDOM = require("react-dom");

class Index extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row justify-content-center">
                    <h1>Ero-info</h1>
                </div>
                <div class="row justify-content-center text-center">
                    <h2>Oletko aikuinen vai lapsi?</h2>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-5 col-xs-11">
                        <button class="btn btn-primary" style={style.buttonStyle}>Aikuinen</button>
                    </div>
                    <div class="col-md-5 col-xs-11">
                        <button class="btn btn-primary" style={style.buttonStyle}>Lapsi</button>
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