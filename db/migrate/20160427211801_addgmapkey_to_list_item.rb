class AddgmapkeyToListItem < ActiveRecord::Migration
  def change
    add_column :list_items, :gmapkey, :real
  end
end
