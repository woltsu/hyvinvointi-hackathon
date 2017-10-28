var React = require("react");
var ReactDOM = require("react-dom");
var Info = require("./Info");

class Index extends React.Component {
    render() {
        return (<Info mode={"Aikuinen"} />);
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