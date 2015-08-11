class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.text :technology
      t.references :user_id


      t.timestamps null: false
    end
  end
end
