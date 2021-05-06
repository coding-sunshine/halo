<template>
    <div class="halo_intro">
        <div v-if="error != ''" class="alert alert-danger" role="alert">
            {{ error }}
        </div>
        <div v-if="avatar_error != ''" class="alert alert-warning" role="alert">
            {{ avatar_error }}
        </div>
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

            <form @submit="formSubmit" enctype="multipart/form-data">
                <div class="upload_avtar" @click="$refs.file_select.click()">
                    <div class="avtar_img">
                        <img :src="preview_avatar" v-if="preview_avatar" />
                    </div>
                </div>

                <input
                    type="file"
                    class="d-none"
                    ref="file_select"
                    v-on:change="onFileChange"
                />

                <button type="submit" class="custom-button">
                    <span>Upload Picture</span>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "home",
    data() {
        return {
            file: "",
            success: "",
            error: "",
            preview_avatar: "",
        };
    },
    computed: {
        ...mapGetters(["avatar_error"]),
    },
    mounted() {
        console.log(this.avatar_error);
    },
    methods: {
        onFileChange(e) {
            this.file = e.target.files[0];
            if(this.file) {
                this.error = "";
                this.$store.dispatch('setAvatarError', "");
                this.preview_avatar = URL.createObjectURL(this.file);
            }
        },
        formSubmit(e) {
            e.preventDefault();
            let currentObj = this;
            if(this.file === "") {
                alert("Please select file!");
                return
            }
            const config = {
                headers: { "content-type": "multipart/form-data" },
            };

            let formData = new FormData();
            formData.append("file", this.file);

            axios
                .post("/api/fileUpload", formData, config)
                .then(function (response) {
                    currentObj.success = response.data.success;
                    currentObj.$store.dispatch(
                        "setAvatarPath",
                        response.data.file_path
                    );
                    currentObj.$router.push("play");
                })
                .catch(function (error) {
                    console.log("Something Went wrong!");
                    currentObj.error = error;
                });
        },
    },
};
</script>
