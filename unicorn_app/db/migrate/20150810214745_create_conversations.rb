class CreateConversations < ActiveRecord::Migration
  def change
    create_table :conversations do |t|
      t.string :title
      t.references :message

      t.timestamps null: false
    end
  end
end
