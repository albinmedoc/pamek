<script>
    import ShieldHalfFull from 'svelte-material-icons/ShieldHalfFull.svelte';
</script>

<style>
    /* Hero section  */
    #hero {
        background-size: cover;
        background-image: url('/images/bathroom.jpg');
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
    #om-oss,
    #experience {
        margin: 40px 0;
    }
    #om-oss > h3,
    #experience > h3 {
        font-size: 30px;
        color: #333333;
    }

    #om-oss > p,
    #experience > p {
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
</section>

<section id="vara-tjanster" class="container">
    <h3>Våra tjänster</h3>
    <div id="services_container">
        <section class="service">
            <h4>
                <ShieldHalfFull />Service 1
            </h4>
            <p>
                Teknisk isolering minskar buller, risken för legionellabakterien
                och försvårar spridningen av eld vid en eventuell brand.
            </p>
        </section>
        <section class="service">
            <h4>
                <ShieldHalfFull />Service 1
            </h4>
            <p>
                Teknisk isolering minskar buller, risken för legionellabakterien
                och försvårar spridningen av eld vid en eventuell brand.
            </p>
        </section>
        <section class="service">
            <h4>
                <ShieldHalfFull />Service 1
            </h4>
            <p>
                Teknisk isolering minskar buller, risken för legionellabakterien
                och försvårar spridningen av eld vid en eventuell brand.
            </p>
        </section>
        <section class="service">
            <h4>
                <ShieldHalfFull />Service 1
            </h4>
            <p>
                Teknisk isolering minskar buller, risken för legionellabakterien
                och försvårar spridningen av eld vid en eventuell brand.
            </p>
        </section>
        <section class="service">
            <h4>
                <ShieldHalfFull />Service 1
            </h4>
            <p>
                Teknisk isolering minskar buller, risken för legionellabakterien
                och försvårar spridningen av eld vid en eventuell brand.
            </p>
        </section>
        <section class="service">
            <h4>
                <ShieldHalfFull />Service 1
            </h4>
            <p>
                Teknisk isolering minskar buller, risken för legionellabakterien
                och försvårar spridningen av eld vid en eventuell brand.
            </p>
        </section>
    </div>
</section>

<section id="experience" class="container">
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
</section>
