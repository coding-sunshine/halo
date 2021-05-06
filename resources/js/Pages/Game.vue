<template>
    <div class="halo_intro">
        <img src="images/halo_bg.png" />
        <div class="halo_intro_info">
            <h1>
                Get the Halo. <br />
                Be the Value Champion.
            </h1>
            <p>
                Catch the halo, send us the picture <br />
                at xyz and win the Lucky draw!
            </p>

            <div class="ring_section">
                <img src="images/static_ring.png" ref="staticRing" />

                <div class="moving_ring">
                    <img src="images/static_ring.png" ref="movingRing" />
                </div>
            </div>

            <div class="upload_avtar margin0">
                <div class="avtar_img">
                    <img :src="avatar" />
                </div>
            </div>

            <button class="custom-button" @click="getPos()">
                <span>Click Here to Catch the Halo</span>
            </button>
        </div>
    </div>
</template>

<script>
import "./../Styles/game.scss";
import { mapGetters } from "vuex";

export default {
    name: "game",
    computed: {
        ...mapGetters(["avatar"]),
    },
    methods: {
        getPos() {
            const staticRing = this.$refs["staticRing"].getBoundingClientRect()
                .x;
            const movingRing = this.$refs["movingRing"].getBoundingClientRect()
                .x;

            if (
                movingRing >= staticRing - 20 &&
                movingRing <= staticRing + 20
            ) {
                console.log("congratulation");
                this.$router.push("congratulation");
            } else {
                console.log("try again");
                this.$router.push("try-again");
            }
        },
    },
};
</script>
