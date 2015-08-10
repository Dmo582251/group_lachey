class Conversation < ActiveRecord::Base
	has_and_belongs_to_many :messages

	validates :title, presence: true
end
