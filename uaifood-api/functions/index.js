const
 functions = require('firebase-functions'),
 admin = require('firebase-admin'),
 express = require('express'),
 cors = require('cors')

var serviceAccount = require('./config/accountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://uaifood-909ae.firebaseio.com'
})

const db = admin.firestore()
var db2 = admin.database();

const app = express();
app.use(cors({ origin: true }));


app.get('/home', (req, res) => {
  return res.status(200).send('Hello World! :}')
});


app.get('/', (req, res) => {
	return res.status(200).send('Welcome to UAi food Sô')
})

// GET ALL ITENS
app.get('/api/v1/items', (req, res) => {
	(async()=>{
		try {
			const itensRef = db.collection('items')
			let response = [];
			const snapshot = await itensRef.get()
			.then(doc=>{
				doc.empty ? res.status(200).send({message_warn: 'Não foi encontrado nenhum ítem!'}) : 
				doc.forEach(doc => {
					const item = {
						id: doc.id,
						nome: doc.data().item.name,
						img: doc.data().item.image,
						preco: doc.data().item.price,
						descricao: doc.data().item.description,
						culinaria: doc.data().item.origin
					}
				  response.push(item)
				});
				return res.status(200).send(response);
			})
		}catch(e){
			console.log(e)
			return res.status(500).send(e)
		}
	})()
})

// GET ALL RESTAURANTS
app.get('/api/v1/restaurants', (req, res) => {
	(async()=>{
		try {
			const restaurantsRef = db.collection('restaurants')
			let response = [];
			const snapshot = await restaurantsRef.get()
			.then(doc=>{
				doc.empty ? res.status(200).send({message_warn: 'Não foi encontrado nenhum restaurante!'}) : 
				doc.forEach(doc => {
					const restaurant = {
						id: doc.id,
						name: doc.data().restaurant.name,
						email: doc.data().restaurant.email,
						telephone: doc.data().restaurant.telephone,
						logo: doc.data().restaurant.logo,
						city: doc.data().restaurant.address.city,
						lat: doc.data().restaurant.address.latitude,
						log: doc.data().restaurant.address.longitude,
						state: doc.data().restaurant.address.state,
						telephone: doc.data().restaurant.telephone,
						culinaria: doc.data().origin,
						itens: doc.data().itens
					}
				  response.push(restaurant)
				});
				return res.status(200).send(response);
			})
		}catch(e){
			console.log(e)
			return res.status(500).send(e)
		}
	})()
})


// GET ITEM
app.get('/api/v1/items/:item_id', (req, res) => {
	(async ()=> {
		try {
			const itemRef = db.collection('items').doc(req.params.item_id)
			let item = await itemRef.get()
			  .then(doc=>{
				 !doc.exists ? res.status(400).send({message_warn: 'Este ítem não existe'}) : res.status(200).send(doc.data())
			  }).catch(e=>{res.status(500).send({message_error: `Error ao tentar consultar ítem: ${e}`})})
		}catch(e) {
			console.log(e)
			return res.status(500).send(e)
		}

	})();
})
// NEW ITEM
app.post('/api/v1/register/item', (req, res) => {
  (async () => {
    try {
      await db.collection('items').doc('/' + req.body.id + '/')
        .create({
        	item: {
        	  name: req.body.name,
        	  description: req.body.description,
        	  origin: req.body.origin,
        	  price: req.body.price,
        	  image: req.body.img,
        	  url: req.body.url,
        	  nutrition: { calories: req.body.nutrition.calories, sugar: req.body.nutrition.sugar, protein: req.body.nutrition.protein, fiber: req.body.nutrition.fiber, carbohydrate: req.body.nutrition.carbohydrate, sodium: req.body.nutrition.sodium },
        	  createdAt: req.body.created_at,
        	  updateAt: req.body.update_at
        	}
        }).catch(()=>{return res.status(400).send({message_warn: 'Este ítem já existe!'})})
        return res.status(201).send({message_success: 'Ítem salvo com sucesso!'})
    } catch (e) {
      console.log(e)
      return res.status(500).send(e)
    }
  })()
});

// UPDATE ITEM
app.put('/api/v1/update/items/:item_id', (req, res) => {
	(async()=> {
		try {
			const upItemRef = db.collection('items').doc(req.params.item_id)
			await upItemRef.update({
				item: req.body.item
			})
			return res.status(201).send({message_success: 'Ítem atualizado com sucesso!'})
		} catch(e) {
			console.log(e)
			return res.status(500).send(e)
		}
	})
})

