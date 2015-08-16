class Conversation < ActiveRecord::Base
	has_many :messages

	validates :title, presence: true
end
