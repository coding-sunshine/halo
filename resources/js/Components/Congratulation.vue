<template>
    <div class="upload_avtar margintop30 cong">
        <div class="avtar_img">
            <img :src="avatar" />
        </div>

        <div class="icon icon1">
            <p data-aos="fade-down" data-aos-delay="500">Excellence</p>
            <br />
            <img src="images/Excellence-Arrow.png" data-aos="fade-down" />
        </div>

        <div class="icon icon2">
            <p data-aos="fade-down" data-aos-delay="500">
                Innovative <br />
                thinking
            </p>
            <br />
            <img
                src="images/Innovative-Thinking-Arrow.png"
                data-aos="fade-down"
            />
        </div>

        <div class="icon icon3">
            <img src="images/Collaboration-Arrow.png" data-aos="fade-down" />
            <br />
            <p data-aos="fade-up" data-aos-delay="500">Collaboration</p>
        </div>

        <div class="icon icon4">
            <p data-aos="fade-down" data-aos-delay="500">Integrity</p>
            <br />
            <img src="images/Integrity-Arrow.png" data-aos="fade-down" />
        </div>

        <div class="icon icon5">
            <img src="images/Empathy-Arrow.png" data-aos="fade-down" /> <br />
            <p data-aos="fade-up" data-aos-delay="500">Empathy</p>
        </div>

        <div class="icon icon6">
            <img src="images/Value-Creation-Arrow.png" data-aos="fade-down" />
            <br />
            <p data-aos="fade-up" data-aos-delay="1000">Value creation</p>
        </div>
        <a class="custom-button custom-button-share" @click="$emit('share')" data-html2canvas-ignore
            ><span>Submit Your Picture</span></a
        >
    </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
    name: 'congratulation',
    props: {
        avatar: String,
        default: ""
    },
    created() {
        AOS.init();
    },
}
</script>
