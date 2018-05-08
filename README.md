## usersテーブル
 |Column|Type|Options|
 |------|----|-------|
 |name|string|null: false, index|
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
 |users|reference|integer|null: false, foreign_key: true|
 |groups|reference|integer|null: false, foreign_key: true|
 |image|string|
 |text|text|

## association
  - belong_to :user
  - belong_to :group

## group_userテーブル
 |Column|Type|Options|
 |------|----|-------|
 |reference_users|integer|null: false, foreign_key: true|
 |reference_groups|integer|null: false, foreign_key: true|

## association
 - belong_to :user
 - belong_to :group
