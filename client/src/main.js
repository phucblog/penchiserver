import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'


new Vue({
	el: '#app',
	components: {
		app: App,
		home: Home
	}
	// render: h => h(App)
})
