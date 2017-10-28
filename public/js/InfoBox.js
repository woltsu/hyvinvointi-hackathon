var React = require("react");

class InfoBox extends React.Component {
    render() {
        return (
            <div style={styles.box}>
                <h2>{this.props.title}</h2>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

const styles = {
    box: {
        boxSizing: "border-box",
        padding: "5px",
        marginTop: "2%",
        marginBottom: "4%",
        marginLeft: "4%",
        marginRight: "4%",
        backgroundColor: "white",
        boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.16), 0px 2px 10px 0px rgba(0,0,0,0.12)"
    }
}

module.exports = InfoBox;