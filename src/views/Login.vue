<template>
	<v-content>
		<v-container fluid fill-height>
			<v-layout align-center justify-center>
				<v-flex xs12 sm8 md4>
					<v-card class="elevation-12">
						<v-toolbar dark color="#616a76">
							<v-toolbar-title>Login</v-toolbar-title>
						</v-toolbar>
						<v-card-text>
							<v-form>
								<v-text-field
									prepend-icon="mdi-account"
									name="login"
									label="Username"
									v-model="username"
									type="text"
									color="blue-grey darken-4"
								></v-text-field>
								<v-text-field
									id="password"
									prepend-icon="mdi-lock"
									name="password"
									label="Password"
									v-model="password"
									type="password"
									color="blue-grey darken-4"
								></v-text-field>
							</v-form>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<!-- to="/" -->
							<v-btn color="#bfff00" @click="getTruth"
								>Login<v-icon>mdi-check-circle-outline</v-icon></v-btn
							>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</v-content>
</template>

<script>
	import axios from "axios";
	import { mapMutations } from "vuex";
	import { mapActions } from "vuex";

	export default {
		name: "Login",
		data() {
			return {
				username: "",
				password: "",
			};
		},

		methods: {
			...mapMutations(["setUser", "setToken"]),
			...mapActions({ getUserData: "getUserData" }),

			async getTruth() {
				try {
					const temp = await axios.post(`http://localhost:5000/login`, {
						username: this.username,
						password: this.password,
					});
					const data = await temp.data;
					localStorage.setItem("token", data.token);
					this.setToken(this.token);

					this.getUserData().then(() => {
						this.$router.push("/ticket");
						this.$toast.success("Successfully logged in", {
							position: "bottom-right",
							timeout: 5000,
							closeOnClick: true,
							pauseOnFocusLoss: true,
							pauseOnHover: true,
							draggable: true,
							draggablePercent: 0.6,
							showCloseButtonOnHover: false,
							hideProgressBar: true,
							closeButton: "button",
							icon: true,
							rtl: false,
						});
					});

					console.log("data", temp.data);
				} catch (error) {
					this.$toast.error(error.response.data.error, {
						position: "top-center",
						timeout: 5000,
						closeOnClick: true,
						pauseOnFocusLoss: true,
						pauseOnHover: true,
						draggable: true,
						draggablePercent: 0.6,
						showCloseButtonOnHover: false,
						hideProgressBar: true,
						closeButton: "button",
						icon: true,
						rtl: false,
					});
				}
			},
		},
	};
</script>

<style></style>
