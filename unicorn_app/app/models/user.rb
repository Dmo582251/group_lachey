class User < ActiveRecord::Base
	has_many :projects
	validates :username, presence: true, uniqueness: true
	has_secure_password
	validates :first_name, :last_name, :email, :img_url, :bio, :education, :technology, :location, presence: true

	def password=(pword)
		return if pword.blank?
		self.password_digest = BCrypt::Password.create(pword)
	end

end


 