var React = require("react");

class RedBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }

        this.changeState = this.changeState.bind(this);
    }

    componentDidMount() {
        setInterval(this.changeState, 1000);
    }

    changeState() {
        var newState = !this.state.visible;
        this.setState({
            visible: newState
        });
    }

    render() {
        if (this.state.visible) {
            return (
                <figure style={styles.ballStyle}></figure>
            );
        }

        return <figure style={styles.emptyStyle}></figure>;
    }
}

const styles = {
    ballStyle: {
        background: "red",
        borderRadius: "50%",
        height: "25px",
        width: "25px",
        float: "left"
    },
    emptyStyle: {
        borderRadius: "50%",
        height: "25px",
        width: "25px",
        float: "left"
    }
}

module.exports = RedBall;