// FILTER ITEM FROM ORIGIN 
app.get('/api/v1/items/origin/:origin', (req, res) => {
	(async ()=> {
		try {
			let response = [];
			let getItensRef = db.collection('items');
			let query = getItensRef.where('item.origin', '==', req.params.origin).get()
			.then(menu=>{
				menu.empty ? res.status(200).send({message_warn: 'Nenhum ítem cadastrado para esta culinária!'}) : 
				menu.forEach(doc => {
					const item = {
						id: doc.id,
						nome: doc.data().item.name,
						img: doc.data().item.image,
						preco: doc.data().item.price
					}
					response.push(item)
				})
				return res.status(200).send(response);
			})
		}catch(e) {
			console.log(e)
			return res.status(500).send(e)
		}
	})();
})




// FILTER RESTAURANT FROM ORIGIN and STATE
app.get('/api/v1/restaurants/origin/:origin_t1/:state', (req, res) => {
	(async ()=> {
		try {
			let response = [];
			let getRestaurantsRef = db.collection('restaurants');
			
			let query = getRestaurantsRef.where('restaurant.origin', 'array-contains', req.params.origin_t1).where('restaurant.address.state', '==', req.params.state).get()
			.then(menu=>{
				menu.empty ? res.status(200).send({message_warn: 'Nenhum restaurante cadastrado para esta culinária!'}) : 
				menu.forEach(doc => {
					const restaurant = {
						id: doc.id,
						nome: doc.data().restaurant.name,
						telefone: doc.data().restaurant.telephone,
						email: doc.data().restaurant.email
					}
					response.push(restaurant)
				})
				return res.status(200).send(response)
			})
		}catch(e) {
			console.log(e)
			return res.status(500).send(e)
		}
	})();
})

// GET RESTAURANT FROM ORIGIN 
app.get('/api/v1/restaurants/origin/:origin_t1', (req, res) => {
	(async ()=> {
		try {
			let response = [];
			let getRestaurantsRef = db.collection('restaurants');
			let query = getRestaurantsRef.where('origin', 'array-contains', req.params.origin_t1).get()
			.then(menu=>{
				menu.empty ? res.status(200).send({message_warn: 'Nenhum restaurante cadastrado para esta culinária!'}) : 
				menu.forEach(doc => {
					const restaurant = {
						id: doc.id,
						nome: doc.data().restaurant.name,
						telefone: doc.data().restaurant.telephone,
						email: doc.data().restaurant.email
					}
					response.push(restaurant)
				})
				return res.status(200).send(response);
			})
		}catch(e) {
			console.log(e)
			return res.status(500).send(e)
		}
	})();
})







// GET ALL ORIGINS
app.get('/api/v1/origins', (req, res) => {
	(async()=>{
		try {
			let response = [];
			await db.collection('restaurants').doc('75')
			 .collection('origins').get()
			.then(doc=>{
				doc.empty ? res.status(200).send({message_warn: 'Não foi encontrado nenhum ítem!'}) : 
				doc.forEach(doc => {
				  response.push(doc.data().name)
				});
			})
				return res.status(200).send(response);
		}catch(e){
			console.log(e)
			return res.status(500).send(e)
		}
	})()
})





// GET RESTAURANT
app.get('/api/v1/restaurants/:restaurant_id', (req, res) => {
	(async ()=> {
		try {

		await db.collection('restaurants').doc(req.params.restaurant_id)
			 .collection('origins').get()
			.then(async(doc)=>{
				doc.empty ? console.log('lista de origins vazia') : 
				doc.forEach(doc => {
				  response.push(doc.data().name)
				});
				await db.collection('restaurants').doc(req.params.restaurant_id)
				.update({origin: response})
			}).catch((e)=> {return console.log({message_error: `Erro ao tentar pegar restaurante ID: ${req.params.restaurant_id}\n\nError: ${e}`});})



			const restaurantRef = db.collection('restaurants').doc(req.params.restaurant_id)
			let restaurant = await restaurantRef.get()
			  .then(doc=>{
				 !doc.exists ? res.status(200).send({message_warn: 'Este restaurante não existe'}) : res.status(200).send(doc.data())
			  }).catch(e=>{res.status(400).send({message_error: `Error ao tentar consultar restaurant: ${e}`})})
		}catch(e) {
			console.log(e)
			return res.status(500).send(e)
		}
	})();
})
// NEW RESTAURANT
app.post('/api/v1/register/restaurant', (req, res) => {
  (async () => {
    try {
      await db.collection('restaurants').doc('/' + req.body.id + '/')
        .create({
          restaurant: {
        	name: req.body.name,
        	telephone: req.body.telephone,
        	email: req.body.email,
        	address: { latitude: req.body.location.latitude, longitude: req.body.location.longitude, postalCode: req.body.location.postalCode, elevation: req.body.location.elevation, state: req.body.location.state, city: req.body.location.city },
        	origin: req.body.origin,
        	itens: req.body.itens,
        	logo: req.body.logo,
        	slogan: req.body.slogan,
        	createdAt: req.body.created_at,
        	updateAt: req.body.update_at
          }
        })
        .catch(()=>{return res.status(400).send({message_warn: 'Este restaurante já existe!'})})
        return res.status(201).send({message_success: 'Restaurante salvo com sucesso!'})
    } catch (e) {
      console.log(e)
      return res.status(500).send(e)
    }
  })()
});

