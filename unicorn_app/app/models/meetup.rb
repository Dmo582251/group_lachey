class Meetup

# meetup key 7046531c1d56727b2c2c3010426c15
API_STRING ='https://api.meetup.com/2/open_events?key=7046531c1d56727b2c2c3010426c15&sign=true&photo-host=public&category=34&radius=5&page=20&zip=';

# working --- https://api.meetup.com/2/open_events?key=7046531c1d56727b2c2c3010426c15&sign=true&photo-host=public&zip=10018&category=34&radius=5&page=20
	def self.search_events(zip)
		userZip = zip
		query_string = [API_STRING, userZip].join('')
		results = HTTParty.get(query_string)
		return results
	end

end