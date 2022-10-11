<template>
    <div class="flex flex-col-reverse lg:flex-row px-[2rem] lg:px-[6rem] py-[5rem] max-w-[calc(1500px)] mx-auto" >
        <div class="w-full lg:w-1/2 px-[1rem] mt-[2rem]">
            <h1 class="font-bold text-gray-400 text-4xl">
                FIND US
            </h1>
            <h1 class="font-bold text-2xl text-primary">
                Location
            </h1>
            <p class="pl-0 text-2xl text-primary">
                Valenzuela City Library, MXW9+54C, Llenado, Valenzuela, Metro Manila
            </p>
            <h1 class="font-bold text-2xl pt-4 text-primary">
                Library Hours
            </h1>
            <div class="pl-0 text-primary">
                <h2 class="text-2xl">Monday - Sunday</h2>
                <h2 class="text-2xl">9:00AM - 12:00AM</h2>
                <h2 class="text-2xl text-secondary font-bold">Closed on Holidays</h2>
            </div>

            <h1 class="font-bold text-2xl pt-4 text-primary">
                Get in touch with us
            </h1>
            <div class="pl-0 flex flex-col sm:flex-row text-primary">
                <div>
                    <h2 class="text-xl">Visit our social links:</h2>
                    <h2>
                        <a href="https://facebook.com/valaceValenzuela" class="font-kulim" target="_blank"><i class="fa-brands fa-facebook"></i> facebook.com/valaceValenzuela</a>
                    </h2>
                    <h2>
                        <a href="https://twitter.com/@valaceValenzuela" class="font-kulim" target="_blank"><i class="fa-brands fa-twitter"></i> @valcitylibrary</a>
                    </h2>
                    <h2>
                        <a href="https://twitter.com/@valaceValenzuela" class="font-kulim" target="_blank"><i class="fa-brands fa-square-instagram"></i> @Valenzuela City Library</a>
                    </h2>
                    <h2>
                        <a href="https://twitter.com/@valaceValenzuela" target="_blank" class="flex flex-row font-kulim"><img src="/images/icons/blue-koha.png" alt="" class="w-[19px] h-[21px] pt-1 pr-1">  library.valenzuela.gov.ph/OPAC</a>
                    </h2>
                </div>
                <div class="pl-0 sm:pl-[3rem]">
                    <h2 class="text-xl">Contact Us:</h2>
                    <h2>
                        <a href="https://twitter.com/@valaceValenzuela" target="_blank"><i class="fa-solid fa-phone"></i> 8-352-1000</a>
                    </h2>
                    <h2>
                        <a href="https://twitter.com/@valaceValenzuela" target="_blank"><i class="fa-solid fa-envelope"></i> valenzuelacitylibrary@gmail.com</a>
                    </h2>
                </div>


            </div>
        </div>
        <div class="w-full lg:w-2/4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d884.7627365065613!2d120.9654603868822!3d14.692103246896254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b58186049e65%3A0x3b293f197c2be1ab!2sValenzuela%20Academic%20Center%20for%20Excellence%20-%20ValACE!5e0!3m2!1sen!2sph!4v1661921641437!5m2!1sen!2sph"
                    style="border:0;"
                    height="450"
                    allowfullscreen=""
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    class="shadow-lg rounded-xl w-full">
            </iframe>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SectionContactInfo",
    }
</script>

<style>

</style>