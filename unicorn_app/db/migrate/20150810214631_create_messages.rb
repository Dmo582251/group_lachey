class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.text :content
      t.references :user_id
      t.references :conversation_id

      t.timestamps null: false
    end
  end
end
