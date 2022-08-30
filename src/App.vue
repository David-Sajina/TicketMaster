<template>
	<div id="">
		<v-app>
			<v-layout row style="padding-top: 10px; padding-bottom: 10px">
				<v-toolbar
					style="margin-left: 10px"
					dark
					color="#616a76"
					class="hidden-xs-and-down"
					><v-btn fab large plain @click.stop="drawer = !drawer">
						<v-icon>mdi-menu</v-icon>
					</v-btn>
					<router-link style="text-decoration: none" to="/"
						><v-toolbar-title
							style="
								margin-left: 20px;
								font-weight: 700;
								font-size: 35px;
								color: white;
								text-shadow: 2px 2px #000000;
							"
							><span style="color: #bfff00">T</span>icket<span
								style="color: #bfff00"
								>M</span
							>aster</v-toolbar-title
						></router-link
					>
				</v-toolbar>
			</v-layout>

			<v-navigation-drawer
				style="padding-top: 5px"
				v-model="drawer"
				absolute
				temporary
			>
				<v-list-item>
					<v-list-item-avatar>
						<v-img
							src="https://avatars.githubusercontent.com/u/57251489?v=4"
						></v-img>
					</v-list-item-avatar>

					<v-list-item-content>
						<v-list-item-title v-if="user">{{
							user.username
						}}</v-list-item-title>
						<v-list-item-title v-if="!user"> Please Login! </v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-divider></v-divider>

				<v-list dense>
					<div v-for="item in items" :key="item.title">
						<v-list-item
							link
							v-if="user && item.logedIn"
							:to="item.link"
							@click="menuActionClick(item.action)"
						>
							<v-list-item-icon>
								<v-icon>{{ item.icon }}</v-icon>
							</v-list-item-icon>

							<v-list-item-content>
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item-content> </v-list-item
						><v-list-item
							link
							v-else-if="!user && !item.logedIn"
							:to="item.link"
							@click="menuActionClick(item.action)"
						>
							<v-list-item-icon>
								<v-icon>{{ item.icon }}</v-icon>
							</v-list-item-icon>

							<v-list-item-content>
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</div>
				</v-list>
			</v-navigation-drawer>
			<v-main>
				<router-view />
			</v-main>
		</v-app>
	</div>
</template>

<script>
	import { mapMutations, mapGetters, mapActions } from "vuex";

	export default {
		data() {
			return {
				drawer: null,
				te: "",
				t: [],
				items: [
					{ title: "Home", icon: "mdi-home", link: "/", logedIn: true },
					{
						title: "Ticket",
						icon: "mdi-ticket",
						link: "/ticket",
						logedIn: true,
					},
					{ title: "About", icon: "mdi-help", link: "/about" },
					{ title: "Login", icon: "mdi-login", link: "/login" },
					{
						title: "Logout",
						icon: "mdi-logout",
						action: "logout",
						logedIn: true,
					},
				],
			};
		},
		methods: {
			...mapActions({ getUserData: "getUserData" }),
			...mapMutations({ logout: "logout" }),
			menuActionClick(action) {
				if (action === "logout") {
					this.logout();
					localStorage.clear("token");
					this.$router.push("/");
				}
			},
		},
		computed: {
			...mapGetters({ user: "user" }),
		},
		mounted() {
			this.getUserData();
		},
	};
</script>

<style>
	a {
		color: inherit;
	}
</style>
