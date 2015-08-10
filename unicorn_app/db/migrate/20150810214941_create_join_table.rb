class CreateJoinTable < ActiveRecord::Migration
  def change
    create_join_table :conversations, :messages do |t|
       t.integer :conversation_id
       t.integer :message_id
    end
  end
end
