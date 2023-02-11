<template>
    <div class="font-khula relative" id="misc">
        <div class="w-full h-full absolute -z-10 bg-white"></div>

        <div class="w-full bg-primary bg-opacity-20 flex items-center px-[15%]">
            
            <div class="flex w-14 h-14 mr-2">
                <img src="/images/guidelines/missionandvision.png" class="object-scale-down" alt="">
            </div>
            <h1 class="font-khula pt-1">Guidelines</h1>
        </div>
        <!-- px-[6rem]  -->
        <div class="flex w-full my-[1rem]">
            <div class="px-[10%] md:px-[20%]">
                <ul class="list-panuntunan-a font-kulim">

                <p>1. Library visitors must have a valid ID (government issued ID, school ID, company ID, etc.) to avail of the Valenzuela City Library services.</p>

                <p>2. Children ages 6 and below must be accompanied by their parent or guardian.</p>

                <p>3. Discussion in the Library is allowed but voice level must be kept at a minimum to avoid disturbing other Library visitors. Unnecessary noise, disruptive behavior, discourteous conduct, loud conversation and discussion, smoking, and drinking are prohibited.</p>

                <p>4. </p>

                <li class="ml-[3rem] list-panuntunan-b">If any Library material is accidentally damaged, kindly inform the Library staff immediately. 
                    Parents/guardians of young children are responsible for any damages caused by the latter.
                </li>

                <li class="ml-[3rem] list-panuntunan-b">Please report any damages to furniture and equipment immediately. Patrons and parents/guardians shall bear the costs of repair or replacement of damaged items.
                </li>

                <p>5. The use of electrical outlets shall depend on the existing house rules of the Convention Center.</p>
                </ul>
            </div>
        </div>

        <div class="w-full bg-primary bg-opacity-20 flex items-center px-[15%]">
            <div class="flex w-14 h-14 mr-2">
                <img src="/images/guidelines/guidelines.png" class="object-scale-down" alt="">
            </div>
            <h1 class="font-khula pt-1">Mission and Vision</h1>
        </div>

        <div class="flex w-full my-[1rem]">
            <div class="px-[10%] md:px-[20%]">
                <h1 class="font-bold text-lg">Mission</h1>
                <p class="px-[2%]">
                  Lead and engage in a dynamic advocacy of literacy and lifelong learning chiefly amongst
                  Valenzuelanos by sustaining and providing quality access to community relevant resources and
                  through the delivery of effective and meaningful programs.
                </p>

                <h1 class="font-bold text-lg pt-5">Vision</h1>
                <p class="px-[2%]">
                  To be a leading public library system which caters to the literacy needs and lifelong learning
                  of Valenzuela City constituents and the general public.
                </p>
            </div>
        </div>


        <div class="w-full bg-primary bg-opacity-20 flex items-center px-[15%]">
            <div class="flex w-14 h-14 mr-2">
                <img src="/images/guidelines/faq.png" class="object-scale-down" alt="">
            </div>
            <h1 class="font-khula pt-1">Frequently Asked Questions (FAQs)</h1>
        </div>

        <div class="flex w-full my-[1rem]">
            <div class="px-[10%] md:px-[20%]">
                <h1 class="font-bold text-lg">Where is the Valenzuela City Library located?</h1>
                Valenzuela City Library is located at: MacArthur Highway, Corner A. Pablo Street, Malinta, Valenzuela City

                <h1 class="font-bold text-lg pt-5">What is the Valenzuela City Library hours?</h1>
                Valenzuela City Library is open from Monday to Sunday, 9:00 AM to 2:00 AM and closed on
                holidays.

                <h1 class="font-bold text-lg pt-5">What is the telephone number of the Valenzuela City
                    Library?</h1>
                Valenzuela City Library telephone number is: (02)1234-5678.

                <h1 class="font-bold text-lg pt-5">What is the official link for the Library System (OPAC) of
                    Valenzuela City Library?</h1>
                Visit our official link: library.valenzuela.gov.ph
            </div>
        </div>
        <!-- <div class="flex flex-col justify-center items-center py-[3rem] max-w-[calc(1500px)] mx-auto">

        </div> -->
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
            // panuntunanIsActive: Boolean,
        }
    },
    created() {
        this.missionVisionIsActive(false);
        this.guideLinesIsActive(false);
        this.faqIsActive(false);
        // this.panuntunanIsActive(false);
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
        // setPanuntunanToggle() {
        //     this.panuntunanIsActive = !this.panuntunanIsActive;
        // }
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