class MeetupsController < ApplicationController

	def index
		render layout: 'application', text: ''
	end

	def display
		search_results = Meetup.search_events(10018) #should have user zip
		p search_results
		render json: search_results
	end


end