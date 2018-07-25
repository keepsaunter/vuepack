import axios from 'axios';
export default {
	getdataTest: context => {
		return axios.get('http://localhost:666/test.php')
		// axios.get('http://localhost:666/test.php').then(res => {
		// 	console.log(res);
		// })
	}
}
