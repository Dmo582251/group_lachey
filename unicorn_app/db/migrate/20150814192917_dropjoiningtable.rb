class Dropjoiningtable < ActiveRecord::Migration
  def change
  	drop_table :conversations_messages
  end
end
