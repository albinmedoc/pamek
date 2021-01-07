<script>
    import ShieldHalfFull from "svelte-material-icons/ShieldHalfFull.svelte";
</script>

<style>
    /* Hero section  */
    #hero {
        background-size: cover;
        background-image: url("/images/bathroom.jpg");
        width: 100vw;
        height: 56vw;
    }

    #hero {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #hero > div > h2,
    #hero > div > h3 {
        color: #333333;
        text-align: center;
    }

    #hero > div > h2 {
        font-size: 45px;
        text-transform: uppercase;
        font-weight: normal;
    }

    #hero > div > h3 {
        font-size: 28px;
        font-weight: lighter;
    }

    /* About & Experience section  */
    #om-oss {
        margin: 40px 0;
    }

    #om-oss > h3 {
        font-size: 30px;
        color: #333333;
    }

    #om-oss > p {
        font-size: 20px;
        color: #333333;
    }

    /* Services section  */
    #vara-tjanster {
        background-color: #e3e3e3;
        padding-top: 40px;
        padding-bottom: 40px;
    }

    #vara-tjanster > h3 {
        font-size: 30px;
        color: #333333;
    }

    #services_container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
    }

    .service {
        color: #333333;
    }

    @media (max-width: 1150px) {
        #services_container {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 800px) {
        #services_container {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 500px) {
        #hero > div > h2 {
            font-size: 35px;
        }

        #hero > div > h3 {
            font-size: 20px;
        }
    }

    @media (max-width: 400px) {
        #hero > div > h2 {
            font-size: 30px;
        }

        #hero > div > h3 {
            font-size: 15px;
        }
    }

    .service > h4 {
        font-size: 24px;
        font-weight: lighter;
    }
</style>

<svelte:head>
    <title>Pamek VVS</title>
</svelte:head>

<section id="hero">
    <div>
        <h2>Er kompletta installationsfirma</h2>
        <h3>Pamek AB levererar bra vvs-arbeten.</h3>
    </div>
</section>

<section id="om-oss" class="container">
    <h3>Om Pamek VVS</h3>
    <p>
        Pamek AB är det lilla vvs företaget men med lång erfarenhet av vatten
        värme och sanitet. Företaget utgår från Staffanstorp men arbetsområdet
        täcker hela Skåne.
    </p>
    <p>
        Pamek hjälper er med allt från de små reparationerna till dem större
        ombyggnaderna. Vi har samarbetspartners som hjälper till med el, bygg,
        kakel och klinkers och mycket mer.
    </p>
    <p>Pamek AB startade 2018.</p>
</section>

<section id="vara-tjanster" class="container">
    <h3>Våra tjänster</h3>
    <div id="services_container">
        <section class="service">
            <h4>
                <ShieldHalfFull />Service
            </h4>
            <p>
                Vi utför service och reparationsarbete både till privatpersoner,
                fastighetsbolag och företag.
            </p>
        </section>
        <section class="service">
            <h4>
                <ShieldHalfFull />Entreprenader
            </h4>
            <p>
                Vi utför stambyte i flerbostadshus samt mindre ny produktioner.
            </p>
        </section>
        <section class="service">
            <h4>
                <ShieldHalfFull />Pannor/Värmepumpar
            </h4>
            <p>
                Vi byter din gamla värmekälla. Är du nyfiken på en kostnadsfri
                offert hör av dig till oss.
            </p>
        </section>
        <section class="service">
            <h4>
                <ShieldHalfFull />Badrum
            </h4>
            <p>
                Vi tar hand om din badrums renovering från start till mål. Med
                våra samarbetspartners kan vi se till så du får ett nyckel
                färdigt badrum med bara kontakt med ett företag.
            </p>
        </section>
    </div>
</section>

<!-- <section id="experience" class="container">
    <h3>Kunniga montörer</h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Adipiscing enim eu
        taurpis egestas pretium aenean pharetra.
    </p>

    <p>
        Ornare quam viverra orci sagittis. Nullam non nisi est sit. Elementum eu
        facilisis sed odio morbi quis commodo. Adipiscing bibendum est ultricies
        integer quis auctor elit sed vulputate. Integer enim neque volutpat ac
        tincidunt vitae semper quis.
    </p>

    <p>
        Neque sodales ut etiam sit amet nisl. Tortor vitae purus faucibus ornare
        suspendisse sed nisi lacus sed. Id faucibus nisl tincidunt eget nullam
        non nisi. Aenean vel elit scelerisque mauris pellentesque pulvinar
        pellentesque habitant morbi. Ac tortor dignissim convallis aenean et.
        Lectus magna fringilla urna porttitor. Tempor nec feugiat nisl pretium.
    </p>
</section> -->
