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
									label="Login"
									v-model="username"
									type="text"
								></v-text-field>
								<v-text-field
									id="password"
									prepend-icon="mdi-lock"
									name="password"
									label="Password"
									v-model="password"
									type="password"
								></v-text-field>
							</v-form>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<!-- to="/" -->
							<v-btn color="primary" @click="getTruth"
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
	export default {
		name: "Login",
		data() {
			return {
				username: "",
				password: "",
				all: [],
				help: 0,
			};
		},
		methods: {
			async getTruth() {
				const temp = await axios.get(`http://localhost:5000/${this.username}`);
				console.log(temp.data.username);
				if (temp.data.username) {
					alert(temp.data.username + " " + temp.data.password);
				}
			},
		},
	};
</script>

<style></style>
