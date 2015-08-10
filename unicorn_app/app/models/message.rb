class Message < ActiveRecord::Base

	belongs_to :user
	has_and_belongs_to_many :conversations

	validates :content, presence: true
end
