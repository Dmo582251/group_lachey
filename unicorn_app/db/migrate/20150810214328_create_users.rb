class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :img_url
      t.text :bio
      t.text :education
      t.text :technology
      t.string :location

      t.timestamps null: false
    end
  end
end
