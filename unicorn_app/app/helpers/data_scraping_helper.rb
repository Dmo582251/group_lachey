require 'nokogiri'
require 'open-uri'

module DataScrapingHelper
	def scraped
		dataArr = []
		url = 'http://techcrunch.com/startups/'

		data = Nokogiri::HTML(open(url))

		startups = data.css('.block-content')

		startups.each do |startup|
			tempObj = {}
			tempObj['post-title'] = startup.at_css('.post-title').text  
			tempObj['byline'] = startup.at_css('.byline').text    
		    tempObj['excerpt'] = startup.at_css('.excerpt').text 
		    tempObj['read-more'] = startup.at_css('.read-more')[:href]
		    dataArr.push(tempObj)  
		end
		return dataArr
	end
end

