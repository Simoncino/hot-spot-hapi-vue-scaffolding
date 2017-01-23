
module.exports = [
{
	method: 'POST',
	path: '/api/login',
	handler: function (request, reply) {
		const userReq = request.payload;
		console.log('userReq',userReq);
		let result = {
			success: false,
			message: 'NON sei loggato COJONE!!!!!!'
		};

		const users = require('./json_fake/userList.json');
		let user = null;
		for(let i = 0; i < users.length; i++){
			if(userReq.username == users[i].username && userReq.password == users[i].password){
				user = users[i];
				break;
			}
		}

		console.log('trovato', user);
		if(!user){
			user = require('./json_fake/user.json');
		}
		user.random = Math.floor((Math.random() * 10) + 1);

		result.success = true;
		result.message = 'Loggato correttamente dio FROCIO';
		result.user = user;

		reply(result);
	} 
}

,{
	method: 'GET',
	path: '/api/simpleList',
	handler: function (request, reply) {
		const lista = require('./json_fake/ruotaDelTempo.json');
		const result = {
			success: true,
			message: '',
			lista: lista
		};
		reply(result);
	}
}
,{
	method: 'GET',
	path: '/api/usersList',
	handler: function (request, reply) {
		let lista = require('./json_fake/userList.json');

		for(let i in lista){
			lista[i].random = Math.floor((Math.random() * 10) + 1);
		}

		const result = {
			success: true,
			message: '',
			lista: lista
		};
		reply(result);
	}
}
,{
	method: 'GET',
	path: '/api/user/{userid}',
	handler: function (request, reply) {
		const lista = require('./json_fake/userList.json');

		const id = request.params.userid;

		const users =  lista.filter(function(item){
			return item.id == id;
		});  

		let item = {};
		if(users && users.length){
			item = users[0];
		}

		const result = {
			success: true,
			message: '',
			item: item
		};
		reply(result);
	}
}


];