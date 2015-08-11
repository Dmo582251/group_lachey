class Project < ActiveRecord::Base
	belongs_to :user

	validates :title, :description, :technology, presence: true
end
