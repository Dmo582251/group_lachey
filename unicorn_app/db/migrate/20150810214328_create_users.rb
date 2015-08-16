class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name 
      t.string :last_name
      t.string :username null: false
      t.string :password_digest null: false
      t.string :email null: false
      t.string :img_url
      t.text :bio
      t.text :education
      t.text :technology
      t.string :location 

      t.timestamps null: false
    end
  end
end
