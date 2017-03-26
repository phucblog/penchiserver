import Vue from 'vue';
import App from './App.vue';
import Home from './Home.vue';
import FirstComponent from './components/First.components.vue';
import SecondComponent from './components/Second.component.vue';


new Vue({
	el: '#app',
	components: {
		app: App,
		home: Home,
		first: FirstComponent,
		second: SecondComponent
	}
});
