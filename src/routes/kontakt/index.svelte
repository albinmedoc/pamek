<script>
    import Form from '../../components/kontakt/form.svelte';
</script>

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
        grid-template-columns: 1fr 1fr;
        column-gap: 10%;
    }

    .person {
        margin-bottom: 30px;
    }

    .person > div {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .person > div > img {
        width: 200px;
        border-radius: 30px;
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
            ett hembesök. Det är kostnadsfritt och utan krav på beställning
        </p>
        <br />
        <strong>Information</strong>
        <ul>
            <li><p>PAMEK AB</p></li>
            <li><p>Traversvägen 1 | 245 34 Staffanstorp</p></li>
            <li><p><a href="tel:+46703774603">+46 703 77 46 03</a></p></li>
            <li><p><a href="mailto:info@pamek.nu">info@pamek.nu</a></p></li>
        </ul>
    </div>

    <Form />

    <div id="persons">
        <h3>Våra montörer</h3>
        <div>
            <section class="person">
                <div>
                    <!-- <img alt="Patrik Takkula" src="/images/mikael_bjorklund.png"> -->
                    <span>
                        <p><strong>Patrik Takkula</strong></p>
                        <p><a href="tel:+46703774603">+46 703 77 46 03</a></p>
                        <p><a href="mailto:patrik@pamek.nu">patrik@pamek.nu</a></p>
                    </span>
                </div>
                <!-- <p>Bmlakmkslmkldm lskamkl mdaklmdlk malkdm la
                    D ksamkd msalmd lkamskldm las
                    M kdsamkdm alms kamdlkm akldmslam dlksa
                    Km dmsakldm aklmdkl amdlksm alkmdlkad</p>
                    
                    <p>D kmsamk dmksa dkmaskd masklmd lakmdsam</p> -->
            </section>
            <section class="person">
                <div>
                    <!-- <img alt="Filip Takkula" src="/images/mikael_bjorklund.png"> -->
                    <span>
                        <p><strong>Filip Takkula</strong></p>
                        <p><a href="tel:+46760472835">+46 760 47 28 35</a></p>
                        <p><a href="mailto:filip@pamek.nu">filip@pamek.nu</a></p>
                    </span>
                </div>
                <!-- <p>Bmlakmkslmkldm lskamkl mdaklmdlk malkdm la
                    D ksamkd msalmd lkamskldm las
                    M kdsamkdm alms kamdlkm akldmslam dlksa
                    Km dmsakldm aklmdkl amdlksm alkmdlkad</p>
                    
                    <p>D kmsamk dmksa dkmaskd masklmd lakmdsam</p> -->
            </section>
        </div>
    </div>
</div>
