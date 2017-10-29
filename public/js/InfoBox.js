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
        var transform = "none";
        if (this.state.expanded) {
            transform = "rotate(90deg)";
        }
        var rotationStyle = {
            WebkitTransform: transform,
            transition: "all 0.4s",
            display: "inline-block",
            float: "right",
            fontSize: "30px"
        }
        return (
            <div id={this.props.title} style={styles.box}>
                <div onClick={this.handleClick} style={{ cursor: "pointer" }}>
                    <h4 style={{ fontFamily: "Roboto Condensed, sans-serif" }}>
                        <span style={{marginRight: "2%"}}>
                            {this.props.logo}
                        </span>
                        {this.props.title}
                        <span style={rotationStyle}>
                            <i class="fa fa-angle-right" aria-hidden="true" style={{ float: "right" }}></i>
                        </span>
                    </h4>
                </div>
                <InfoSection id={this.props.id} expanded={this.state.expanded} style={{ fontFamily: "Roboto Condensed, sans-serif" }}>
                    {this.props.children}
                </InfoSection>
            </div>
        );
    }
}

const styles = {
    box: {
        boxSizing: "border-box",
        padding: "10px",
        marginTop: "2%",
        marginBottom: "2%",
        backgroundColor: "white",
        boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.16), 0px 2px 10px 0px rgba(0,0,0,0.12)",
        borderRadius: "8px",
        backgroundColor: "#3579DC",
        color: "white"
    }
}

module.exports = InfoBox;