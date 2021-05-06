<template>
    <div class="halo_intro">
        <img src="images/halo_bg.png" />
        <div class="halo_intro_info">
            <h1>
                Get the Halo. <br />
                Be the Value Champion.
            </h1>
            <p>Try Again! <br />
                Better luck next time!
            </p>

            <div class="upload_avtar">
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
