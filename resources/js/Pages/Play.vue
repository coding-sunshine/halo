<template>
    <div class="halo_intro" ref="shareMe">
        <img src="images/halo_bg.png" />
        <div class="halo_intro_info">
            <span>
                <h1 v-if="!gameWon">
                    Get the Halo. <br />
                    Be the Value Champion.
                </h1>
                <p v-if="!gameWon">
                    Catch the halo, send us the picture <br />
                    at xyz and win the Lucky draw!
                </p>

                <div class="float-left width-full" style="position: relative" v-if="gameLost">
                    <div class="alert alert-warning try-again" style="position: relative" role="alert">
                        Try Again! Better luck next time!
                    </div>
                </div>
                <h1 v-if="gameWon">
                    Congratulations! <br />
                    You are our pround value champion!
                </h1>

            </span>


            <div class="ring_section" v-if="startGame && !gameWon">
                <img src="images/static_ring.png" ref="staticRing" />

                <div class="moving_ring">
                    <img src="images/static_ring.png" ref="movingRing" />
                </div>
            </div>

            <div class="ring_section congratulations_ring_section" v-if="gameWon">
                <img src="images/glow_ring.png" />
            </div>

            <div class="upload_avtar" v-if="!gameWon" :class="{ margintop30 : startGame, margin0: gameLost}">
                <div class="avtar_img">
                    <img :src="avatar" />
                </div>
            </div>

            <congratulation v-if="gameWon" :avatar="avatar" @share="share" />

            <button class="custom-button" v-if="!startGame && !gameWon" @click="startGame = true; gameLost = false">Play</button>

            <button class="custom-button" v-if="startGame" @click="getPos()">
                <span>Click Here to Catch the Halo</span>
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import Congratulation from "./../Components/Congratulation";

import "./../Styles/game.scss";

export default {
    name: "play",
    components: {
        Congratulation
    },
    data() {
        return {
            startGame: false,
            gameWon: false,
            gameLost: false,
            output: null,
        };
    },
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
                movingRing >= staticRing - 25 &&
                movingRing <= staticRing + 25
            ) {
                console.log("congratulation");
                this.startGame = false
                this.gameWon = true
                this.gameLost = false
            } else {
                console.log("try again");
                this.startGame = false
                this.gameWon = false
                this.gameLost = true
            }
        },
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
    },
};
</script>
