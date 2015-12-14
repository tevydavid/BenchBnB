class AddColumn < ActiveRecord::Migration
  def change
    change_table :benches do |t|
      t.integer :seating, null: false, default: 1
    end
  end
end
