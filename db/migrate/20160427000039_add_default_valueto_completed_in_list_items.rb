class AddDefaultValuetoCompletedInListItems < ActiveRecord::Migration
  def change
    change_column :list_items, :completed, :boolean, :default => false
  end
end
