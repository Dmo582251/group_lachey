class CreateJoinTable < ActiveRecord::Migration
  def change
    create_join_table :conversations, :messages do |t|
       
    end
  end
end
