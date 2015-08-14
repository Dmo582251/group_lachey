class User < ActiveRecord::Base
	# validates :username, presence: true, uniqueness: true
	has_secure_password
	# validates :first_name, :last_name, :email, :img_url, :bio, :education, :technology, :location, presence: true
end

 