// NEW ITENS TO RESTAURANT
app.post('/api/v1/add/itens/restaurants/:restaurant_id', (req, res) => {
  (async () => {
    try {
		let responseItens = [];
     	await db.collection('restaurants').get()
     	.then(async(doc)=>{
			doc.empty ? res.status(200).send({message_warn: 'Não foi possível adicionar ítens! Provavelmente este restaurante não existe'}) : 

			await db.collection('restaurants')
	     	.doc(req.params.restaurant_id)
	     	 .collection('itens').doc('/' + req.body.id + '/')
		    	.create({  
		        	name: req.body.name,
		        	price: req.body.price,
		        	origin: req.body.origin,
		        	description: req.body.description,
		        	img: req.body.img,
		        	url: req.body.url,
		        	nutrition: { 
				  		calories: req.body.nutrition.calories,
				  		sugar: req.body.nutrition.sugar,
				  		sodium: req.body.nutrition.sodium,
				  		carbohydrate: req.body.nutrition.carbohydrate,
				  		protein: req.body.nutrition.protein,
				  		fiber: req.body.nutrition.fiber
				  	},
		        	created_at: req.body.created_at
		      }).catch(e=>{res.status(400).send({message_info: `Não foi possível adicionar ${req.body.name} no cardápio, provavelmente já existe!`})});
			await db.collection('restaurants').doc(req.params.restaurant_id)
			 .collection('origins').doc('/' + req.body.origin + '/')
			  .create({name: req.body.origin}).catch(()=>{console.log({message_error: 'Error ao tentar salvar tipos de cozinha'})});
				await db.collection('restaurants').doc(req.params.restaurant_id)
				  .collection('itens').get()
					.then(async(doc)=>{
						doc.empty ? res.status(200).send({message_warn: 'Não existe cardápio para este restaurante!'}) : 
						doc.forEach(doc => {
							const item = {
								id: doc.id,
								name: doc.data().name,
								price: doc.data().price,
								origin: doc.data().origin,
								description: doc.data().description,
								img: doc.data().img,
								url: doc.data().url,
								nutrition: {
									calories: doc.data().nutrition.calories,
									sugar: doc.data().nutrition.sugar,
									sodium: doc.data().nutrition.sodium,
									carbohydrate: doc.data().nutrition.carbohydrate,
									protein: doc.data().nutrition.protein,
									fiber: doc.data().nutrition.fiber
								}
							}
						  responseItens.push(item)
						});
						await db.collection('restaurants').doc(req.params.restaurant_id)
						.update({itens: responseItens})
					}).catch((e)=> {return;})

	  		})
     			let responseOrigins = [];
				await db.collection('restaurants').doc(req.params.restaurant_id)
				 .collection('origins').get()
				.then(async(doc)=>{
					doc.empty ? res.status(200).send({message_warn: 'Não foi encontrado nenhuma origem!'}) : 
					doc.forEach(doc => {
					  responseOrigins.push(doc.data().name)
					});
					await db.collection('restaurants').doc(req.params.restaurant_id)
					.update({origin: responseOrigins})
				}).catch((e)=> {return;})
			res.status(201).send({message: `${req.body.name} foi adicionado ao seu cardápio!`})
    } catch (e) {
      console.log(e)
      return res.status(500).send(e)
    }
  })()
});




// UPDATE ITEM
app.put('/api/v1/update/restaurant/:restaurant_id', (req, res) => {
	(async()=> {
		try {
			const upRestaurantRef = db.collection('restaurants').doc(req.params.restaurant_id)
			await upRestaurantRef.update({
				restaurant: req.body.restaurant
			})
			return res.status(200).send({message: 'Restaurante atualizado com sucesso!'})
		} catch(e) {
			console.log(e)
			return res.status(500).send(e)
		}
	})
})



exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });