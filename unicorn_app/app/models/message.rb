class Message < ActiveRecord::Base

	belongs_to :user
	belongs_to :conversations

	validates :content, presence: true
end
