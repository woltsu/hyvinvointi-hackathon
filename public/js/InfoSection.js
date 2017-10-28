var React = require("react");

class InfoSection extends React.Component {
    componentDidMount() {
        var id = "content-" + this.props.id;
        var expandedHeight = document.getElementById(id).clientHeight;
        this.setState({
            expandedHeight: expandedHeight + 25
        });
    }

    render() {
        let height;
        if (this.props.expanded) {
            height = this.state.expandedHeight + "px";
        } else {
            height = "0px";
        }
        const style = {
            height: height,
            transition: "height 0.6s",
            overflow: "hidden",
            borderRadius: "8px"
        }

        return (
            <div style={style}>
                <div id={"content-" + this.props.id} style={{fontFamily: "Oxygen, sans-serif"}}>
                    <hr />
                    {this.props.children}
                </div>
            </div>
        );
    }
}

module.exports = InfoSection;