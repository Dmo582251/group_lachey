	# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# Conversations:
convo1 = Conversation.create({

		title: "psql project ",
		message_id: 1
		})
convo2 = Conversation.create({
		title: "ruby on rails",
		message_id: 2
		})

mess1 = Message.create({
		content: "I would like to make a psql DB",
		user_id: 1,
		})
mess2 = Message.create({
		content: "Hi I like your project",
		user_id: 2,
		})
mess3 = Message.create({
		content: "so what?",
		user_id: 1,
		})
mess4 = Message.create({
		content: "i Don't want to work on your project, i hate you!",
		user_id: 2,
		})

#Dom Convos

#Seinfeld
convo3 = Conversation.create({
	title: "Help with Your Seinfeld App",
	message_id: 1
	})
mess5 = Message.create({
		content: "Hey I saw your ad and I think I would be the perfect fit to help with the Seinfeld App",
		user_id: 3,
		})
mess6 = Message.create({
		content: "Oh Perfect! Would you like to meet somewhere to figure everything out? / get details?",
		user_id: 1,
		})
mess7 = Message.create({
		content: "For sure! Lets meet at General assembly? it's 10 e 21st street at 12pm monday?",
		user_id: 3,
		})
mess8 = Message.create({
		content: "Sounds good to me! See you then.",
		user_id: 1,
		})

#Game of Thrones
convo4 = Conversation.create({
	title: "Daenery's website",
	message_id: 4
	})
mess9 = Message.create({
		content: "Hey I saw you were making a website for Kahleesi -- I dont know if you knew but shes my woman so I would love to help!",
		user_id: 4,
		})
mess10 = Message.create({
		content: "OH I didn't know that... then you can obviously help! Except shes my queen also",
		user_id: 3,
		})
mess11 = Message.create({
		content: "But I'm her King..",
		user_id: 4,
		})
mess12 = Message.create({
		content: "Okay Well whatever... So Do you want ot help or not?",
		user_id: 3,
		})
mess13 = Message.create({
		content: "Yas I do! see you at General assembly at 4:30pm tuesday!",
		user_id: 4,
		})
mess14 = Message.create({
		content: "KK!",
		user_id: 3,
		})


# Start of Creating Users:
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

# Dom created Users:
User.create({
	first_name: "Tyrion",
	last_name: "Lannister",
	username: "TheTyrMan",
	password: "123",
	email: "tyrionlanister@hotmail.com",
	img_url: "http://img3.wikia.nocookie.net/__cb20140616190514/gameofthrones/images/6/61/The_children_Tyrion_with_Bow_S4.png",
	bio: "I killed my father",
	education: "Lanister University",
	technology: "ruby rails, express, node.js, backbone, ruby, javascript, html, css",
	location: "10014"
})

User.create({
	first_name: "Khal",
	last_name: "Drogo",
	username: "Drogo",
	password: "123",
	email: "drogo@hotmail.com",
	img_url: "https://s-media-cache-ak0.pinimg.com/236x/fd/c8/11/fdc811fd610a8884d67a04e54602c3a3.jpg",
	bio: "I am technically dead, but i live through my dragon who is a bamf and doesn't listen to his mother",
	education: "Being Pack Leader: aka none",
	technology: "HTML, CSS",
	location: "10003"
})

User.create({
	first_name: "Khal",
	last_name: "Drogo",
	username: "Drogo",
	password: "123",
	email: "drogo@hotmail.com",
	img_url: "https://s-media-cache-ak0.pinimg.com/236x/fd/c8/11/fdc811fd610a8884d67a04e54602c3a3.jpg",
	bio: "I am technically dead, but i live through my dragon who is a bamf and doesn't listen to his mother",
	education: "Being Pack Leader: aka none",
	technology: "HTML, CSS",
	location: "10003"
})

User.create({
	first_name: "Larry",
	last_name: "David",
	username: "LDman",
	password: "123",
	email: "LDavid11@yahoo.com",
	img_url: "https://pmcdeadline2.files.wordpress.com/2012/01/larrydavid__120112215630.jpg",
	bio: "I created Seinfeld and I have a show on  HBO called Curb You Enthusiam. It is a very great show and I think that you would enjoy it. ",
	education: "University of Mayland",
	technology: "Css, Html, javascript, node.js, angular, ruby, ruby rails, python",
	location: "1121"
})

# Dom Projects
Project.create({
	title: "Helping Daenery make a website!",
	description: "I need help creating a website for Daenery so that she can get enough followers to head over to Westero's",
	technology: "I would like an expert in HTML, CSS, ruby and backbone",
	user_id: 3
	})

Project.create({
	title: "Creating an App -- Need Help!",
	description: "I need help creating an app. I have never made one before and I would love to work with someone.",
	technology: "Whoever has any experience creating an app",
	user_id: 1
	})

Project.create({
	title: "Back End Difficulties",
	description: "I am an HTML CSS expert but I have no idea how to use backbone, ruby, or ruby rails... Contact me and ill give you idea information",
	technology: "I would like an expert backbone, ruby rails, ruby postgreSQL",
	user_id: 2
	})

Project.create({
	title: "Make a Website that locates my people",
	description: "I would like to make a website to track where my group is and where they have most recently checked in. Who would like to help me?",
	technology: "Any amount of Experience in javascript, node, etc.",
	user_id: 5
	})

Project.create({
	title: "Creating a Seinfeld App",
	description: "I am making an app that connects people to their favorite episode of curb your enthusiam or seinfeld",
	technology: "I would like an someone who is excellent at HTML and CSS",
	user_id: 6
	})


	convo1.messages.push(mess1, mess4)
	convo2.messages.push(mess2, mess3)
	convo3.messages.push(mess5, mess6, mess7, mess8)
	convo4.messages.push(mess9, mess10, mess11, mess12, mess13, mess14)


