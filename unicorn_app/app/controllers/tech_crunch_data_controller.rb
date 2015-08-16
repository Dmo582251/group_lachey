class TechCrunchDataController < ApplicationController
	include DataScrapingHelper

	def data_scrape
		data = scraped
		render json: {'articles' => data }
	end

end