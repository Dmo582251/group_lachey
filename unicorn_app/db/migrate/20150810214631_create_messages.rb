class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.text :content
      t.references :user
      t.references :conversation

      t.timestamps null: false
    end
  end
end
