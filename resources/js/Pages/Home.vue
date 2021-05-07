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
                <div v-if="avatar_error != ''" class="alert alert-warning home-wrning" role="alert">
                    {{ avatar_error }}
                </div>
            </div>
            <div class="float-left width-full" style="position: relative">
                <div v-if="error != ''" class="alert alert-warning home-wrning" role="alert">
                    {{ error }}
                </div>
            </div>
            <form class="width-full" @submit="formSubmit" enctype="multipart/form-data">
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
        <div id="myModal" class="modal" v-show="dialog">
            <!-- Modal content -->
            <div class="modal-content">
                <vue-cropper
                    class="cropper-section"
                    v-show="selectedFile"
                    ref="cropper"
                    :src="selectedFile"
                    alt="Source Image"
                    :cropBoxResizable="false"
                    :aspectRatio="1/1"
                    :initialAspectRatio="1/1"
                >
                </vue-cropper>
                <div class="crop-button-wrapper">
                <button class="crop-cancle-button" @click="hideDialog">Cancel</button>
                <button class="crop-button" @click="saveImage">Crop</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import "./../Styles/modal.css";

export default {
    name: "home",
    components: { VueCropper },
    data() {
        return {
            dialog: false,
            file: "",
            success: "",
            error: "",
            preview_avatar: "",
            selectedFile: "",
            cropedImage: "",
            mime_type: "",
        };
    },
    computed: {
        ...mapGetters(["avatar_error"]),
    },
    mounted() {
        console.log(this.avatar_error);
    },
    methods: {
        hideDialog(){
            this.dialog = false;
            this.file = null;
            this.preview_avatar = null;
            this.selectedFile = null;
        },
        onFileChange(e) {
            this.file = e.target.files[0];
            if(this.file) {
                this.error = "";
                this.$store.dispatch('setAvatarError', "");
                this.preview_avatar = URL.createObjectURL(this.file);
            } else {
                return;
            }

            if (typeof FileReader === "function") {
                this.dialog = true;
                const reader = new FileReader();
                reader.onload = (event) => {
                    this.selectedFile = event.target.result;
                    this.$refs.cropper.replace(this.selectedFile);
                };
                reader.readAsDataURL(this.file);
            } else {
                alert("Sorry, FileReader API not supported");
            }
        },

        saveImage() {
            this.cropedImage = this.$refs.cropper.getCroppedCanvas().toDataURL()
            this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
                this.preview_avatar = this.cropedImage
                this.dialog = false;
            }, this.mime_type)
        },
        formSubmit(e) {
            e.preventDefault();
            let currentObj = this;
            if (this.file === "" || !this.file) {
                alert("Please select file!");
                return;
            }
            const config = {
                headers: { "content-type": "multipart/form-data" },
            };

            this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
                const formData = new FormData()
                formData.append('file', blob, 'name.jpeg')
                axios.post("/api/fileUpload", formData, config)
                    .then((response) => {
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
                    })
            }, this.mime_type)
        },
    },
};
</script>
