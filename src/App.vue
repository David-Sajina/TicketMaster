<template>
	<div id="app">
		<v-app id="inspire">
			<v-layout
				row
				justify-center
				style="padding-top: 10px; padding-bottom: 10px"
			>
				<v-toolbar
					style="margin-left: 10px"
					app
					dark
					color="#616a76"
					class="hidden-xs-and-down"
					><v-btn fab large plain @click.stop="drawer = !drawer">
						<v-icon>mdi-menu</v-icon>
					</v-btn>
					<v-toolbar-title
						style="
							margin-left: 20px;
							font-weight: 700;
							font-size: 35px;
							text-shadow: 2px 2px #000000;
						"
						><span style="color: #bfff00">T</span>icket<span
							style="color: #bfff00"
							>M</span
						>aster</v-toolbar-title
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
						<v-list-item-title>David Šajina</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-divider></v-divider>

				<v-list dense>
					<v-list-item
						v-for="item in items"
						:key="item.title"
						link
						:to="item.link"
					>
						<v-list-item-icon>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-icon>

						<v-list-item-content>
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-navigation-drawer>

			<v-main>
				<router-view />
			</v-main>
		</v-app>
	</div>
</template>

<script type="text/babel">
	export default {
		data() {
			return {
				drawer: null,
				items: [
					{ title: "Home", icon: "mdi-home", link: "/" },
					{ title: "About", icon: "mdi-help", link: "/about" },
				],
			};
		},
		methods: {
			openGithub() {
				window.open("https://github.com/disjfa/vuetify-sidebar-template");
			},
		},
	};
</script>

<style>
	.intro {
		display: flex;
		justify-content: center;
		margin: 4rem 0;
	}
	a {
		color: inherit;
	}

	.text-center {
		text-align: center;
	}
</style>
