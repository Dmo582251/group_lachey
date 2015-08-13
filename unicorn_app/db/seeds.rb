# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

convo1 =Conversation.create({
		title: "psql project ",
		message_id: 1
		})
convo2 =Conversation.create({
		title: "ruby on rails",
		message_id: 2
		})

mess1 = Message.create({
		content: "I would like to make a psql DB",
		user_id: 1,
		})
mess2 =Message.create({
		content: "Hi I like your project",
		user_id: 2,
		})
mess3 = Message.create({
		content: "so what?",
		user_id: 1,
		})
mess4 =Message.create({
		content: "i Don't want to work on your project, i hate you!",
		user_id: 2,
		})

User.create({
	first_name: "Danny",
	last_name: "B",
	username: "Dmortz",
	password: "123",
	email: "dmortz123@gmail.com",
	img_url: "http://mcgrelio.com/gallery/var/albums/vacanze/capodanno2004/capodanno2004_bluesteel/derek.jpg?m=1286923065",
	bio: "hi I like psql and rails",
	education: "school of hard knocks",
	technology: "javascript, ruby, node.js",
	location: "New York"
	})

User.create({
	first_name: "John",
	last_name: "V",
	username: "John1",
	password: "432",
	email: "jvon@gmail.com",
	img_url: "http://files.shandymedia.com/styles/page/s3/images/photos/hollyscoop/beiber-main.jpg",
	bio: "pizza pasta and coding",
	education: "general assembly",
	technology: "ruby express ",
	location: "New York"
	})

convo1.messages.push(mess1, mess4)
convo2.messages.push(mess2, mess3)