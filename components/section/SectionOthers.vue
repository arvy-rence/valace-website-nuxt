<template>
    <div class="flex flex-col justify-center items-center bg-gray-100 py-[3rem]">
        <div class="border border-black w-2/3 mb-[3rem]">
            <h1 class="">
                <button
                    class="relative flex items-center w-full py-4 px-5 text-xl"
                    :class="[missionVisionIsActive ?
                        ['bg-white', 'text-black'] :
                        ['bg-black', 'text-white']
                    ]"
                    @click="setMissionVisionToggle"
                >
                    <i class="fa-solid fa-bullseye pr-[2rem]"></i> Mission and Vision

                    <span v-show="missionVisionIsActive" class="absolute right-[1rem]">
                        <i class="fa-solid fa-chevron-down"></i>
                    </span>
                    <span v-show="!missionVisionIsActive" class="absolute right-[1rem]">
                        <i class="fa-solid fa-chevron-up"></i>
                    </span>

                </button>
            </h1>
            <div :class="[missionVisionIsActive ? 'hidden' : 'show']">
                <div class="accordion-body py-4 px-5 bg-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at maximus dolor, sed volutpat felis. Mauris imperdiet commodo ante, at luctus dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec aliquam, erat eu interdum varius, libero odio cursus mi, mollis hendrerit augue sem vel nunc. Aenean vehicula hendrerit orci, vel gravida metus viverra quis. Integer dignissim metus non nibh lobortis, sed dictum urna cursus. Fusce commodo nisi diam, pharetra consequat tellus dictum non. Vestibulum consequat cursus lacus vitae efficitur. Maecenas luctus egestas neque, sed pulvinar lectus finibus sed. Nullam fringilla enim nec est volutpat, et placerat lacus egestas. Fusce ullamcorper erat ut tellus consequat, ullamcorper porttitor orci blandit.

                    Nunc velit purus, vehicula eu sodales gravida, euismod eget mauris. Sed sit amet malesuada enim, sed eleifend ex. Suspendisse cursus molestie urna, at venenatis magna porta euismod. Donec non pulvinar nulla. Nam bibendum libero vel orci tincidunt lobortis. Duis vulputate posuere lorem eu fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In neque ligula, luctus at finibus sit amet, suscipit in risus. Morbi at elit sagittis, ultricies ante ut, porttitor dolor. Ut sed aliquam nisi, ac maximus risus. Vivamus augue quam, pharetra a imperdiet a, porta vitae velit. Praesent elementum turpis sit amet commodo placerat.

                    Aliquam sit amet massa volutpat, aliquet augue vitae, dignissim lorem. Aenean id maximus est, ac posuere tortor. Curabitur porta ligula molestie, luctus eros bibendum, venenatis odio. Suspendisse posuere, nunc nec mattis interdum, nibh dolor semper tortor, mattis aliquam est ligula id velit. Pellentesque varius nisi consequat mauris malesuada euismod. Sed pretium at magna sed suscipit. In faucibus est quis massa eleifend, quis pretium turpis commodo. Suspendisse potenti. Proin euismod consequat placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultrices purus eget erat sodales accumsan. Sed hendrerit, ex sed viverra ultricies, tortor turpis accumsan orci, eu aliquam sapien nulla ac turpis. Suspendisse tempor dui id pharetra fermentum.

                    Integer sit amet pellentesque eros, in ultrices nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt mi. Sed consequat pharetra risus. Nam sagittis nisl neque, vel tincidunt ex laoreet ut. Nam vehicula mattis ligula, ut bibendum erat sodales id. Sed a nisi nulla. Phasellus volutpat commodo tellus sit amet accumsan. Aliquam vitae mi nec justo pellentesque sollicitudin vel at enim. Cras luctus tincidunt gravida. Nullam volutpat dui leo, id pulvinar diam vulputate sit amet. Sed in vehicula dui.

                    Sed ac mauris dui. Proin lacinia tempor mollis. Sed sapien augue, facilisis at luctus non, faucibus in enim. Vestibulum vel dolor quis tortor ultrices pharetra. Etiam semper at nisi sed rutrum. Fusce tempus orci sapien, eget ullamcorper velit porttitor nec. Nam sed consequat lectus. Nulla vitae hendrerit turpis, vitae tristique neque. Nunc bibendum accumsan ante, vitae molestie metus interdum sed. Phasellus molestie elit eget faucibus molestie. Donec lobortis, nisi et efficitur interdum, nunc lacus vulputate velit, vel tincidunt libero risus eget enim. Ut vestibulum dignissim sapien, vitae fringilla diam vehicula eu. Nulla tempus cursus nulla quis porttitor. Vivamus aliquet erat eget erat sollicitudin, et mattis ante efficitur.
                </div>
            </div>
        </div>

        <div class="border border-black w-2/3 mb-[3rem]">
            <h1 class="text-sm">
                <button
                    class="relative flex items-center w-full py-4 px-5 text-xl"
                    :class="[guideLinesIsActive ?
                        ['bg-white', 'text-black'] :
                        ['bg-black', 'text-white']
                    ]"
                    @click="setGuidelinesToggle">
                    <i class="fa-solid fa-file-shield pr-[2rem]"></i>Guidelines

                    <span v-show="guideLinesIsActive" class="absolute right-[1rem]">
                        <i class="fa-solid fa-chevron-down"></i>
                    </span>
                    <span v-show="!guideLinesIsActive" class="absolute right-[1rem]">
                        <i class="fa-solid fa-chevron-up"></i>
                    </span>

                </button>
            </h1>
            <div :class="[guideLinesIsActive ? 'hidden' : 'show']">
                <div class="accordion-body py-4 px-5 bg-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at maximus dolor, sed volutpat felis. Mauris imperdiet commodo ante, at luctus dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec aliquam, erat eu interdum varius, libero odio cursus mi, mollis hendrerit augue sem vel nunc. Aenean vehicula hendrerit orci, vel gravida metus viverra quis. Integer dignissim metus non nibh lobortis, sed dictum urna cursus. Fusce commodo nisi diam, pharetra consequat tellus dictum non. Vestibulum consequat cursus lacus vitae efficitur. Maecenas luctus egestas neque, sed pulvinar lectus finibus sed. Nullam fringilla enim nec est volutpat, et placerat lacus egestas. Fusce ullamcorper erat ut tellus consequat, ullamcorper porttitor orci blandit.

                    Nunc velit purus, vehicula eu sodales gravida, euismod eget mauris. Sed sit amet malesuada enim, sed eleifend ex. Suspendisse cursus molestie urna, at venenatis magna porta euismod. Donec non pulvinar nulla. Nam bibendum libero vel orci tincidunt lobortis. Duis vulputate posuere lorem eu fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In neque ligula, luctus at finibus sit amet, suscipit in risus. Morbi at elit sagittis, ultricies ante ut, porttitor dolor. Ut sed aliquam nisi, ac maximus risus. Vivamus augue quam, pharetra a imperdiet a, porta vitae velit. Praesent elementum turpis sit amet commodo placerat.

                    Aliquam sit amet massa volutpat, aliquet augue vitae, dignissim lorem. Aenean id maximus est, ac posuere tortor. Curabitur porta ligula molestie, luctus eros bibendum, venenatis odio. Suspendisse posuere, nunc nec mattis interdum, nibh dolor semper tortor, mattis aliquam est ligula id velit. Pellentesque varius nisi consequat mauris malesuada euismod. Sed pretium at magna sed suscipit. In faucibus est quis massa eleifend, quis pretium turpis commodo. Suspendisse potenti. Proin euismod consequat placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultrices purus eget erat sodales accumsan. Sed hendrerit, ex sed viverra ultricies, tortor turpis accumsan orci, eu aliquam sapien nulla ac turpis. Suspendisse tempor dui id pharetra fermentum.

                    Integer sit amet pellentesque eros, in ultrices nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt mi. Sed consequat pharetra risus. Nam sagittis nisl neque, vel tincidunt ex laoreet ut. Nam vehicula mattis ligula, ut bibendum erat sodales id. Sed a nisi nulla. Phasellus volutpat commodo tellus sit amet accumsan. Aliquam vitae mi nec justo pellentesque sollicitudin vel at enim. Cras luctus tincidunt gravida. Nullam volutpat dui leo, id pulvinar diam vulputate sit amet. Sed in vehicula dui.

                    Sed ac mauris dui. Proin lacinia tempor mollis. Sed sapien augue, facilisis at luctus non, faucibus in enim. Vestibulum vel dolor quis tortor ultrices pharetra. Etiam semper at nisi sed rutrum. Fusce tempus orci sapien, eget ullamcorper velit porttitor nec. Nam sed consequat lectus. Nulla vitae hendrerit turpis, vitae tristique neque. Nunc bibendum accumsan ante, vitae molestie metus interdum sed. Phasellus molestie elit eget faucibus molestie. Donec lobortis, nisi et efficitur interdum, nunc lacus vulputate velit, vel tincidunt libero risus eget enim. Ut vestibulum dignissim sapien, vitae fringilla diam vehicula eu. Nulla tempus cursus nulla quis porttitor. Vivamus aliquet erat eget erat sollicitudin, et mattis ante efficitur.
                </div>
            </div>
        </div>

        <div class="border border-black w-2/3">
            <h1 class="text-sm">
                <button class="relative flex items-center w-full py-4 px-5 text-xl"
                        :class="[faqIsActive ?
                        ['bg-white', 'text-black'] :
                        ['bg-black', 'text-white']
                        ]"
                        @click="setFAQToggle">
                    <i class="fa-solid fa-question pr-[2rem]"></i> Frequently Asked Questions (FAQ)

                    <span v-show="faqIsActive" class="absolute right-[1rem]">
                        <i class="fa-solid fa-chevron-down"></i>
                    </span>
                    <span v-show="!faqIsActive" class="absolute right-[1rem]">
                        <i class="fa-solid fa-chevron-up"></i>
                    </span>
                </button>
            </h1>
            <div :class="[faqIsActive ? 'hidden' : 'show']">
                <div class="accordion-body py-4 px-5 bg-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at maximus dolor, sed volutpat felis. Mauris imperdiet commodo ante, at luctus dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec aliquam, erat eu interdum varius, libero odio cursus mi, mollis hendrerit augue sem vel nunc. Aenean vehicula hendrerit orci, vel gravida metus viverra quis. Integer dignissim metus non nibh lobortis, sed dictum urna cursus. Fusce commodo nisi diam, pharetra consequat tellus dictum non. Vestibulum consequat cursus lacus vitae efficitur. Maecenas luctus egestas neque, sed pulvinar lectus finibus sed. Nullam fringilla enim nec est volutpat, et placerat lacus egestas. Fusce ullamcorper erat ut tellus consequat, ullamcorper porttitor orci blandit.

                    Nunc velit purus, vehicula eu sodales gravida, euismod eget mauris. Sed sit amet malesuada enim, sed eleifend ex. Suspendisse cursus molestie urna, at venenatis magna porta euismod. Donec non pulvinar nulla. Nam bibendum libero vel orci tincidunt lobortis. Duis vulputate posuere lorem eu fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In neque ligula, luctus at finibus sit amet, suscipit in risus. Morbi at elit sagittis, ultricies ante ut, porttitor dolor. Ut sed aliquam nisi, ac maximus risus. Vivamus augue quam, pharetra a imperdiet a, porta vitae velit. Praesent elementum turpis sit amet commodo placerat.

                    Aliquam sit amet massa volutpat, aliquet augue vitae, dignissim lorem. Aenean id maximus est, ac posuere tortor. Curabitur porta ligula molestie, luctus eros bibendum, venenatis odio. Suspendisse posuere, nunc nec mattis interdum, nibh dolor semper tortor, mattis aliquam est ligula id velit. Pellentesque varius nisi consequat mauris malesuada euismod. Sed pretium at magna sed suscipit. In faucibus est quis massa eleifend, quis pretium turpis commodo. Suspendisse potenti. Proin euismod consequat placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultrices purus eget erat sodales accumsan. Sed hendrerit, ex sed viverra ultricies, tortor turpis accumsan orci, eu aliquam sapien nulla ac turpis. Suspendisse tempor dui id pharetra fermentum.

                    Integer sit amet pellentesque eros, in ultrices nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt mi. Sed consequat pharetra risus. Nam sagittis nisl neque, vel tincidunt ex laoreet ut. Nam vehicula mattis ligula, ut bibendum erat sodales id. Sed a nisi nulla. Phasellus volutpat commodo tellus sit amet accumsan. Aliquam vitae mi nec justo pellentesque sollicitudin vel at enim. Cras luctus tincidunt gravida. Nullam volutpat dui leo, id pulvinar diam vulputate sit amet. Sed in vehicula dui.

                    Sed ac mauris dui. Proin lacinia tempor mollis. Sed sapien augue, facilisis at luctus non, faucibus in enim. Vestibulum vel dolor quis tortor ultrices pharetra. Etiam semper at nisi sed rutrum. Fusce tempus orci sapien, eget ullamcorper velit porttitor nec. Nam sed consequat lectus. Nulla vitae hendrerit turpis, vitae tristique neque. Nunc bibendum accumsan ante, vitae molestie metus interdum sed. Phasellus molestie elit eget faucibus molestie. Donec lobortis, nisi et efficitur interdum, nunc lacus vulputate velit, vel tincidunt libero risus eget enim. Ut vestibulum dignissim sapien, vitae fringilla diam vehicula eu. Nulla tempus cursus nulla quis porttitor. Vivamus aliquet erat eget erat sollicitudin, et mattis ante efficitur.
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
        }
    },
    created() {
        this.missionVisionIsActive(false);
        this.guideLinesIsActive(false);
        this.faqIsActive(false);
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
        }
    }
}
</script>

<style scoped>

</style>