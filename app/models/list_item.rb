class ListItem < ActiveRecord::Base
  belongs_to :list
  belongs_to :user, foreign_key: :user_id
end
