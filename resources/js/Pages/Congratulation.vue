<template>
    <div>
        <div class="halo_intro" ref="shareMe">
            <img src="images/halo_bg.png" />
            <div class="halo_intro_info">
                <h1>
                    Congratulations! <br />
                    You are our pround value champion!
                </h1>
                <div class="float-left width-full" style="position: relative">
                    <div v-if="success != ''" class="alert alert-success" role="alert">
                        {{ success }}
                    </div>
                </div>

                <div class="ring_section congratulations_ring_section">
                    <img src="images/glow_ring.png" />
                </div>

                <div class="upload_avtar margintop30">
                    <div class="avtar_img">
                        <img :src="avatar" />
                    </div>

                    <div class="icon icon1">
                        <p data-aos="fade-down" data-aos-delay="500">Excellence</p> <br/>
                        <img src="images/Excellence-Arrow.png" data-aos="fade-down">
                    </div>

                    <div class="icon icon2">
                        <p data-aos="fade-down" data-aos-delay="500">Innovative <br/> thinking</p> <br/>
                        <img src="images/Innovative-Thinking-Arrow.png" data-aos="fade-down">
                    </div>

                    <div class="icon icon3">
                        <img src="images/Collaboration-Arrow.png" data-aos="fade-down">
                        <br/>
                        <p data-aos="fade-up" data-aos-delay="500">Collaboration</p>
                    </div>

                    <div class="icon icon4">
                        <p data-aos="fade-down" data-aos-delay="500">Integrity</p> <br/>
                        <img src="images/Integrity-Arrow.png" data-aos="fade-down">
                    </div>

                    <div class="icon icon5">
                        <img src="images/Empathy-Arrow.png" data-aos="fade-down"> <br/>
                        <p data-aos="fade-up" data-aos-delay="500">Empathy</p>
                    </div>

                    <div class="icon icon6">
                        <img src="images/Value-Creation-Arrow.png" data-aos="fade-down"> <br/>
                        <p data-aos="fade-up" data-aos-delay="1000">Value creation</p>
                    </div>
                    <a class="custom-button custom-button-share" @click="share"
                        ><span>Share</span></a
                    >
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters } from "vuex";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
    name: "congratulation",
    computed: {
        ...mapGetters(["avatar"]),
    },
    data() {
        return {
            output: null,
            success: "",
        }
    },
    created() {
        AOS.init();
    },
    methods: {
        async share() {
            let el = this.$refs.shareMe;
            let options = { type: "dataURL" };
            this.output = await this.$html2canvas(el, options);

            const config = {
                headers: { "content-type": "multipart/form-data" },
            };

            const formData = new FormData()
            formData.append('file', this.output)
            let currentObj = this;
            axios.post("/api/fileShare", formData, config)
                .then((response) => {
                    currentObj.success = response.data.success;
                    console.log(currentObj.success)
                })
                .catch(function (error) {
                    console.log("Something Went wrong!");
                    currentObj.error = error;
                })
        },
    }
};
</script>
