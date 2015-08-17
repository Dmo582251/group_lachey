class ProjectsController < ApplicationController

	def index
		@projects = Project.all
		project_array = []
		@projects.each do |project|
			if(project.user)
			project_array.push({
				project: project,
				username: project.user.username,
				first_name: project.user.first_name
				})
			end
		end
		render json: project_array
	end

	def show
		@project = Project.find(params[:id])
		render json: @project
	end

	def new
		@project = Project.new
	end

	def create
		@project = Project.create(project_params)
		# @project.user_id = session[:current_user_id]
		render json: @project
	end

	def edit
		@project = Project.find(params[:id])
		render json: @project

	end

	def update
		@project = Project.find(params[:id])
		@project.update(project_params)
		render json: @project
	end

	def destroy
		@project = Project.find(params[:id])
		@project.destroy
		render json: @project
	end

	private

		def project_params
			params.require(:project).permit(:title, :description, :technology)
		end
end