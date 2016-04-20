class CreateListItems < ActiveRecord::Migration
  def change
    create_table :list_items do |t|
      t.string :title
      t.string :location
      t.string :date
      t.string :description
      t.boolean :completed
      t.integer :list_id

      t.timestamps null: false
    end
  end
end
