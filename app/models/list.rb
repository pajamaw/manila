class List < ActiveRecord::Base
  serialize :title, :user_id

  has_many :list_items
  belongs_to :user
end
