import React from "react";
import ReactDOM from "react-dom";

class Timeline extends React.Component {
    render() {
        return (
            <section class="timeline">
                <ul>
                    <li>
                        <div>
                            <time>Harkitsen eroa</time>
                            <p>
                                Parisuhteessa ihminen kohtaa erilaisia haasteita, ja pyrkii ratkaisemaan niitä monella tavalla.
                                Joskus haasteet koetaan niiin vaikeiksi että ihminen alkaa harkita eroa. Eron harkinta voi johtaa 
                                lopulliseen eroon tai eron harkintavaiheessa voi hakea apua erilaisiin suhteessa heränneisiin kysymyksiin.
                            </p>
                        </div>
                    </li> 
                    <li>
                        <div>
                            <time>Asumusero</time>
                            <p>bbb</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>Erohakemus</time>
                            <p>ccc</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>Harkinta-aika</time>
                            <p>ddd</p>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}

ReactDOM.render(<Timeline />, document.getElementById("app"));