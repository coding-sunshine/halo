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
            <div class="float-left width-full" style="position: relative">
                <div class="alert alert-warning try-again" style="position: relative" role="alert">
                    Try Again! Better luck next time!
                </div>
            </div>

            <div class="upload_avtar margin0">
                <div class="avtar_img">
                    <img :src="avatar" />
                </div>
            </div>

            <router-link class="custom-button" :to="{ name: 'game' }"
                ><span>Play Again</span></router-link
            >
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "try-again",
    computed: {
        ...mapGetters(["avatar"]),
    },
};
</script>
