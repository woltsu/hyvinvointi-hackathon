import React from "react";
import ReactDOM from "react-dom";

class Timeline extends React.Component {
    render() {
        return (
            <div>
                <section class="intro">
                    <div class="container">
                        <h1>Eroprosessi</h1>
                    </div>
                </section>
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
                                <time>Eropäätös</time>
                                <p>Lasten, asumisen ja talousasioiden järjestäminen. Erokriisin läpikäyntiä.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>Ero</time>
                                <p>Hakemus käräjäoikeuteen jos olet avioliitossa. Lasten huollosta
                                    ja tapaamisista sopiminen lastenvalvojan luona. Yhteisen omaisuuden jakamisesta sopiminen.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>Harkinta-aika</time>
                                <p>Alkaa erohakemuksen jättämisen jälkeen. Harkinta-ajan kesto on vähintään puoli vuotta, 
                                    jonka jälkeen voi hakea eron vahvistumista. Jos olet asunut erillään 2-vuotta voit hakea 
                                    suoraan avioeroa.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>Eron voimaantulo</time>
                                <p>Puolisoiden välinen elatusvelvollisuus päätty.</p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        );
    }
}

ReactDOM.render(<Timeline />, document.getElementById("app"));