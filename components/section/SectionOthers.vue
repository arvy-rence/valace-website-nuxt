<template>
    <div class="font-khula relative" id="misc">
        <div class="w-full h-full absolute -z-10 bg-primary opacity-20"></div>
        <div class="flex flex-col justify-center items-center py-[3rem] max-w-[calc(1500px)] mx-auto">
            <!--            //Guidelines-->
            <div class="w-5/6 lg:w-2/3 mb-[3rem]">
                <h1 class="text-sm">
                    <button
                        class="relative flex items-center w-full py-4 px-5 text-xl"
                        :class="[guideLinesIsActive ?
                        ['bg-white', 'text-primary'] :
                        ['bg-primary', 'text-white']
                    ]"
                        @click="setGuidelinesToggle">
                        <i class="fa-solid fa-file-shield pr-[1rem]"></i>
                        <h1 class="font-khula pt-1">Guidelines</h1>

                        <span
                            :class="[guideLinesIsActive ? ['rotate-180', 'duration-300'] : ['rotate-0', 'duration-300']]"
                            class="absolute right-[1rem]">
                        <i class="fa-solid fa-chevron-up"></i>
                    </span>

                    </button>
                </h1>
                <div :class="[guideLinesIsActive ? [''] : ['custom-accordion-animation2']]"
                     class="custom-default bg-white">
                    <div class="accordion-body py-4 px-5 bg-white px-[2rem] md:px-[6rem] text-primary">
                        <ul class="list-panuntunan-a">
                            <li>Library visitors must have a valid ID (government issued ID, school ID, company ID, etc.) to
                                avail of the Valenzuela City Library services.
                            </li>

                            <li>Children ages 6 and below must be accompanied by their parent or guardian.</li>

                            <li>Discussion in the Library is allowed but voice level must be kept at a minimum to avoid
                                disturbing
                                other Library visitors. Unnecessary noise, disruptive behavior, discourteous conduct, loud
                                conversation and discussion, smoking, and drinking are prohibited.
                            </li>

                            <li class="ml-[3rem] list-panuntunan-b">If any Library material is accidentally damaged, kindly inform the Library staff
                                immediately.
                                Parents/guardians of young children are responsible for any damages caused by the latter.
                            </li>

                            <li class="ml-[3rem] list-panuntunan-b">Please report any damages to furniture and equipment immediately. Patrons and
                                parents/guardians shall bear
                                the costs of repair or replacement of damaged items.
                            </li>

                            <li>The use of electrical outlets shall depend on the existing house rules of the Convention
                                Center.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!--            //Panuntunan-->
            <div class="w-5/6 lg:w-2/3 mb-[3rem]">
                <h1 class="text-sm">
                    <button
                        class="relative flex items-center w-full py-4 px-5 text-xl"
                        :class="[panuntunanIsActive ?
                        ['bg-white', 'text-primary'] :
                        ['bg-primary', 'text-white']
                    ]"
                        @click="setPanuntunanToggle">
                        <i class="fa-solid fa-file-shield pr-[1rem]"></i>
                        <h1 class="font-khula pt-1">Panuntunan</h1>

                        <span
                            :class="[panuntunanIsActive ? ['rotate-180', 'duration-300'] : ['rotate-0', 'duration-300']]"
                            class="absolute right-[1rem]">
                        <i class="fa-solid fa-chevron-up"></i>
                    </span>

                    </button>
                </h1>
                <div :class="[panuntunanIsActive ? [''] : ['custom-accordion-animation2']]"
                     class="custom-default bg-white">
                    <div class="accordion-body py-4 px-5 bg-white px-[2rem] md:px-[6rem] text-primary">
                        <ul class="list-panuntunan-a">
                            <li>Ang Aklatan ay bukas araw-araw, mula Lunes hanggang Linggo sa mga sumusunod na oras:
                            </li>
                            <li class="ml-[3rem] list-panuntunan-b">Unang Palapag: 9:00n.u. - 6:00 n.g.</li>
                            <li class="ml-[3rem] list-panuntunan-b">Ikalawang Palapag: 9:00n.u. - 2:00 n.u.</li>
                            <li class="ml-[3rem] list-panuntunan-b">Ikatlong Palapag: 9:00n.u. - 6:00 n.g.</li>
                            <li>Magsuot ng wastong pananamit na naaayon sa lugar.</li>
                            <li>Ang mga bata ay dapat patnubayang mabuti ng kanilang magulang o guardian.</li>
                            <li>Magbigay respeto sa kapwa Library user at sa mga empleyado ng ating Aklatan.</li>
                            <li>Iwasang lumikha ng malakas na ingay na makagagambala sa ating kapwa. Kung nais
                                magpatugtog,
                                gumamit ng
                                headphone o headset.
                            </li>
                            <li>Mahigpit na ipinagbabawal ang pagdadala ng anumang mapanganib na kagamitan sa loob ng
                                Aklatan.
                            </li>
                            <li>Maaaring magdala ng inumin sa loob ng ating Aklatan maliban sa lugar na malapit sa
                                Shelves
                                at Computer
                                Section.
                            </li>
                            <li>Bawal ang pagdadala o pag-inom ng anumang nakalalasing na inumin.</li>
                            <li>Hindi maaaring kumain sa loob ng ating Aklatan. Kung nagugutom, may nilaang lugar kainan
                                ang
                                Aklatan.
                            </li>
                            <li>Ingatan ang mga aklat. Huwag sulatan, punitin, o basain.</li>
                            <li>Ang mga aklat at iba pang babasahin ay maaari lamang basahin sa loob ng ating Aklatan.
                            </li>

                            <li>Ingatan at huwag sirain ang mga gamit sa ating Aklatan.</li>
                            <li>Panatilihing malinis ang ating Aklatan. Iwasang magkalat.</li>
                            <li>Bawal ang pag-access o panonood ng malalaswang babasahin o video sa ating Aklatan.</li>
                            <li>Ang mga computers sa Aklatan ay dapat gamitin lamang para sa pananaliksik, proyekto,
                                page-email at mga kahanlintulad
                                na gawain.
                            </li>
                            <li>Ang pagkuha ng mga larawan at video sa ating Aklatan ay kailangang may pahintulot mula
                                sa
                                namamahala.
                            </li>
                            <li>Bawal ang pamamahagi ng pampleta, paghingi ng kontribusyon, o pagsasagawa ng survey ng
                                walang tamang pagpapaalam sa
                                namamahala ng ating Aklatan.
                            </li>
                            <li>Bawal magtinda o magpabayad ng anumang uri ng serbisyo ng walang pahintulot mula sa
                                Aklatan.
                            </li>
                            <li>Bawal manigarilyo.</li>
                            <li>Ang mga trained na service animals ay maaaring pumasok sa ating Aklatan upang gabayan
                                ang
                                mga physically-challenged
                                na Library users.
                            </li>
                        </ul>


                        <p>Para sa karagdagang impormasyon, makipag-ugnayan sa Valenzuela City Library sa:
                            [Phone Number] o [valenzuelacitylibrary@gmail.com]. Salamat po sa inyong kooperasyon.</p>
                    </div>
                </div>
            </div>

            <!--            //Mission and Vision-->
            <div class="w-5/6 lg:w-2/3 mb-[3rem]">
                <h1 class="">
                    <button
                        class="relative flex items-center w-full py-4 px-5 text-xl"
                        :class="[missionVisionIsActive ?
                        ['bg-white', 'text-primary'] :
                        ['bg-primary', 'text-white']
                    ]"
                        @click="setMissionVisionToggle"
                    >
                        <i class="fa-solid fa-bullseye pr-[1rem]"></i>
                        <h1 class="font-khula pt-1">Mission and Vision</h1>

                        <span
                            :class="[missionVisionIsActive ? ['rotate-180', 'duration-300'] : ['rotate-0', 'duration-300']]"
                            class="absolute right-[1rem]">
                       <i class="fa-solid fa-chevron-up"></i>
                    </span>

                    </button>
                </h1>
                <div :class="[missionVisionIsActive ? [''] : ['custom-accordion-animation2']]" class="custom-default">
                    <div class="accordion-body py-4 px-5 bg-white px-[2rem] md:px-[6rem] text-primary">
                        <h1 class="font-bold text-lg">Mission</h1>
                        Lead and engage in a dynamic advocacy of literacy and lifelong learning chiefly amongst
                        Valenzuelanos by sustaining and providing quality access to community relevant resources and
                        through the delivery of effective and meaningful programs.

                        <h1 class="font-bold text-lg pt-5">Vision</h1>
                        To be a leading public library system which caters to the literacy needs and lifelong learning
                        of Valenzuela City constituents and the general public.
                    </div>
                </div>
            </div>

            <!--            //FAQ-->
            <div class="w-5/6 lg:w-2/3">
                <h1 class="text-sm">
                    <button class="relative flex items-center w-full py-4 px-5 text-xl"
                            :class="[faqIsActive ?
                        ['bg-white', 'text-primary'] :
                        ['bg-primary', 'text-white']
                        ]"
                            @click="setFAQToggle">
                        <i class="fa-solid fa-question pr-[1rem]"></i>
                        <h1 class="font-khula pt-1">Frequently Asked Questions (FAQs)</h1>

                        <span :class="[faqIsActive ? ['rotate-180', 'duration-300'] : ['rotate-0', 'duration-300']]"
                              class="absolute right-[1rem]">
                       <i class="fa-solid fa-chevron-up"></i>
                    </span>
                    </button>
                </h1>
                <div :class="[faqIsActive ? [''] : ['custom-accordion-animation2']]" class="custom-default">
                    <div class="accordion-body py-4 px-5 bg-white px-[2rem] md:px-[6rem] text-primary">
                        <h1 class="font-bold text-lg">Where is the Valenzuela City Library located?</h1>
                        Valenzuela City Library is located at: MXW9+54C, Llenado, Valenzuela, Metro Manila

                        <h1 class="font-bold text-lg pt-5">What is the Valenzuela City Library’s operating hours?</h1>
                        Valenzuela City Library is open from Monday to Sunday, 9:00 AM to 2:00 AM and closed on
                        holidays.

                        <h1 class="font-bold text-lg pt-5">What is the telephone number of the Valenzuela City
                            Library?</h1>
                        Valenzuela City Library’s telephone number is 8-352-1000.

                        <h1 class="font-bold text-lg pt-5">What is the official link for the Library System (OPAC) of
                            Valenzuela City Library?</h1>
                        Visit our official link: library.valenzuela.gov.ph
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SectionOthers",
    data() {
        return {
            missionVisionIsActive: Boolean,
            guideLinesIsActive: Boolean,
            faqIsActive: Boolean,
            panuntunanIsActive: Boolean,
        }
    },
    created() {
        this.missionVisionIsActive(false);
        this.guideLinesIsActive(false);
        this.faqIsActive(false);
        this.panuntunanIsActive(false);
    },
    methods: {
        setMissionVisionToggle() {
            this.missionVisionIsActive = !this.missionVisionIsActive
        },
        setGuidelinesToggle() {
            this.guideLinesIsActive = !this.guideLinesIsActive
        },
        setFAQToggle() {
            this.faqIsActive = !this.faqIsActive
        },
        setPanuntunanToggle() {
            this.panuntunanIsActive = !this.panuntunanIsActive;
        }
    }
}
</script>

<style scoped>
.list-panuntunan-a {
    list-style-type: disc;
}

.list-panuntunan-b {
    list-style-type: circle;
}

.custom-default {
    overflow: hidden;
    max-height: 0px;
    -webkit-transition: max-height 0.3s ease-in-out, box-shadow 0.6s linear;
    -moz-transition: max-height 0.3s ease-in-out, box-shadow 0.6s linear;
    -o-transition: max-height 0.3s ease-in-out, box-shadow 0.6s linear;
    -ms-transition: max-height 0.3s ease-in-out, box-shadow 0.6s linear;
    transition: max-height 0.3s ease-in-out, box-shadow 0.6s linear;
}

.custom-accordion-animation2 {
    max-height: 5000px;
    -webkit-transition: max-height 0.5s ease-in-out, box-shadow 0.1s linear;
    -moz-transition: max-height 0.5s ease-in-out, box-shadow 0.1s linear;
    -o-transition: max-height 0.5s ease-in-out, box-shadow 0.1s linear;
    -ms-transition: max-height 0.5s ease-in-out, box-shadow 0.1s linear;
    transition: max-height 0.5s ease-in-out, box-shadow 0.1s linear;
}
</style>