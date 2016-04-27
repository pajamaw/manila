class AddLongitudeToListItem < ActiveRecord::Migration
  def change
      add_column :list_items, :longitude, :real
  end
end
