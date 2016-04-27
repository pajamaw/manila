class AddLatitudeToListItem < ActiveRecord::Migration
  def change
    add_column :list_items, :latitude, :real
  end
end
