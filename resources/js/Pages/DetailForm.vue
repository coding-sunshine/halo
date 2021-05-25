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

            <p v-show="loader">Loading...</p>
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
                </ul>
            </p>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" v-model="name">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="email">
            <label for="company">Company Name</label>
            <select name="company" id="company" v-model="company">
                <option :value="key" v-for="(company, key) in companyList" :key="key">{{ company }}</option>
            </select>

            <button class="custom-button" @click="submit()" :disabled="loader">
                <span>Submit</span>
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "detail_form",
    data() {
        return {
            name: "",
            email: "",
            company: "",
            success: "",
            errors: [],
            loader: false,
            companyList: [],
        };
    },
    computed: {
        ...mapGetters(["avatar", "shared_photo"]),
    },
    mounted() {
        this.fetchCompanyList();
    },
    methods: {
        fetchCompanyList() {
            let currentObj = this;
            currentObj.loader = true;
            axios.get("/api/companyList")
                .then((response) => {
                    currentObj.loader = false;
                    currentObj.companyList = response.data
                }).catch(function (error) {
                    currentObj.loader = false;
                    currentObj.error = error;
                    console.log(error);
                    alert("Something Went wrong!");
                });
        },
        async submit() {
            this.errors = [];

            if (!this.name) {
                this.errors.push("Name required.");
            }
            if (!this.email) {
                this.errors.push("Email required.");
            } else if (!this.validEmail(this.email)) {
                this.errors.push("Valid email required.");
            }
            if (!this.company) {
                this.errors.push("Company Name required.");
            }

            if (!this.errors.length) {
                this.loader = true;
                const data = {
                    name: this.name,
                    email: this.email,
                    company: this.company,
                    profile_photo: this.avatar,
                    shared_photo: this.shared_photo,
                };
                let currentObj = this;
                axios
                    .post("/api/detailSubmit", data)
                    .then((response) => {
                        currentObj.success = response.data.success;
                        let validation = response.data.validation;

                        if (validation) {
                            Object.keys(validation).map(function (key) {
                                validation[key].forEach((element) => {
                                    currentObj.errors.push(element);
                                });
                            });
                        }

                        currentObj.loader = false;

                        if (currentObj.success) {
                            alert(currentObj.success);
                        }
                        currentObj.$store.dispatch(
                            "setAvatarPath",
                            ""
                        );
                        currentObj.$store.dispatch(
                            "setSharedPhotoPath",
                            ""
                        );
                        currentObj.$router.push("/");
                    })
                    .catch(function (error) {
                        currentObj.loader = false;
                        console.log(error);
                        alert("Something Went wrong!");
                    });
            }
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
    },
};
</script>
