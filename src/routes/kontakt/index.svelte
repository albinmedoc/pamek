<style>
    h3 {
        font-size: 30px;
        color: #333333;
    }

    p, a {
        color: #333333;
    }

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10%;
    }
    

    #persons {
        grid-column: auto / span 2;
    }

    #persons > div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 10%;
    }

    .person {
        margin-bottom: 30px;
    }

    .person > div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
    }

    @media (max-width: 930px) {
        .container {
            grid-template-columns: 1fr;
        }

        #persons {
            grid-column: unset;
        }

        #persons > div {
            grid-template-columns: 1fr;
        }
    }

</style>

<div class="container">
    <div id="info">
        <h3>Kontakta oss</h3>
        <p>
            Ring eller maila oss när som helst under dagen, vi strävar efter att
            återkoppla inom 24 timmar!
        </p>
        <p>
            Önskar du en gratis offert? Tveka inte att kontakta oss för att boka
            ett hembesök. Det är kostnadsfritt och utan krav på beställning.
        </p>
        <br />
        <strong>Information</strong>
        <ul>
            <li><p>PAMEK AB</p></li>
            <li><p>Satellitvägen 7 | 245 34 Staffanstorp</p></li>
            <li><p><a href="tel:+46465403400">046-540 34 00</a></p></li>
            <li><p><a href="mailto:info@pamek.nu">info@pamek.nu</a></p></li>
        </ul>
    </div>

<!--
    <div id="persons">
        <h3>Våra montörer</h3>
        <div>
            <section class="person">
                <div>
                    <span>
                        <p><strong>Patrik Takkula</strong></p>
                        <p><a href="tel:+46703774603">+46 703 77 46 03</a></p>
                        <p><a href="mailto:patrik@pamek.nu">patrik@pamek.nu</a></p>
                    </span>
                </div>
            </section>
            <section class="person">
                <div>
                    <span>
                        <p><strong>Filip Takkula</strong></p>
                        <p><a href="tel:+46760472835">+46 760 47 28 35</a></p>
                        <p><a href="mailto:filip@pamek.nu">filip@pamek.nu</a></p>
                    </span>
                </div>
            </section>
            <section class="person">
                <div>
                    <span>
                        <p><strong>Christian Holmkvist</strong></p>
                        <p><a href="tel:+46708650322">+46 708 65 03 22</a></p>
                        <p><a href="mailto:crille@pamek.nu">crille@pamek.nu</a></p>
                    </span>
                </div>
            </section>
            <section class="person">
                <div>
                    <span>
                        <p><strong>Andrée Stuxgren</strong></p>
                        <p><a href="tel:+46708650330">+46 708 65 03 30</a></p>
                        <p><a href="mailto:andre@pamek.nu">andre@pamek.nu</a></p>
                    </span>
                </div>
            </section>
            <section class="person">
                <div>
                    <span>
                        <p><strong>Lucas Persson</strong></p>
                        <p><a href="tel:+46768668737">+46 768 66 87 37</a></p>
                        <p><a href="mailto:lucas@pamek.nu">lucas@pamek.nu</a></p>
                    </span>
                </div>
            </section>
            <section class="person">
                <div>
                    <span>
                        <p><strong>Semir Zejnelagic</strong></p>
                        <p><a href="tel:+46708650300">+46 708 65 03 00</a></p>
                        <p><a href="mailto:semir@pamek.nu">semir@pamek.nu</a></p>
                    </span>
                </div>
            </section>
            <section class="person">
                <div>
                    <span>
                        <p><strong>Peter Elsass</strong></p>
                        <p><a href="tel:+46708650023">+46 708 65 00 23</a></p>
                        <p><a href="mailto:peter@pamek.nu">peter@pamek.nu</a></p>
                    </span>
                </div>
            </section>
        </div>
    </div>
    -->
</div>
