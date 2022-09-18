<template>
	<v-content>
		<v-container fluid fill-height>
			<v-layout align-center justify-center>
				<v-flex xs12 sm8 md4>
					<v-card class="elevation-12">
						<v-toolbar dark color="#616a76">
							<v-toolbar-title>Sign up</v-toolbar-title>
						</v-toolbar>
						<v-card-text>
							<v-form>
								<v-text-field
									prepend-icon="mdi-email"
									name="email"
									label="Email"
									v-model="email"
									type="email"
									color="blue-grey darken-4"
								></v-text-field>
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
							<v-btn color="#bfff00" @click="register"
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
	import { mapMutations, mapActions } from "vuex";

	export default {
		name: "Signup",
		data() {
			return {
				username: "",
				password: "",
				email: "",
			};
		},
		methods: {
			...mapMutations(["setUser", "setToken"]),
			...mapActions({ getUserData: "getUserData" }),
			async register() {
				try {
					const temp = await axios.post(`/register`, {
						username: this.username,
						password: this.password,
						email: this.email,
					});
					const data = temp.data;
					console.log(data, "aaaaaaa");

					this.setToken(data.token);
					this.setUser(data.user);
					localStorage.setItem("token", data.token);
					this.getUserData().then(() => {
						this.$router.push("/ticket");
					});

					console.log(temp.data);
				} catch (error) {
					alert(error.response.data.error);
				}
			},
		},
	};
</script>

<style></style>
