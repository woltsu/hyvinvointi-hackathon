var React = require("react");
var InfoSection = require("./InfoSection");

class InfoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var newState = !this.state.expanded;
        this.setState({
            expanded: newState
        });
    }

    render() {
        return (
            <div id={this.props.title} style={styles.box}>
                <h2 onClick={this.handleClick} style={{cursor: "pointer"}}>{this.props.title}</h2>
                <InfoSection id={this.props.id} expanded={this.state.expanded}>
                    {this.props.children}
                </InfoSection>
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