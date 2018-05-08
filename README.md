## usersテーブル
 |Column|Type|Options|
 |------|----|-------|
 |name|string|null: false, add_index: true|
 |email|string|null: false, unipue: true|
 |password|string|null: false|

## association
  - has_many :messages
  - has_many :group_users
  - has_many :groups, through: group_users

## groupsテーブル
 |Column|Type|Options|
 |------|----|-------|
 |name|string|null: false|

## association
  - has_many :messages
  - has_many :group_users
  - has_many :users, through: group_users

## messagesテーブル
 |Column|Type|Options|
 |------|----|-------|
 |user|reference|null: false, foreign_key: true|
 |group|reference|null: false, foreign_key: true|
 |image|string|
 |text|text|

## association
  - belong_to :user
  - belong_to :group

## group_usersテーブル
 |Column|Type|Options|
 |------|----|-------|
 |user|reference|null: false, foreign_key: true|
 |group|refernce|null: false, foreign_key: true|

## association
 - belong_to :user
 - belong_to :group
