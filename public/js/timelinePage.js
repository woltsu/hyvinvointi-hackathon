import React from "react";
import ReactDOM from "react-dom";

class Timeline extends React.Component {
    render() {
        return (
            <section class="timeline">
                <ul>
                    <li>
                        <div>
                            <time>1934</time>
                            <p>aaa</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>1934</time>
                            <p>bbb</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>1934</time>
                            <p>ccc</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>1934</time>
                            <p>ddd</p>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}

ReactDOM.render(<Timeline />, document.getElementById("app"));